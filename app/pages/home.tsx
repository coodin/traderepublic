// "use client";

import dynamic from "next/dynamic";
import Root from "../components/root";
const DynamicRoot = dynamic(() => import("../components/root"), { ssr: false });

const Home = () => {
  return (
    <>
      <Root />
    </>
  );
};

export default Home;
