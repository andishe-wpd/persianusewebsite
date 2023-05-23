"use client";
import { useState, useEffect } from "react";
export default function Home() {
  return (
    <main className={`relative min-h-[80vh] m-24 p-10 bg-red-200 `}>
      {/* header */}
      <div className="absolute top-[-20px] bg-red-400  dark:bg-red-900 h-9 w-[80%] mx-auto left-[10%] ">
        این هدره
      </div>
      <div className="absolute top-[80px] bg-red-400 h-9 w-[18%] mx-auto right-[-5%] min-h-[65vh] ">
        این سادیبباره
      </div>
      <div className=" bg-red-500 min-h-[73vh] p-10 pr-[12%]">
        این کانتینر داخلیه
      </div>
      <div className="absolute bottom-[-20px] bg-red-400 h-9 w-[80%] mx-auto left-[10%] ">
        این فوتره
      </div>
    </main>
  );
}
