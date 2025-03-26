import { ReactNode } from "react";
import Navbar from "../../Navbar";

interface Props {
  children: ReactNode;
}

const MasterContainer = ({ children }: Props) => {
  return (
    <div className="bg-[#000000ad] h-full w-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default MasterContainer;
