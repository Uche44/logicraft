import type React from "react";
import StoreButtons from "./StoreButtons";

const AppDownload: React.FC = () => {
  return (
    <section className="w- bg-gray-50 mt-8 h-[22rem] px-8 py-4">
      <div className="w-full h-[19rem] bg-blue-500 rounded-[2rem] flex items-center justify-start">
        <div className="md:w-[40%] h-fit pl-12">
          <h3 className="text-3xl font-medium text-white flex flex-col">
            Download the free <span className="font-bold ">Logi Craft App</span>
          </h3>

          <p className="text-[1.1rem] mt-4 text-white">
            For faster, easier bookings and exclusive offers.
          </p>

          <StoreButtons />
        </div>

        <img
          src="/truck.png"
          alt=""
          className="right-0 absolute w-[70rem]"
        />
      </div>
    </section>
  );
};

export default AppDownload;
