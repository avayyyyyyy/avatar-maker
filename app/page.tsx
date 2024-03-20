import React from "react";
import Image from "next/image";
import TypeWritter from "@/components/TypeWritter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FeatureSection from "@/components/FeatureSection";
export default function Home() {
  return (
    <main className="w-[80vw] mx-auto">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container flex flex-col items-center space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Create Your Avatar
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              <span className="font-bold text-black">
                {" "}
                Personalize your avatar
              </span>{" "}
              with our diverse range of
              <span className="font-bold text-black">
                {" "}
                customization options.
              </span>{" "}
            </p>
          </div>
          <TypeWritter />
          <Button className="shadow-md">
            Start Creating Now <ArrowRight />
          </Button>
          <Image
            alt="Avatar"
            className="aspect-video object-cover overflow-hidden rounded-xl"
            height="338"
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            width="600"
          />
        </div>
      </section>
      <FeatureSection />
    </main>
  );
}
