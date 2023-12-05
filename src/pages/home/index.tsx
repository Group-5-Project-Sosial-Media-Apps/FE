import Formcard from "@/components/formcard";
import Postcard from "@/components/postcard";
import Layout from "@/components/layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col bg-greenBg min-h-screen grow">
        <Formcard></Formcard>
        <div className="h-full">
          <Postcard></Postcard>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
