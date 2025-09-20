import type React from "react";
import { ExternalLink } from "lucide-react"; // external link icon

const Services: React.FC = () => {
  const data = [
    {
      num: "01",
      mode: { mot: "By Road", desc: "Road transport has a crucial role" },
    },
    {
      num: "02",
      mode: { mot: "By Air", desc: "Air transport has a crucial role" },
    },
    {
      num: "03",
      mode: { mot: "By Sea", desc: "Sea transport has a crucial role" },
    },
  ];

  return (
    <section className="w-full h-fit px-6 md:px-12 py-16 bg-gray-50">
      <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-8">
        Our Services
      </h2>
      <div className="block md:flex gap-6">
        <div className="md:w-[60%]">
          {data.map((item) => (
            <div
              key={item.num}
              className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg w-full transition mb-4 flex items-center justify-between"
            >
              <span className="text-3xl text-gray-600 md:text-5xl -ml-2 font-semibold">
                {item.num}
              </span>
              <span className="w-[13rem] ml-4">
                <h3 className="text-xl font-bold mt-2 flex items-center justify-between">
                  {item.mode.mot}
                </h3>
                <p className="text-gray-600 mt-2">{item.mode.desc}</p>
              </span>
              <ExternalLink className="w-5 h-5 text-blue-500 md:mr-4 cursor-pointer" />
            </div>
          ))}
        </div>

        {/* text */}
        <div className="md:w-[45%]">
          <h2 className="text-3xl font-bold mb-4">
            Transport Solutions For Businesses to Solve Any Delivery Problems
          </h2>
          <p className="text-[1.1rem]">
            Logistics is the Process of Efficiently moving goods from point A to
            point B. Success demands minute attention to details, from packaging
            to warehousing to transportation.
          </p>

          <button className="text-white rounded-[2rem] bg-blue-600 flex text-2xl mt-4 px-5 py-3 cursor-pointer hover:brightness-110">
            More Info
            <ExternalLink className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
