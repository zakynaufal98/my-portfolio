import profile from "../assets/4x6.jpg";
import program from "../assets/program.jpg";
import epicclone from "../assets/epic-clone.png";
import netflixclone from "../assets/netflix-clone.png";
import { SocialIcon } from "react-social-icons";
import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/Js.png";
import sql from "../assets/png-sql.png";
import reactLogo from "../assets/React-icon.png";

const Contents = () => {
  return (
    <div className="page-content text-white ">
      <div className="home flex bg-[#16324F] items-center pr-8 font-small justify-between text-2xl gap-8">
        <img
          src={program}
          alt=""
          className="w-[60%] h-[35rem] rounded-r-[10rem] object-cover "
        />
        <div>Someone Interested in Frontend Developer</div>
      </div>
      <div className="about flex flex-col bg-[#13293D] items-center justify-center pt-2 pl-6 pr-6 ">
        <div className="text-xl font-medium mb-2">About Me</div>
        <img
          src={profile}
          alt="profile-image"
          className="w-[150px] h-[150px] rounded-full mb-4 object-cover"
        />
        <h1>Zaky Naufal</h1>
        <h1>Frontend Developer</h1>
        <div className="flex w-[360px] mt-3 mb-3 items-center">
          A self-taught person who likes to learn about web programming through
          online or offline training. Love to learn new things arround
          programming and other
        </div>
      </div>
      <div className="skillset  bg-[#16324F] flex items-center flex-col p-4">
        <span>Skillset</span>
        <ul className="flex justify-center gap-5 mt-2">
          <li>
            <img src={htmlLogo} alt="html" className="w-20" />
          </li>
          <li>
            <img src={cssLogo} alt="css" className="w-20" />
          </li>
          <li>
            <img src={jsLogo} alt="js" className="w-20" />
          </li>
          <li>
            <img src={sql} alt="sql" className="max-w-20 " />
          </li>
          <li>
            <img src={reactLogo} alt="react" className="w-20" />
          </li>
        </ul>
      </div>
      <div className="myproject flex justify-center bg-[#13293D] p-6 gap-5 ">
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
      <div className="contact bg-[#16324F] flex flex-col items-center p-4">
        <span>Social Media</span>
        <p className="mt-2">Find me in :</p>
        <ul className="flex gap-2 mt-4">
          <li>
            <SocialIcon
              url="https://instagram.com/zaky_naufal"
              bgColor="white"
              style={{ height: 40, width: 40 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://facebook.com/zakynaufal1998"
              bgColor="white"
              style={{ height: 40, width: 40 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://twitter.com/zaky_naufal"
              bgColor="white"
              style={{ height: 40, width: 40 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://linkedin.com/zaky_naufal"
              bgColor="white"
              style={{ height: 40, width: 40 }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contents;
