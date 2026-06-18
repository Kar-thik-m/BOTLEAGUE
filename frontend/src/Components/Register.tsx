
import icon1 from '../assets/register/Vector.png';
import icon2 from '../assets/register/Vector (1).png';
import icon3 from '../assets/register/Vector (2).png';
import icon4 from '../assets/register/Vector (3).png';
import leaderboardImg from '../assets/register/p.png';

const Register = () => {
  const benefits = [
    {
      icon: icon1,
      title: "NATIONAL RECOGNITION",
      desc: '"Benchmark your skills on India\'s official robotics leaderboard."'
    },
    {
      icon: icon2,
      title: "FAIR JUDGING",
      desc: '"Compete with confidence under standardized, expert-led evaluation."'
    },
    {
      icon: icon3,
      title: "CAREER OPS",
      desc: '"Bridge the gap between arena victories and top-tier tech placements."'
    },
    {
      icon: icon4,
      title: "HIGH - ENERGY ECO",
      desc: '"Join a nationwide community of elite innovators and robotics athletes."'
    }
  ];

  return (
    <div className="bg-[#111111] py-16 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-8 flex flex-row items-center gap-8">

        <div className="flex-1 min-w-0">


          <div className="mb-8">
            <p className="text-[#FF4C4C] font-[Orbitron,sans-serif] font-semibold uppercase tracking-wider text-[18px] mb-2">
              WHY REGISTER ?
            </p>
            <h2 className="font-[Orbitron,sans-serif] font-bold uppercase text-[32px] leading-[1.15] tracking-wide">
              THE LEAGUE ADVANTAGE
            </h2>
          </div>


          <div className="flex flex-col gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5">

                <div className="w-10 h-10 flex-shrink-0 mt-0.5">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-[Roboto,sans-serif] font-bold uppercase tracking-wider text-[15px] leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 font-[Roboto,sans-serif] text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="w-[380px] flex-shrink-0">
          <img
            src={leaderboardImg}
            alt="Leaderboard"
            className="w-full object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Register;
