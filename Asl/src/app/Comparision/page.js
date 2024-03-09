"use client"
import React from "react";
import VideoInput from "./VideoInput";
import ImageUploader from "./test";


export default function Comparision() {
  return (  

    <main className="h-screen bg-gradient-to-r from-[#D8D8D8] to-gray-800 text-black">
    <div className=" text-4xl font-bold pl-[550px] pt-[100px] text-[#1d2342]"> Sign Language Detection Using YOLO </div>
      <div className="  pt-[50px] pl-[450px]">
{/*      
     <VideoInput width={75} height={75} />  */}
     <ImageUploader className="p-[200px]" />
   </div>
    </main>
    
  );
}
