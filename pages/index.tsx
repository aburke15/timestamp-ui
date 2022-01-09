import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container text-center justify-content-center">
      <div className="row mt-2">
        <h2>Timestamp Microservice</h2>
        <div className="g-underline"></div>
      </div>
      <div className="row mt-5">
        <h4>Example Usage:</h4>
        <ul>
          <li>
            <a href="">Hello World</a>
          </li>
          <li>
            <a href="">Hello Test</a>
          </li>
        </ul>
      </div>
      <div className="row mt-5">
        <h4>Example Output:</h4>
      </div>
      <footer className="mt-5">
        By{" "}
        <a
          href="https://github.com/aburke15"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Andre Burke
        </a>
      </footer>
    </div>
  );
};

export default Home;
