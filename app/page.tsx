import React from "react";
import Image from "next/image";
import TypeWritter from "@/components/TypeWritter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import FeatureSection from "@/components/FeatureSection";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" mx-auto">
      <section className="w-[80vw] mx-auto mt-10 ">
        <div className="container flex flex-col items-center space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Create Your Avatar
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              <span className="font-bold text-primary">
                {" "}
                Personalize your avatar
              </span>{" "}
              with our diverse range of
              <span className="font-bold text-primary">
                {" "}
                customization options.
              </span>{" "}
            </p>
          </div>
          <TypeWritter />
          <Button className="shadow-md mb-10">
            Start Creating Now <ArrowRight />
          </Button>
          <div className="flex my-10 space-x-3">
            <Link
              className="p-2 rounded-full bg-primary text-primary-foreground"
              target="_blank"
              href="https://github.com/avayyyyyyy/"
            >
              <Github size={30} />
            </Link>
            <Link
              className="p-2 rounded-full bg-primary text-primary-foreground"
              target="_blank"
              href={"https://www.linkedin.com/in/shubhcodes/"}
            >
              <Linkedin />
            </Link>
          </div>
          <div className="flex justify-center flex-wrap gap-3">
            <Image
              alt="Avatar"
              className="shadow-md object-cover overflow-hidden rounded-xl"
              height="300"
              src="https://slnt.com/cdn/shop/articles/Lensa_AI_Avatar.png?v=1671230991"
              width="500"
            />
            <Image
              alt="Avatar"
              src="https://techcrunch.com/wp-content/uploads/2022/12/lensa-ai-magic-avatar.jpg"
              className="shadow-md object-cover overflow-hidden rounded-xl"
              height="300"
              width="500"
            />
          </div>
        </div>
      </section>
      <FeatureSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
