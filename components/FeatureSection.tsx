import { Loader, Proportions, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-12 md:grid-cols-12 w-full  mx-auto gap-7 mt-20 space-x-4 ">
      <div className=" border flex flex-col font-light justify-center mx-auto text-center col-span-4 w-fit p-3 rounded-md ">
        <Send size={100} className="mx-auto text-primary" />

        <h1 className="text-xl font-bold mt-4">1. Upload</h1>
        <p className="text-sm max-w-44 mx-auto">
          Upload <span className="font-bold">some selfies</span> of you (or
          other person) with different angles.
        </p>
      </div>
      <div className=" border flex flex-col font-light justify-center mx-auto text-center col-span-4 w-fit p-3 rounded-md ">
        <Loader size={100} className="mx-auto text-primary" />
        <h1 className="text-xl font-bold mt-4">2. Wait</h1>
        <p className="text-sm max-w-44 mx-auto">
          Take a coffee while we build{" "}
          <span className="font-bold">your studio</span> based on your photos.
        </p>
      </div>
      <div className=" border flex flex-col font-light justify-center mx-auto text-center col-span-4 w-fit p-3 rounded-md ">
        <Proportions size={100} className="mx-auto text-primary" />
        <h1 className="text-xl font-bold mt-4">3. Prompt</h1>
        <p className="text-sm max-w-44 mx-auto">
          Use your imagination to craft the
          <span className="font-bold">perfect prompt</span>.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
