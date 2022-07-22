import logo from "../assets/images/envision.svg"

export default function Navbar(){
    return(
        <div className=" hidden md:flex flex-row justify-between px-7 py-3 ">
            <div className=""><img src={logo}/></div>
            <div>
                <ul className="flex flex-row justify-between gap-x-10 mt-4 font-[roboto]">
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-[#ef6522] transition">Home</a>
                    </li>
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-[#ef6522] transition">About</a>
                    </li>
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-[#ef6522] transition">Divisions</a>
                    </li>
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-[#ef6522] transition">Projects</a>
                    </li>
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-[#ef6522] transition">Team</a>
                    </li>
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-[#ef6522] transition">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}