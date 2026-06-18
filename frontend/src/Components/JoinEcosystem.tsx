
const JoinEcosystem = () => {
  const cards = [
    { title: "BECOME A JUDGE" },
    { title: "VOLUNTEER" },
    { title: "COMMUNITY MEMBER" }
  ];

  return (
    <div className="bg-[#0d0d0d] py-20 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="font-[Orbitron,sans-serif] font-bold uppercase tracking-widest text-[36px] mb-12">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#111111] border border-neutral-800 rounded-lg p-7 flex flex-col gap-6">

              <h3 className="font-[Orbitron,sans-serif] font-bold uppercase tracking-wider text-[16px] text-center border-b border-neutral-700 pb-5">
                {card.title}
              </h3>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#1a1a1a] border border-neutral-700 rounded px-4 py-2.5 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors w-full"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-[#1a1a1a] border border-neutral-700 rounded px-4 py-2.5 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors w-full"
                />
                <input
                  type="text"
                  placeholder="Enroll"
                  className="bg-[#1a1a1a] border border-neutral-700 rounded px-4 py-2.5 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors w-full"
                />
              </div>

              <button className="w-full bg-[#FF4C4C] hover:bg-red-600 text-white font-[Roboto,sans-serif] font-bold uppercase tracking-widest py-2.5 rounded transition-colors text-[14px]">
                SIGN UP
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default JoinEcosystem;
