import type { NextPage } from "next";
import Navbar from "./components/Navbar";
import Timestamp from "./components/Timestamp";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Timestamp />
    </div>
  );
};

export default Home;
