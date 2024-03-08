"use client"
import Image from "next/image";
import Link from "next/link";
import Comparision from "./Comparision/page";


export default function Home() {
  return (
    <main className="">

  
      <div className="h-screen justify-items-end bg-gradient-to-r from-[#D8D8D8] to-gray-800 text-black relative pt-48">
      <div className="tracking-wide  ml-96 text-left font-bold text-3xl">American Sign Language Translator</div>
      <div className="tracking-wide  ml-96 text-left mb-1 text-lg font-medium">Let the SILENCE be heard</div>
      <Link href={'/Comparision'}>
      <button className=" w-40 h-10 pr-4 pl-4 ml-[700px] rounded-lg bg-[#7366C0] text-[#D8D8D8] hover:bg-[#5d5494] duration-700" >Get Started</button>
      </Link>
      
      
      </div>
      
    </main>
  );
}
// py D:\Minor_Project\Prabhas\Sign-Language-Detection\yolov7\detect.py --weights D:\Minor_Project\Prabhas\Sign-Language-Detection\yolo_model.pt --conf 0.5 --img-size 416 --source D:\Minor_Project\Prabhas\Sign-Language-Detection\rakshi.jpg --no-trace