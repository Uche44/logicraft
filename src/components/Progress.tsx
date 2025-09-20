import { ExternalLink } from "lucide-react";
import FakeMap from "./FakeMap";
import ProcessFlow from "./HowWeWork";

const Progress: React.FC = () => {
  const data = ["LogiCart", "Shipping", "Delivery"];

  return (
    <section className="w-full min-h-screen bg-gray-50  relative">
      <div className="md:flex w-full h-[28rem]">
        <div className="md:w-[40%]">
          <h2 className="text-4xl font-bold">Let's See Our Progress</h2>
          <p className="text-[1.1rem] mt-4">
            Charting our course: Taking stock of our journey, Embracing growth,
            and paving the way forward. Let's pause, reflect and renew our
            commitment to progress.
          </p>
          <button className="text-white rounded-[2rem] bg-blue-600 flex text-2xl mt-4 px-5 py-3 cursor-pointer hover:brightness-110">
            More Info
            <ExternalLink className="ml-2" />
          </button>
        </div>
        <div className="md:w-[50%] absolute right-0">
          <FakeMap />
        </div>
      </div>

      <div className="z-600 hidden  w-full md:flex gap-6 h-[3rem] py-4 bg-blue-600 transform skew-y-5">
        {data.map((data) => (
          <h3 className="text-black text-2xl font-bold">{data}</h3>
        ))}
      </div>

      <div className="md:w-[40%] mt-26">
        <h2 className="text-4xl font-bold">How We Work</h2>
        <p className="text-[1.1rem] mt-4">
          Discover our streamlined process that ensures efficiency and
          excellence every step of the way.
        </p>
      </div>

      {/* image */}

      <img
        src="/cargo-on-crane.png"
        alt=""
        className=" hidden md:block w-[75rem] h-[43rem] absolute top-75 z-400 -right-4"
      />

      <ProcessFlow />
    </section>
  );
};

export default Progress;
