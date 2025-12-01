import Navlink from "./navlink";
export default function Navbar(){
    return(
        <div className="flex gap-10 justify-center py-2">
            <Navlink href="/" >Home</Navlink>
            <Navlink href="/about">About</Navlink>
            <Navlink href="/contact">Contact</Navlink>
        </div>
    )
}