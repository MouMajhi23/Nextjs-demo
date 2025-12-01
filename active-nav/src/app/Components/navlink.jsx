"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navlink({href, children}){
    const pathname = usePathname();
    const active = pathname === href;

    return(
        <div>
            <Link
             className={`${active ? "bg-blue-100 text-white" : "bg-white-100 text-black"} 
             py-2 px-2 rounded-md text-xl`}
             href={href}>
            {children}
            </Link>
        </div>
    )
}