const Navbar = () => {
  return (
    <div className="nav flex bg-gradient-to-r from-[#18435A] t text-white justify-between h-12 items-center pr-6 pl-6 fixed w-full">
      <div className="left-nav text-blue-400 text-l font-bold">
        <h3>Zaky Web Page</h3>
      </div>
      <div className="right-nav flex">
        <ul className="gap-3 text-sm hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skill</li>
          <li>My Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
