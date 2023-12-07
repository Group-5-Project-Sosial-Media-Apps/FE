import Formcard from "@/components/formcard";
import Postcard from "@/components/postcard";
import Layout from "@/components/layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col bg-greenBg min-h-screen items-center">
        <div className="flex flex-col w-full xl:w-2/3 md:px-10">
          <Formcard />
          <Postcard />
          <Postcard />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
