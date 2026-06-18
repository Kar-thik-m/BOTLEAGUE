
import sp1 from '../assets/sponsors/download-removebg-preview (1) 1.png';
import sp2 from '../assets/sponsors/download__1_-removebg-preview 1.png';
import sp3 from '../assets/sponsors/images-removebg-preview 1.png';
import sp4 from '../assets/sponsors/images__1_-removebg-preview 1.png';
import sp5 from '../assets/sponsors/images__2_-removebg-preview 1.png';
import sp6 from '../assets/sponsors/images__3_-removebg-preview 1.png';

const Sponsors = () => {
  const sponsorsList = [
    { name: "NIT DELHI", img: sp1 },
    { name: "INDIAN BIT", img: sp2 },
    { name: "NIT SILCHAR", img: sp3 },
    { name: "ROBO COMPANY", img: sp4 },
    { name: "IIT BOMBAY", img: sp5 },
    { name: "ROBO COMPANY", img: sp6 },
  ];

  return (
    <div className="bg-[#0d0d0d] py-16 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-8">

        <h3 className="font-[Orbitron,sans-serif] font-bold uppercase tracking-widest text-[28px] mb-12">
          SPONSORS
        </h3>

        <div className="grid grid-cols-3 gap-x-12 gap-y-10">
          {sponsorsList.map((sponsor, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="h-14 w-14 object-contain flex-shrink-0"
              />
              <span className="font-[Roboto,sans-serif] font-bold tracking-wider text-[14px] text-neutral-300 uppercase leading-snug">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sponsors;
