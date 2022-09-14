const Navbar = () => {
  return (
    <div className="nav flex bg-[#18435A] text-white justify-between h-12 items-center pr-6 pl-6 sticky top-0 w-full min-w-[600px] z-10">
      <div className="left-nav text-blue-400 text-l font-bold hover:text-white">
        <h3>Zaky Web Page</h3>
      </div>
      <div className="right-nav flex">
        <ul className="gap-3 text-sm hidden md:flex">
          <li className="hover:text-blue-500">Home</li>
          <li className="hover:text-blue-500">About</li>
          <li className="hover:text-blue-500">Skill</li>
          <li className="hover:text-blue-500">My Project</li>
          <li className="hover:text-blue-500">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
