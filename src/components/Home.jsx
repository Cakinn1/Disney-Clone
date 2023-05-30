import { FilmIcon } from "@heroicons/react/24/solid";
import React from "react";
import Icons from "./Icons";

function Home() {
  return (
    <div className="min-h-screen bg-[#1A1D29] text-white">
      <div className="global__Container flex">
        <img className="w-[50%]" src="/original.png" alt="" />
        <div className="pl-6 w-[50%] ">
          <img className="w-[400px]" src="/original2.png" alt="" />
          <p className="home__Text leading-7 pb-6">
            Subscribe to Disney+ | OnePass bundle and enjoy free delivery*
            across Australia's favourite brands, plus other benefits.
            <br />
            <br />
            Available for new and existing subscribers.
          </p>
          <span className="text-[44px] text-[#F9F9F9] font-semibold leading-7 ">
            $14.99
          </span>
          <span className="text-[18px]  text-[#C0C0C0] leading-7 ">
            / month($3 savings^)
          </span>
          <div className="py-6">
            <button className="border-none rounded-sm w-[360px] py-3 bg-[#0063E5] cursor-not-allowed">
              Get the bundle
            </button>
          </div>
          <p className="text-[#C0C0C0] text-[12px] leading-7">
            *Eligible items or orders. Exclusions, T&Cs apply.
            <br />
            If you are an existing subscriber, find out how to upgrade to the
            bundle in the FAQs below. ^Savings compared to separately purchasing
            OnePass and Disney+ monthly subscriptions. © 2022 Disney.
          </p>
        </div>
      </div>

      <div className="global__Container">
        <div className="flex justify-center items-center flex-col space-y-5">
          <h1 className="font-bold text-[#F9F9F9] text-[44px] leading-[54px]">
            Watch the way you want
          </h1>
          <p className="text-[#C0C0C0] text-[20px]">
            Enjoy the world's greatest stories - anytime, anywhere.
          </p>
        </div>
        <div>
          <img src="disneyicon.jpeg" alt="" />
        </div>
        <div className="flex flex-row w-full  ">
          <Icons
            title="Endless entertainment"
            para="Explore thousands of TV series, movies & originals, in stunning 4K"
            image={"filmicon.png"}
          />
          <Icons
            title="Create multiple profiles & watch anywhere"
            para="Download & watch offline, on your favourite devices. Create up to 7 profiles."
            image={"tvicon.png"}
          />
          <Icons
            title="Easy-to-use parental controls"
            para="Keep your family safe with our PIN operated profiles"
            image={"parent&Kid.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
