"use client"
import React from "react";
import VideoInput from "./VideoInput";
import ImageUploader from "./test";


export default function Comparision() {
  return (  

    <main className="h-screen bg-[#D8D8D8] text-black">
    <div className=" pt-6 text-2xl font-bold pl-[450px] text-[#1d2342]"> Sign Language Detection Using YOLO </div>
      <div className="  pt-[50px] pl-[450px]">
{/*      
     <VideoInput width={75} height={75} />  */}
     <ImageUploader />
   </div>
    </main>
    
  );
}
