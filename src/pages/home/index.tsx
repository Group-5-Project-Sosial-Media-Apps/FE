import Formcard from "@/components/formcard";
import Postcard from "@/components/postcard";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { getPost } from "@/lib/utils/apis/posting/api";
import { Posting } from "@/lib/utils/apis/posting/types";

const Home = () => {
  const [posting, setPosting] = useState<Posting[]>([]);

  useEffect(() => {
    fetchPosting();
  }, []);

  const fetchPosting = async () => {
    try {
      const result = await getPost(1, 20);

      setPosting(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="flex flex-col bg-greenBg min-h-screen items-center">
        <div className="flex flex-col w-full xl:w-2/3 md:px-10">
          <Formcard />
          {posting.map((item: Posting, index: number) => (
            <Postcard key={index} data={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
