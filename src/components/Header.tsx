import type { FunctionComponent } from "react";
import logoSymbol from '../assets/logo-symbol.svg';
import logoText from "../assets/logo-text.svg";

const Header: FunctionComponent = () => {
  return (
    <header className="w-full absolute top-0 z-50 text-white text-xs">
      {/* Desktop header */}
      <div className="hidden lg:flex w-full px-6 py-4 items-start justify-between">
        {/* Left: Logo */}
        <div className="flex flex-col items-start lg:flex-row lg:items-center gap-[8px]">
          <img
            src={logoSymbol}
            alt="Topvizio symbol"
            className="w-[32px] lg:w-[40px] h-auto"
          />
          <img
            src={logoText}
            alt="Topvizio text"
            className="w-[80px] lg:w-[100px] h-auto"
          />
        </div>

        {/* Center: Time Info */}
        <div className="hidden lg:flex flex-col items-center gap-1 font-semibold text-[16px] leading-[16px]">
          <div>
            Birmingham <span className="font-bold">{"{7:57 AM}"}</span>
          </div>
          <div>
            Kyiv <span className="font-bold">{"{7:57 AM}"}</span>
          </div>
        </div>

        {/* Right: Nav links */}
        <nav className="hidden lg:flex flex-row items-start gap-8 text-xs">
          <div className="flex flex-col items-end gap-1 font-semibold text-[16px] leading-[16px]">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Projects
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </div>
          <div className="font-semibold text-[16px] leading-[16px]">
            <a
              href="#"
              className="hover:underline flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacts <span aria-hidden>↗</span>
            </a>
          </div>
          <div>
            <button className="flex items-center gap-3 w-fit h-fit">
              <span className="font-semibold text-[16px] leading-[16px]">
                Menu
              </span>
              <span className="flex flex-col justify-between w-[23px] h-[14px]">
                <span className="w-full h-[2px] bg-white" />
                <span className="w-full h-[2px] bg-white" />
                <span className="w-full h-[2px] bg-white" />
              </span>
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile header */}
      <div className="flex flex-col w-full px-6 py-4 text-white text-sm lg:hidden">
        {/* Top row: Logo + Menu button */}
        <div className="flex justify-between items-start">
          {/* Stacked Logo */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center gap-[4px]">
            <img
              src={logoSymbol}
              alt="Topvizio logo symbol"
              className="w-[20px] lg:w-[20px] h-auto"
            />
            <img
              src={logoText}
              alt="Topvizio logo text"
              className="w-[50px] lg:w-[60px] h-auto"
            />
          </div>

          {/* Time info (stacked) */}
          <div className="flex flex-col items-center font-semibold text-[14px] leading-[14px]">
            <div>
              Birmingham <span className="font-bold">{"{7:57 AM}"}</span>
            </div>
            <div>
              Kyiv <span className="font-bold">{"{7:57 AM}"}</span>
            </div>
          </div>

          {/* Menu Button (only) */}
          <button className="flex items-center gap-2">
            <span className="font-semibold text-[16px] leading-[16px]">
              Menu
            </span>
            <span className="flex flex-col justify-between w-[23px] h-[14px]">
              <span className="w-full h-[2px] bg-white" />
              <span className="w-full h-[2px] bg-white" />
              <span className="w-full h-[2px] bg-white" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
