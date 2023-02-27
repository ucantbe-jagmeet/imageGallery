import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Header = () => {
  const [darkTheme, setdarkTheme] = useState(false);
  const handleBtn = () => {
    setdarkTheme(!darkTheme);
  };
  return (
    <header
      className={
        !darkTheme
          ? "shadow-md p-5 sticky top-0 bg-white z-50 flex justify-around items-center "
          : "shadow-md p-5 sticky top-0 bg-white z-50 flex justify-around items-center dark:bg-black dark:text-white"
      }
    >
      <h1
        className={
          !darkTheme
            ? "font-[400] text-[30px] font-[pattaya] h-10 text-[#333333]"
            : "font-[400] text-[30px] font-[pattaya] h-10 text-[#333333] dark:text-white"
        }
      >
        Image Gallery
      </h1>
      <div className="flex  items-center ">
        <button
          // onClick={() => {
          //   if (searchQuery) {
          //     searchPhotos(searchQuery);
          //   }
          // }}

          className=" btn bg-transparent py-2  rounded-md  text-xl text-[#C4C4C4] translate-x-7"
          type="button"
          id="button-addon2"
        >
          <FaSearch />
        </button>
        <input
          // value={searchQuery}
          // onChange={(e) => {
          //   setSearchQuery(e.target.value.trim());
          // }}
          // onKeyUp={(e) => {
          //   if (e.key === "Enter" && searchQuery) {
          //     searchPhotos(searchQuery);
          //   }
          // }}
          type="search"
          className="block w-[419px] h-11  py-1.5  bg-transparent border-2 rounded-md focus:outline-none"
          placeholder="        Search images here"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>
      <ul className="flex font-[montserrat] font-bold w-[259px] gap-10 -ml-20 text-[12px]">
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
      </ul>
      <div className="flex font-[montserrat] font-bold text-[12px] items-center">
        <h3>Dark mode</h3>
        <div onClick={handleBtn} className="ml-2">
          {!darkTheme ? <BsToggleOff size={20} /> : <BsToggleOn size={20} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
