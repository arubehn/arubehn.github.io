"use client"

import { useState } from "react";
import { CaretIcon } from "./CaretIcon";
import { NewsPostProps } from "./News";


export function SimpleAccordion({ post }: NewsPostProps) {
 const [open, setOpen] = useState(false);

 return (
   <div className="w-full rounded-sm bg-transparent border">
     <input
       id="expandCollapse"
       defaultChecked={open}
       type="checkbox"
       className="peer sr-only"
     />
     <label
       htmlFor="expandCollapse"
       className=
         "w-full flex justify-left p-2 rounded-sm items-center bg-background hover:bg-(--theme) transition-colors duration-1000 ease-in-out"
       onClick={() => setOpen(!open)}
     >
       <div className="flex w-full">
        <div className="flex-none pr-4 font-semibold">{post.date}</div>
        <div className="flex grow font-semibold">{post.title}</div>
        <div className={`flex-none px-0 h-full w-auto ${open ? "rotate-180" : ""}`}><CaretIcon height={24}></CaretIcon></div>
        </div>
     </label>
     <div
       className={
        `${open ? "h-full" : "hidden"} overflow-hidden peer-checked:h-full p-2 peer-checked:overflow-scroll duration-1000 ease-in-out`}
     >
       <p className="text-primary">
         {post.text}
         {post.link ? " " : ""}
         {post.link ? <a href={post.link}><button className="text-sm">LINK</button></a> : ""}
       </p>
     </div>
   </div>
 );
};

