
import serviceImg from '../assets/service.png';
import vectorIcon from '../assets/categories/Vector.png';
import ideaIcon from '../assets/categories/icons8_idea.png';
import engIcon from '../assets/categories/material-symbols_engineering.png';
import mindIcon from '../assets/categories/hugeicons_bitcoin-mind.png';

const InfoSection = () => {
  const whatIsItems = [
    { num: '1.', title: 'STRUCTURED EVENTS', desc: '"From one-off events to a year-round competitive season."' },
    { num: '2.', title: 'DIGITAL IDENTITY', desc: '"Your professional robotics legacy, tracked and verified."' },
    { num: '3.', title: 'NATIONAL RANKING', desc: '"Benchmark your skills against the best engineers in India."' },
    { num: '4.', title: 'CAREER PATHWAY', desc: '"Turning arena victories into real-world industry opportunities."' },
  ];

  const categories = [
    {
      icon: vectorIcon,
      title: 'MINI\nMAKERS',
      desc: 'Where Creativity Meets Logic.',
      highlight: true
    },
    {
      icon: ideaIcon,
      title: 'JUNIOR\nINNOVATORS',
      desc: 'Engineering & Strategy Fundamentals.',
      highlight: false
    },
    {
      icon: engIcon,
      title: 'YOUNG\nENGINEERS',
      desc: 'Advanced Wireless & Autonomous Control.',
      highlight: false
    },
    {
      icon: mindIcon,
      title: 'ROBO\nMINDS',
      desc: 'Elite Professional Sports & Robotics.',
      highlight: false
    }
  ];

  return (
    <div className="bg-[#181818] text-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-8 space-y-24">


        <div className="flex flex-row gap-16 items-center">
          <div className="flex-1 space-y-12">
            <h2 className="text-3xl md:text-4xl font-[orbitron,sans-serif] font-wight-700 font-style-bold uppercase tracking-wider">
              WHAT IS BOTLEAGUE?
            </h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {whatIsItems.map((item, idx) => (
                <div key={idx}>
                  <div className="text-red-500 font-bold text-xl mb-1">{item.num}</div>
                  <h3 className="text-[25px] font-weight-700 font-style-SemiBold font-Roboto uppercase tracking-wider mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-[20px] font-style-Regular font-Roboto leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-2/5 flex justify-end flex-shrink-0">
            <img src={serviceImg} alt="Botleague Services" className="w-full max-w-sm object-contain" />
          </div>
        </div>


        <div className="space-y-12">
          <h2 className="text-[40px] font-[orbitron,sans-serif] font-wight-700 font-style-bold  uppercase tracking-wider">
            CATEGORIES
          </h2>

          <div className="grid grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`bg-[#262626] rounded-xl p-7 flex flex-col justify-between h-full border ${cat.highlight ? 'border-[#B8860B]' : 'border-neutral-700'}`}
              >
                <div>
                  <div className="mb-6 h-14 flex items-center">
                    <img src={cat.icon} alt={cat.title.replace('\n', ' ')} className="max-h-full w-auto object-contain" />
                  </div>
                  <h3 className="text-xl font-[orbitron,sans-serif]  font-style-Bold uppercase tracking-wider mb-4 whitespace-pre-line leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-neutral-400 text-[20px] font-style-Medium font-Roboto mb-10 leading-snug">
                    {cat.desc}
                  </p>
                </div>

                <a href="#" className="text-[#FF4C4C] font-Roboto font-style-Medium  tracking-wider uppercase hover:text-red-400 transition-colors flex items-center gap-2">
                  LEARN MORE
                  <span>&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
