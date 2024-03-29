import React from "react"
import Link from "next/link"
import Image from "next/image";


export const navItems = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About YOLO",
        link: "/About_YOLO",
    },
    {
        title: "About_CNN",
        link: "/About_CNN",
    },
    {
        title: "Comparison",
        link: "/Comparision",
    }
]
export default function Navbar() {
    return (<main>
        <div className="flex justify-between bg-black h-16 ">


            <div>
                <Link href={'/'}>
                    <div className={'h-full w-32 relative'}>
                        <Image src={""} alt={"logo"} fill={true} className={"object-contain"}/>
                    </div>

                    {/*Alternate version but best to use image optimizations provided by Nextjs*/}
                    {/*<img src="/logo.png" className={"h-full object-contain"} alt="logo"/>*/}
                    {/*Alternate version ends*/}
                </Link>
            </div>
            <div className="relative flex items-center gap-x-12 pl-4 pr-12 text-sm bg-black text-white z-0 h-16">

                {/*slanted shape on the left of navItems starts*/}
                {/* <div className={"absolute -ml-32 h-full w-60 bg-black -rotate-[30deg] -z-10"}/> */}
                {/*slanted shape ends*/}

                {
                    navItems.map((navItem, i) => {
                        return <Link key={i} className={"group w-16"} href={navItem.link}>
                            <div
                                className="relative py-3 rounded-lg group font-semibold group-hover:font-bold group-active:font-bold group-focus:font-bold">
                                {navItem.title}

                                {/*underline element starts*/}
                                <div
                                    className={"absolute bottom-0 transition-all max-w-0 group-focus:max-w-[1000px] group-active:max-w-[1000px] group-hover:max-w-[1000px] bg-white rounded-full w-3/4 h-1"}/>
                                {/*underline element ends*/}
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>

    </main>)
}
