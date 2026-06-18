import Logo from "../../assets/Img/logo.png";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between bg-[#1A1919] px-8 py-2 text-white">

            <div>
                <img
                    className="w-[290px] h-[58px] object-contain"
                    src={Logo}
                    alt="Logo"
                />
            </div>


            <div className="flex items-center gap-16 font-['Orbitron'] text-[22px] font-normal leading-none">
                <a href="#" className="hover:text-red-500 transition-colors">
                    Events
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                    Programs
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                    Community
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                    Ranks
                </a>
            </div>


            <div className="flex items-center gap-4">
                <button className="border border-white px-6 py-2 rounded-md font-medium">
                    LOGIN
                </button>

                <button className="bg-[#FF5A4D] px-6 py-2 rounded-md font-medium">
                    REGISTER NOW
                </button>
            </div>
        </nav>
    );
};

export default Nav;