const Hero: React.FC = () => {
  return (
    <section
      className="
        w-full h-[78vh]
        md:h-[90vh] overflow-hidden
        text-white mt-19 px-6 md:px-12  relative bg-[url('/sky.jpg')] bg-no-repeat bg-cover bg-center grid place-content-center rounded-[2rem] md:flex items-center 
        "
    >
      <div className="absolute z-100 top-0 left-0 w-full h-full bg-black/40"></div>

      <div className="w-full h-fit py-4 flex flex-col gap-4 items-start z-10">
        <h1 className="font-bold text-5xl md:text-6xl">LOGI CRAFT</h1>

        <h2 className="font-[500] text-3xl">Crafting Your Logistics Success</h2>

        <p className="font-normal text-[1.1rem]">
          Unlock Seamless Logistics: Where Precision Meets Progress. <br />
          Navigate the Future of Transportation with Confidence
        </p>

        {/* shipment tacking */}

        <div className="bg-white w-full md:w-[45%] h-fit py-4 px-2 flex flex-col items-center rounded-md mt-4 md:px-6">
          <h3 className="text-2xl text-black">Track my Shipment</h3>

          <div className="flex flex-col items-center w-full gap-8 md:flex-row mt-4 justify-center">
            <input
              type="text"
              placeholder="Booking No. Containers No"
              className="bg-blue-100 rounded-[2rem] w-[50%] px-4 py-2 mb-4 text-gray-600"
            />
            <button className="bg-blue-600 px-3 py-2 rounded-md">
              Track Shipment Now
            </button>
          </div>
        </div>
      </div>

      <img
        src="/cargo.png"
        alt=""
        className="hidden md:block absolute right-0 top-16 h-[35rem] "
      />
    </section>
  );
};

export default Hero;
