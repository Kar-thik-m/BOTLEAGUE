
const Footer = () => {
  const col1Links = [
    "The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks"
  ];
  const col2Links = [
    "Join the Team", "Sponsorships", "Help Center", "Contact Us", "Legal"
  ];

  return (
    <footer className="bg-[#0d0d0d] pt-8 pb-16 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-8">

        {/* Top divider line */}
        <div className="w-full h-px bg-neutral-800 mb-10"></div>

        <div className="flex flex-row justify-between items-start gap-12">

          {/* Quick Links */}
          <div>
            <h4 className="font-[Orbitron,sans-serif] font-bold uppercase tracking-wider text-[14px] text-white mb-6">
              QUICK LINKS
            </h4>
            <div className="flex gap-14">
              <ul className="flex flex-col gap-3">
                {col1Links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-[Roboto,sans-serif] text-neutral-400 hover:text-white transition-colors text-[13px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {col2Links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-[Roboto,sans-serif] text-neutral-400 hover:text-white transition-colors text-[13px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-[Orbitron,sans-serif] font-bold uppercase tracking-wider text-[14px] text-white mb-6">
              SOCIAL MEDIA
            </h4>
            <div className="flex gap-4">
              {/* YouTube */}
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
