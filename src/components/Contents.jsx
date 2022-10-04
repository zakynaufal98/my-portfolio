import profile from "../assets/profile-photo.jpg";
import program from "../assets/program.jpg";
import epicclone from "../assets/epic-clone.png";
import netflixclone from "../assets/netflix-clone.png";
// import { SocialIcon } from "react-social-icons";
import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/Js.png";
import sql from "../assets/png-sql.png";
import reactLogo from "../assets/React-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contents = () => {
  return (
    <div className="page-content text-white w-full min-w-[360px]">
      <div
        className="home flex bg-[#16324F] items-center pr-8 font-small justify-between text-2xl gap-8"
        id="home"
      >
        <img
          src={program}
          alt="programming"
          className="max-w-[40%] md:max-w-[50%] h-[25rem] md:h-[40rem]  rounded-r-[18rem]  object-cover "
        />
        <div>Someone Interested in Frontend Developer</div>
      </div>
      <div
        className="about flex flex-col bg-[#13293D] items-center justify-center pt-2 pl-6 pr-6 "
        id="aboutMe"
      >
        <div className="text-xl font-medium mb-2">About Me</div>
        <img
          src={profile}
          alt="profile"
          className="w-[150px] h-[150px] rounded-full mb-4 object-cover"
        />
        <h1 className="text-xl">Zaky Naufal</h1>
        <h1 className="text-l">Frontend Developer</h1>
        <div className="flex w-[360px] mt-3 mb-3 items-center text-justify text-xs">
          A self-taught person who likes to learn about web programming through
          online or offline training. Love to learn new things arround
          programming and other
        </div>
      </div>
      <div
        className="skillset  bg-[#16324F] flex items-center flex-col p-4"
        id="skillSet"
      >
        <span>Skillset</span>
        <ul className="flex justify-center gap-2 mt-2 items-center">
          <li>
            <img src={htmlLogo} alt="html" className="h-18 w-16" />
          </li>
          <li>
            <img src={cssLogo} alt="css" className="h-18 w-16" />
          </li>
          <li>
            <img src={jsLogo} alt="js" className="h-18 w-16" />
          </li>
          <li>
            <img src={sql} alt="sql" className=" h-18 w-16 " />
          </li>
          <li>
            <img src={reactLogo} alt="react" className="h-18 w-16" />
          </li>
        </ul>
      </div>
      <div
        className="bg-[#13293D] flex flex-col items-center p-4"
        id="myProject"
      >
        <span>My Project</span>

        <div className="myproject flex justify-center p-6 gap-5 ">
          <a href="https://152235865100788-dts-final-project.netlify.app/">
            <img
              src={epicclone}
              alt="epic-clone"
              className="w-[25rem] hover:brightness-75"
            />
          </a>
          <a href="https://pair-03a-dts-mini-project.netlify.app/" className="">
            <img
              src={netflixclone}
              alt="netflix-clone"
              className="w-[25rem] hover:brightness-75 "
            />
          </a>
        </div>
      </div>

      <div
        className="contact bg-[#16324F] flex flex-col items-center p-4"
        id="contact"
      >
        <span>Social Media</span>

        <p className="mt-2">Find me in :</p>
        <ul className="flex gap-2 mt-4">
          <li>
            <a
              href="https://instagram.com/zaky_naufal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-blue-500 text-[2rem]"
              />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/zakynaufal1998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-blue-500 text-[2rem]"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/zaky_naufal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:text-blue-500 text-[2rem]"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/zaky_naufal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-blue-500 text-[2rem]"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zakynaufal98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-blue-500 text-[2rem]"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contents;
