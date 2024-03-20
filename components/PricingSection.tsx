import { BadgeCheck } from "lucide-react";
import React from "react";

const PricingSection = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 flex-wrap bg-primary-foreground p-8 justify-center gap-6 ">
      <div className="lg:w-[40%] rounded-xl border-4 border-primary p-8">
        <h1 className="text-3xl font-extrabold">Why not Free?</h1>
        <h1 className="mt-3">
          Training a custom AI model is expensive due to the resources required.
        </h1>
      </div>
      <div className="lg:w-[40%] rounded-xl border-4 border-primary p-8">
        <div className="py-1 px-2 font-bold mb-3 border-green-950 border-2  bg-green-400 w-fit rounded-lg">
          1 Studio + 20 shots
        </div>
        <div className="text-3xl font-extrabold">
          Rs. 590 <span className="text-base font-normal">/month</span>
        </div>
        <div className="mt-4">
          <ul className="flex  flex-col gap-2">
            <li className="flex gap-2 items-center">
              <BadgeCheck />
              <span className="font-bold">1</span> Studio with a custom trained
              model
            </li>
            <li className="flex gap-2 items-center">
              <BadgeCheck />
              <span className="font-bold">20</span> avatars 4K generation
            </li>
            <li className="flex gap-2 items-center">
              <BadgeCheck />
              <span className="font-bold">30</span> AI Prompt assists{" "}
            </li>
            <li className="flex gap-2 items-center">
              <BadgeCheck />
              Craft your own prompt{" "}
            </li>
            <li className="flex gap-2 items-center">
              <BadgeCheck />
              Sponsorship development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
