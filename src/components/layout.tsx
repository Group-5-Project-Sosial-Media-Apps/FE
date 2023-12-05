import { ReactNode } from "react";
import Navigation from "./navigation";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="min-h-screen flex flex-row bg-greenBg">
      <div className="fixed">
        <Navigation />
      </div>
      <div className=" w-full ml-64">
        <div className="px-0 lg:px-52 lg:mx-32">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
