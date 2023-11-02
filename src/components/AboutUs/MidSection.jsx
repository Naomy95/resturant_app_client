import React from "react";
import mia from "../../assets/images/Artboard 35.png";
import park from "../../assets/images/Artboard 36.png";
import gen from "../../assets/images/Artboard 37.png";

const MidSection = () => {
  return (
    <div className="bg-black px-12">

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 lg:gap-0">
        <div className="lg:col-span-4  ">
          <img className="w-full h-full  object-contain" src={mia} alt="" />
        </div>
        <div className="lg:col-span-1 text-white text-sm text-center ">
          <div className="lg:transform lg:-rotate-90 lg:mt-64">Grand Chef</div>
        </div>
        <div className="lg:col-span-4 lg:pr-10  text-white text-sm ">
          <p className="text-white font-normal font-sans text-xl lg:text-2xl mb-4 lg:mb-10 lg:mt-20 lg:leading-10 lg:text-justify text-center">Mila Kim</p>
          <p className="text-white font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
            Mila's culinary creations are reflective on her own wxtensive
            travels and her laove for food. She handles unexpected challenges in
            the kitchen, such as kitchen emergencies, customer complaints, and
            staff issues.
          </p>
          <p className="text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
            She brings innovation to the kitchen, experimenting with flavors and
            techniques to create unique and memorable dishes.
          </p>
          <p className="text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
           Favourite Food: GRILLED TELAPIA WITH FISH SAUCE
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 lg:gap-0 mt-10">
      <div className="lg:col-span-4 lg:pr-10  text-white text-sm ">
      <img className="w-full h-full  object-contain lg:hidden" src={park} alt="" />
          <p className="hidden lg:block text-white font-normal font-sans text-xl lg:text-2xl mb-4 lg:mb-10 lg:mt-20 lg:leading-10 text-end">Jason Park</p>
          <p className="hidden lg:block text-white font-normal font-sans text-xs lg:text-lg lg:leading-10 text-end">
            Jasons's culinary creations are reflective on her own wxtensive
            travels and her laove for food. She handles unexpected challenges in
            the kitchen, such as kitchen emergencies, customer complaints, and
            staff issues.
          </p>
          <p className="hidden lg:block text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-end">
            She brings innovation to the kitchen, experimenting with flavors and
            techniques to create unique and memorable dishes.
          </p>
          <p className="hidden lg:block text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-end">
           Favourite Food: GRILLED TELAPIA WITH FISH SAUCE
          </p>
        </div>

        <div className="lg:col-span-1 text-white text-sm text-center   ">
          <div className="lg:transform lg:-rotate-90 lg:mt-64">Executive Chef</div>
        </div>
      
        <div className="lg:col-span-4  ">
          <img className="hidden lg:block w-full h-full  object-contain" src={park} alt="" />
          <p className=" lg:hidden text-white font-normal font-sans text-xl lg:text-2xl mb-4 lg:mb-10 lg:mt-20 lg:leading-10 text-center">Jason Park</p>
          <p className="lg:hidden text-white font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
            Jasons's culinary creations are reflective on her own wxtensive
            travels and her laove for food. She handles unexpected challenges in
            the kitchen, such as kitchen emergencies, customer complaints, and
            staff issues.
          </p>
          <p className="lg:hidden text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
            She brings innovation to the kitchen, experimenting with flavors and
            techniques to create unique and memorable dishes.
          </p>
          <p className="lg:hidden text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
           Favourite Food: GRILLED TELAPIA WITH FISH SAUCE
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 lg:gap-0 mt-10">
        <div className="lg:col-span-4  ">
          <img className="w-full h-full  object-contain" src={gen} alt="" />
        </div>
        <div className="lg:col-span-1 text-white text-sm    ">
          <div className="lg:transform lg:-rotate-90 lg:mt-64 text-center ">Service Manager</div>
        </div>
        <div className="lg:col-span-4 lg:pr-10  text-white text-sm ">
          <p className="text-white font-normal font-sans text-xl lg:text-2xl mb-4 lg:mb-10 lg:mt-20 lg:leading-10 lg:text-justify text-center">Gen Ueno</p>
          <p className="text-white font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
            Mila's culinary creations are reflective on her own wxtensive
            travels and her laove for food. She handles unexpected challenges in
            the kitchen, such as kitchen emergencies, customer complaints, and
            staff issues.
          </p>
          <p className="text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
            She brings innovation to the kitchen, experimenting with flavors and
            techniques to create unique and memorable dishes.
          </p>
          <p className="text-white mt-2 lg:mt-5 font-normal font-sans text-xs lg:text-lg lg:leading-10 text-justify">
           Favourite Food: GRILLED TELAPIA WITH FISH SAUCE
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
