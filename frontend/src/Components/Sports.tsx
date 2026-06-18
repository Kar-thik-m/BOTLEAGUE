
import img1 from '../assets/sports/Rectangle 37.png';
import img2 from '../assets/sports/download__2_-removebg-preview 1.png';
import img3 from '../assets/sports/Rectangle 38.png';
import img4 from '../assets/sports/Rectangle 39.png';
import img5 from '../assets/sports/Rectangle 40.png';
import img6 from '../assets/sports/Rectangle 41.png';
import bgPattern from '../assets/sports/Rectangle 35.png';

const Sports = () => {
  const disciplines = [
    { title: 'Robo Race', img: img1, hasBorder: false, borderColor: '' },
    { title: 'Line Follower', img: img2, hasBorder: false, borderColor: '' },
    { title: 'RC Racing', img: img3, hasBorder: true, borderColor: 'border-[#FFD700]' },
    { title: 'FPV Drone Racing &\nAeromodelling', img: img4, hasBorder: true, borderColor: 'border-[#FF00FF]' },
    { title: 'Robo Hockey', img: img5, hasBorder: false, borderColor: '' },
    { title: 'Robo War', img: img6, hasBorder: false, borderColor: '' },
  ];

  return (
    <div className="bg-[#050505] text-white py-24 font-sans relative overflow-hidden border-t border-neutral-900">

      <div className="absolute right-0 bottom-0 opacity-40 pointer-events-none z-0">
        <img src={bgPattern} alt="" className="w-[800px] object-cover mix-blend-lighten" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <div className="mb-12">
          <div className="text-[#FF4C4C] font-[orbitron,sans-serif] font-wight-400 font-style-semibold tracking-wider mb-2 text-[24px]">SPORTS</div>
          <div className="text-[45px] font-[orbitron,sans-serif] font-wight-700 font-style-bold uppercase tracking-widest">COMPETITION DISCIPLINES</div>
        </div>


        <div className="grid grid-cols-4 gap-6">
          {disciplines.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col group cursor-pointer"
            >

              <div className={`h-40 md:h-44 w-full rounded-t-xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 ${item.hasBorder ? 'border-[3px] ' + item.borderColor : 'border border-b-0 border-neutral-800'}`}>
                <img
                  src={item.img}
                  alt={item.title.replace('\n', ' ')}
                  className="w-full h-full object-cover bg-white"
                />
              </div>


              <div className={`bg-[#151515] py-4 px-4 flex-1 flex items-center justify-center text-center rounded-b-xl border border-t-0 border-neutral-800 transition-transform duration-300 group-hover:-translate-y-1 ${item.hasBorder ? 'mt-0' : ''}`}>
                <h4 className="text-white font-Roboto font-wight-400 font-style-medium tracking-wide text-[25px] leading-snug whitespace-pre-line">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
