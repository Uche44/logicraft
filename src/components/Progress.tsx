import { ExternalLink } from "lucide-react";
import FakeMap from "./FakeMap";
import ProcessFlow from "./HowWeWork";
import { FlowingLogos } from "./ui/flowing-logos";

const Progress: React.FC = () => {

  return (
    <div
      className="relative"
      data-aos="fade-left"
    >
      <section className="w-full min-h-screen bg-gray-50  relative px-6 md:px-12">
        <div className="md:flex w-full h-[28rem]">
          <div className="md:w-[40%]">
            <h2 className="text-4xl font-bold">Let's See Our Progress</h2>
            <p className="text-[1.1rem] mt-4">
              Charting our course: Taking stock of our journey, Embracing
              growth, and paving the way forward. Let's pause, reflect and renew
              our commitment to progress.
            </p>
            <button className="text-white rounded-[2rem] bg-blue-600 flex text-2xl mt-4 px-5 py-3 cursor-pointer hover:brightness-110">
              More Info
              <ExternalLink className="ml-2" />
            </button>
          </div>
          <div className="md:w-[50%] absolute right-10">
            <FakeMap />
          </div>
        </div>

        <div className="md:w-[40%] -mt-30 md:mt-26 ">
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
          className=" hidden md:block md:w-[75rem] md:h-[43rem] absolute md:top-75 z-400 md:-right-4"
          loading="lazy"
        />

        <ProcessFlow />
      </section>

      <div className="z-600 absolute top-[25rem] hidden  w-full md:flex gap-6 h-[6rem] py-4 bg-blue-600 transform skew-y-7">
        <FlowingLogos
          data={[
            { name: "Cargo", image: "/cargo.png" },
            { name: "Engineers", image: "/engineers.jpg" },
            { name: "Logistics", image: "/logistics.jpg" },
            { name: "Sea", image: "/sea.jpg" },
            { name: "Sea2", image: "/sea2.jpg" },
            { name: "Truck", image: "/truck.png" },
          ]}
        />
      </div>
    </div>
  );
};

export default Progress;
