import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import onClickOutside from "react-onclickoutside";

const NavbarSM = () => {
  return (
    <div className="flex absolute justify-end min-w-[600px]  md:hidden mt-12 top-0 right-0 overflow-y-hidden z-[1000]">
      {/* Menu when display below 720px */}
      <div className=" flex flex-col side-bar-dropdown bg-[#18435A] justify-between min-w-[240px]">
        <div>
          <ul className="gap-6 md:hidden flex flex-col p-4">
            <HashLink smooth to="/Contents#home">
              <li className="hover:text-blue-500">Home</li>
            </HashLink>
            <HashLink smooth to="/Contents#aboutMe">
              <li className="hover:text-blue-500">About</li>
            </HashLink>
            <HashLink smooth to="/Contents#skillSet">
              <li className="hover:text-blue-500">Skill</li>{" "}
            </HashLink>
            <HashLink smooth to="/Contents#myProject">
              <li className="hover:text-blue-500">My Project</li>
            </HashLink>
            <HashLink smooth to="/Contents#contact">
              <li className="hover:text-blue-500">Contact</li>{" "}
            </HashLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="nav flex bg-[#18435A] text-white justify-between h-12 items-center pr-6 pl-6 sticky top-0 w-full min-w-[600px] z-10">
      <div className="left-nav text-blue-400 text-l font-bold hover:text-white">
        <h3>Zaky Web Page</h3>
      </div>
      <div className="right-nav flex">
        <ul className="gap-3 text-sm hidden md:flex">
          <HashLink smooth to="/Contents#home">
            <li className="hover:text-blue-500">Home</li>
          </HashLink>
          <HashLink smooth to="/Contents#aboutMe">
            <li className="hover:text-blue-500">About</li>
          </HashLink>
          <HashLink smooth to="/Contents#skillSet">
            <li className="hover:text-blue-500">Skill</li>{" "}
          </HashLink>
          <HashLink smooth to="/Contents#myProject">
            <li className="hover:text-blue-500">My Project</li>
          </HashLink>
          <HashLink smooth to="/Contents#contact">
            <li className="hover:text-blue-500">Contact</li>{" "}
          </HashLink>
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="hover:text-blue-500 text-[1rem] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen ? <NavbarSM /> : null}
    </div>
  );
};

export default Navbar;
