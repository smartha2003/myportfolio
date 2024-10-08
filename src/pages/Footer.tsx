// Footer.tsx
import React from 'react';
import Behance from '../components/behance';
import GitHub from "../components/gitHub";
import LinkedInIcon from '../components/linkedIn';

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="mt-20 w-full flex flex-row justify-center items-center  relative border-t"
    >
      <div className="col flex flex-col justify-center items-center p-6 w-1/4 text-white">
        {/* <h3 className="font-semibold text-xl text-center">Shubhada Martha</h3> */}
        <p className="text-gray-400">
          Made with <span style={{ color: '#BA6573' }}>❤</span> by Shubhada
        </p>
        <div className="social flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/shubhada-martha/"
            target="_blank"
            className="link bg-gray-black rounded-lg p-2"
          >
            <div>
            <LinkedInIcon />
            </div>
          </a>
          <a
            href="https://github.com/smartha2003"
            target="_blank"
            className="link bg-gray-black rounded-lg p-2"
          >
            <div>
            <GitHub />
            </div>
          </a>
          <a
            href="https://www.behance.net/shubhada-martha"
            target="_blank"
            className="link bg-gray-black rounded-lg p-2"
          >
                <div>
                <Behance />
                </div>
          </a>
        </div>
        <p className="text-sm text-gray-200 mt-4">2024 © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
