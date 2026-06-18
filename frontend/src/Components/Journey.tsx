

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const MonumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22h20" />
    <path d="M4 22v-6h2v6" />
    <path d="M18 22v-6h2v6" />
    <path d="M8 22v-8h8v8" />
    <path d="M10 14V8c0-3 1-5 2-5s2 2 2 5v6" />
    <path d="M12 3V1" />
  </svg>
);

const PodiumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 14H4v8h4v-8z" />
    <path d="M14 10h-4v12h4V10z" />
    <path d="M20 16h-4v6h4v-6z" />
    <polygon points="12 2 13.5 5 16.5 5.5 14 7.5 15 10.5 12 9 9 10.5 10 7.5 7.5 5.5 10.5 5" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Journey = () => {
  const steps = [
    {
      title: "BUILD YOUR TEAM",
      icon: <WrenchIcon />
    },
    {
      title: "COMPETE ACROSS INDIA",
      icon: <MonumentIcon />
    },
    {
      title: "EARN NATIONAL RANKING & VALUE",
      icon: <PodiumIcon />
    },
    {
      title: "JOIN THE LEAGUE",
      icon: <UsersIcon />
    }
  ];

  return (
    <div className="bg-black py-20 font-sans border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h3 className="text-[#FF4C4C] font-Roboto font-style-Medium tracking-wider font-wight-500 text-[30px] mb-3">USER JOURNEY</h3>
          <h2 className="text-white text-[45px] font-wight-700 font-style-bold  font-[Orbitron,sans-serif] uppercase  mb-1">Your Path To The League</h2>
          <p className="text-neutral-500 font-Roboto font-wight-400 font-style-medium text-[24px] mb-2">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>


        <div className="relative flex flex-row gap-4 justify-between max-w-5xl mx-auto">


          <div className="absolute top-14 left-[7%] right-[7%] h-[2px] bg-[#0000ff] z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center flex-1">

              <div className="w-28 h-28 rounded-full border-[8px] border-[#222] bg-black flex items-center justify-center relative mb-4 shadow-[0_0_15px_rgba(0,0,255,0.15)]">
                <div className="absolute inset-[2px] rounded-full border-[3px] border-[#0000ff]"></div>
                <div className="text-white z-10 relative">
                  {step.icon}
                </div>
              </div>

              <div className="w-[1px] h-6 bg-white mb-3 opacity-50"></div>

              <div className="text-[#FF4C4CED] font-Roboto font-wight-700 font-style-Medium tracking-widest text-[24px]">Step {i + 1}</div>
              <p className="text-white font-Roboto font-wight-400 font-style-Medium text-[25px]">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
