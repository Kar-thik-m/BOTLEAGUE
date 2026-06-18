
const Events = () => {
    return (
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-900/20 text-white py-16 font-sans">
            <div className="max-w-7xl mx-auto px-8">


                <h1 className="font-[Orbitron,sans-serif] font-bold text-[40px] uppercase tracking-wide mb-10">
                    Competitions &amp; Events
                </h1>


                <div className="grid grid-cols-3 gap-6">


                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#FF4C4C] font-[Orbitron,sans-serif] font-semibold tracking-wider text-[22px] uppercase">
                            Live Now
                        </h2>

                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-5 flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-[Roboto,sans-serif] font-medium text-[22px]">Bengaluru Regionals</span>
                                <span className="bg-red-500 text-[11px] font-bold px-2 py-1 rounded text-white uppercase flex-shrink-0 ml-2">
                                    Ongoing
                                </span>
                            </div>
                            <p className="font-[Roboto,sans-serif] text-[16px] text-neutral-400 mb-5 pb-4 border-b border-neutral-700">
                                Lorem Ipsum
                            </p>


                            <div className="flex items-center gap-2 h-44">

                                <div className="flex flex-col justify-around h-full w-14 gap-1">
                                    <div className="bg-neutral-600 h-8 rounded"></div>
                                    <div className="bg-neutral-600 h-8 rounded"></div>
                                    <div className="bg-neutral-600 h-8 rounded"></div>
                                    <div className="bg-neutral-600 h-8 rounded"></div>
                                </div>

                                <div className="flex flex-col justify-around h-full w-4">
                                    <div className="h-1/4 border-r-2 border-t-2 border-b-2 border-red-500/60 rounded-r-sm"></div>
                                    <div className="h-1/4 border-r-2 border-t-2 border-b-2 border-red-500/60 rounded-r-sm"></div>
                                </div>

                                <div className="flex flex-col justify-around h-3/4 w-14">
                                    <div className="bg-neutral-600 h-7 rounded"></div>
                                    <div className="bg-neutral-600 h-7 rounded"></div>
                                </div>

                                <div className="flex flex-col justify-center h-3/4 w-4">
                                    <div className="h-1/2 border-r-2 border-t-2 border-b-2 border-red-500/60 rounded-r-sm"></div>
                                </div>

                                <div className="flex flex-col justify-center w-14">
                                    <div className="bg-neutral-600 h-7 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <h2 className="text-white font-[Orbitron,sans-serif] font-semibold tracking-wider text-[22px] uppercase">
                            Upcoming
                        </h2>


                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-5">
                            <h3 className="font-[Roboto,sans-serif] font-medium text-[22px] mb-4">Event in Mumbai</h3>
                            <div className="flex gap-6 mb-6">
                                <div>
                                    <p className="text-neutral-500 text-[13px] mb-1">Date</p>
                                    <p className="font-[Roboto,sans-serif] text-[16px]">11/11/25</p>
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-[13px] mb-1">Location</p>
                                    <p className="font-[Roboto,sans-serif] text-[16px]">BKC</p>
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-[13px] mb-1">Category</p>
                                    <p className="font-[Roboto,sans-serif] text-[16px]">Pro</p>
                                </div>
                            </div>
                            <button className="w-full bg-[#FF4C4C] hover:bg-red-600 transition-colors py-2 rounded text-white font-[Roboto,sans-serif] font-semibold tracking-wider text-[15px]">
                                REGISTER
                            </button>
                        </div>


                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-5">
                            <h3 className="font-[Roboto,sans-serif] font-medium text-[22px] mb-4">Event in Delhi</h3>
                            <div className="flex gap-6 mb-6">
                                <div>
                                    <p className="text-neutral-500 text-[13px] mb-1">Date</p>
                                    <p className="font-[Roboto,sans-serif] text-[16px]">12/12/25</p>
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-[13px] mb-1">Location</p>
                                    <p className="font-[Roboto,sans-serif] text-[16px]">Pragati Maidan</p>
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-[13px] mb-1">Category</p>
                                    <p className="font-[Roboto,sans-serif] text-[16px]">Amateur</p>
                                </div>
                            </div>
                            <button className="w-full bg-[#FF4C4C] hover:bg-red-600 transition-colors py-2 rounded text-white font-[Roboto,sans-serif] font-semibold tracking-wider text-[15px]">
                                REGISTER
                            </button>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <h2 className="text-white font-[Orbitron,sans-serif] font-semibold tracking-wider text-[22px] uppercase">
                            Past Results
                        </h2>

                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-5 flex-1">
                            <div className="flex flex-col gap-5">

                                <div className="border-b border-neutral-700 pb-5">
                                    <h3 className="font-[Roboto,sans-serif] font-medium text-[22px] mb-1">Bengaluru Regionals</h3>
                                    <p className="font-[Roboto,sans-serif] text-[15px] text-neutral-400">Winner: Team Alpha</p>
                                </div>

                                <div className="border-b border-neutral-700 pb-5">
                                    <h3 className="font-[Roboto,sans-serif] font-medium text-[22px] mb-1">Mumbai Qualifiers</h3>
                                    <p className="font-[Roboto,sans-serif] text-[15px] text-neutral-400">Winner: Team Beta</p>
                                </div>

                                <div>
                                    <h3 className="font-[Roboto,sans-serif] font-medium text-[22px] mb-1">Chennai Open</h3>
                                    <p className="font-[Roboto,sans-serif] text-[15px] text-neutral-400">Winner: Team Gamma</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Events;