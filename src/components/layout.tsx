import { ReactNode } from "react";
import Navigation from "./navigation";
import MobileNavigation from "./bottombar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-greenBg">
      <Navigation />

      <div className="w-full flex flex-col grow overflow-auto">{children}</div>
      <MobileNavigation />
    </div>
  );
};

export default Layout;
