import type React from "react";
import StoreButtons from "./StoreButtons";

const AppDownload: React.FC = () => {
  return (
    <section className="w-full px-6 bg-gray-50 mt-8 h-[22rem] flex items-center justify-center">
      <div className="w-full h-fit md:h-[19rem] bg-blue-500 rounded-[2rem] flex items-center justify-start k">
        <div className="w-full md:w-[40%] py-4 h-fit px-8 md:pl-12">
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
          className="hidden md:block right-0 absolute w-[70rem]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AppDownload;
