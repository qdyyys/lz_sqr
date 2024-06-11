import logo from "../../public/images/Logotype.png";
import discordIco from "../../public/images/svg/discrod.svg";
import vkIco from "../../public/images/svg/vk.svg";
import ytIco from "../../public/images/svg/vk.svg";
import loginIco from "../../public/images/svg/login.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import discordFt from "../../public/images/svg/Discord Newft.svg";
import ytFt from "../../public/images/svg/YouTubeft.svg";
import vkFt from "../../public/images/svg/Vectorft.svg";

const Header = () => {
  const [burgerPos, setBurgerPos] = useState(false);

  function handleBurger() {
    if (burgerPos === false) {
      setBurgerPos(true);
      console.log(burgerPos);
    } else {
      setBurgerPos(false);
      console.log(burgerPos);
    }
  }
  function handleCloseBurger() {
    setBurgerPos(false);
  }

  return (
    <>
      <div className="w-full h-16 bg-darkBlue mb-16 mt-6 text-white flex items-center justify-around header relative header z-10">
        <div className="flex items-center gap-10">
          <img src={logo} alt="Washington Squad" className="logo" />
          <RxHamburgerMenu
            className={`text-4xl hidden burger transition ${
              burgerPos === true ? "text-red-400" : ""
            }`}
            onClick={handleBurger}
          />
        </div>

        <nav>
          <ul className="flex text-nowrap gap-11 font-PFBeauSansProRegular text-sm items-center">
            <li className="cursor-pointer hover:text-customRed transition">
              Новости
            </li>
            <a href="">Delete</a>
            <li className="cursor-pointer hover:text-customRed transition">
              Достижения клана
            </li>
            <li className="cursor-pointer hover:text-customRed transition">
              История клана
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-customRed transition">
              Войти <img src={loginIco} alt="" />
            </li>
          </ul>
        </nav>

        <div>
          <ul className="flex items-center gap-4">
            <li className="cursor-pointer transition duration-100 active:scale-95">
              <img src={window.innerWidth < 1230 ? ytFt : ytIco} alt="" />
            </li>
            <li className="cursor-pointer transition duration-100 active:scale-95">
              <img
                src={window.innerWidth < 1230 ? discordFt : discordIco}
                alt=""
              />
            </li>
            <li className="cursor-pointer transition duration-100 active:scale-95">
              <img src={window.innerWidth < 1230 ? vkFt : vkIco} alt="" />
            </li>
          </ul>
        </div>

        <div className="btn_abs py-2 px-11 bg-customRed right-7 font-PFBeauSansProSemiBold">
          Вступить в клан
        </div>
      </div>
      <div
        className={`burger_menu absolute bg-darkBlue w-full h-96 top-6 burger-menu ${
          burgerPos === true ? "showBurger" : ""
        }`}
      >
        <IoClose
          className="burger_close text-3xl text-white right-4 top-20 absolute cursor-pointer"
          onClick={handleCloseBurger}
        />
        <ul className="text-white font-PFBeauSansProRegular text-2xl pt-32 pl-9 flex flex-col gap-8">
          <li className="cursor-pointer hover:text-customRed transition">
            Новости
          </li>
          <li className="cursor-pointer hover:text-customRed transition">
            Достижения клана
          </li>
          <li className="cursor-pointer hover:text-customRed transition">
            История клана
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-customRed transition">
            Войти <img src={loginIco} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
