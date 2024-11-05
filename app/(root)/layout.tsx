import NavBar from "@/components/NavBar";
import React, { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="font-work-sans ">
      <NavBar />
      {children}
    </main>
  );
};

export default layout;
