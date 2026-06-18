import HeroImg from "../assets/Img/img1.png";

const HeroSection = () => {
    return (
        <div className="relative w-full h-[619px] overflow-hidden bg-black">

            <div className="absolute inset-0 flex">
                <div className="relative w-1/3 lg:w-[453px] h-full bg-black flex-shrink-0">
                    <div
                        className="absolute top-0 left-full h-full w-[350px] z-20 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(90deg,#000 0%,rgba(0,0,0,.95) 15%,rgba(0,0,0,.75) 35%,rgba(0,0,0,.35) 70%,transparent 100%)",
                        }}
                    />
                </div>
                <div
                    className="relative flex-1 h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImg})` }}
                />
            </div>

            <div className="absolute inset-0 z-30 flex items-center pointer-events-none">
                <div className="w-full max-w-7xl mx-auto px-8 relative pointer-events-auto h-full flex flex-col justify-center">


                    <div className="absolute top-[100px] right-8 lg:right-[15%] hidden md:block">
                        <span className="rounded-[5px] flex items-center justify-center bg-[#121212] py-2 px-3 h-[39px] font-[Roboto,sans-serif] font-style-SemiBold text-[16px] leading-[100%] border-[#D9D9D966] border shadow-lg">
                            <span className="text-white rounded text-sm">
                                <span className="text-[#FF4C4C]">🔴LIVE </span> : Episode 14 - Bengaluru Regionals
                            </span>
                            <span className="text-[#FF4C4C] ml-3 font-bold hover:underline cursor-pointer">
                                WATCH LIVE
                            </span>
                        </span>
                    </div>


                    <div className="font-[Orbitron,sans-serif] w-full max-w-[781px] text-white font-semibold tracking-wide text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] md:leading-[100px] mt-12 md:mt-0">
                        INDIA'S ULTIMATE<br />
                        ROBOTICS ARENA
                    </div>

                    <p className="w-full max-w-[527px] mt-6 text-[#D9D9D9] font-[Roboto,sans-serif] font-medium text-[20px] md:text-[28px] leading-[1.3] md:leading-[34px]">
                        Build. Compete. Rank. The National Ecosystem for Robotics Arena
                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">
                        <button
                            className="w-[236px] h-[52px] rounded-[5px] text-white font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition hover:opacity-90 flex items-center justify-center"
                            style={{
                                background: "linear-gradient(90deg, #FF4C4C 0%, #992E2E 100%)",
                            }}
                        >
                            <span className="font-[Roboto,sans-serif] font-medium text-[18px] md:text-[21px] text-white text-center tracking-wide">
                                CREATE ACCOUNT
                            </span>
                        </button>
                        <button
                            className="w-[236px] h-[52px] rounded-[5px] text-white font-semibold border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <span className="font-[Roboto,sans-serif] font-medium text-[18px] md:text-[21px] text-white text-center tracking-wide">
                                EXPLORE EVENTS
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;