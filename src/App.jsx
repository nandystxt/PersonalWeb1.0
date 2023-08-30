import React from "react";
import { Navbar, Hero, Footer, Contact } from "./components";

const App = () => {
  return (
    <>
      <div className="bg-secondary px-5 py-5">
        <div className="rounded-2xl bg-primary py-4">
          <div>
            <Navbar />
          </div>
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 p-4 pt-[200px]">
            <div>
              <Hero />
            </div>
            <div className="grid-col-2">
              <Contact />
            </div>
          </div>
          <div className="pt-[200px] text-center">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
