import { ReactNode } from "react";
import Navbar from "../../Navbar";

interface Props {
  children: ReactNode;
}

const MasterContainer = ({ children }: Props) => {
  return (
    <div className="bg-[#000000ad] min-h-screen w-full relative z-0">
      <Navbar />
      {children}
    </div>
  );
};

export default MasterContainer;
