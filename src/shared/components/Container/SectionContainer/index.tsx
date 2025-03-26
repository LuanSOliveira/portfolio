import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return (
    <section className="pt-20 px-[10%] flex justify-center items-center w-screen h-screen">
      {children}
    </section>
  );
};

export default SectionContainer;
