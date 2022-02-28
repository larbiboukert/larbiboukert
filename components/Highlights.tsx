import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type Props = {};

function Highlights({}: Props) {
  return (
    <div className="mt-14 flex overflow-x-auto space-x-6">
      <Swiper modules={[Navigation]} navigation slidesPerView="auto">
        {["react", "nextjs", "typescript", "aspnetcore", "csharp", "node"].map(
          (pic, k) => (
            <SwiperSlide key={k} className="flex flex-col items-center">
              <div>
                <Image
                  src={`/logos/${pic}.png`}
                  layout="fixed"
                  width={80}
                  height={80}
                  objectFit="fill"
                  alt="story"
                  className="rounded-full"
                />
              </div>
              <p className="mt-1">{`Larbi--${k}`}</p>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default Highlights;
