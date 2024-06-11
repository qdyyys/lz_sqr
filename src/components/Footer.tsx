import logo from "../../public/images/Logotype.png";
import discordFt from "../../public/images/svg/Discord Newft.svg";
import ytFt from "../../public/images/svg/YouTubeft.svg";
import vkFt from "../../public/images/svg/Vectorft.svg";

const Footer = () => {
  return (
    <div className=" bg-darkBlue w-full flex items-center justify-center">
      <div className="flex items-center justify-center flex-col relative bottom-6">
        <img src={logo} alt="" />
        <ul className="flex gap-5">
          <li className="cursor-pointer active:scale-95 transition">
            <img src={ytFt} alt="" />
          </li>
          <li className="cursor-pointer active:scale-95 transition">
            <img src={discordFt} alt="" />
          </li>
          <li className="cursor-pointer active:scale-95 transition">
            <img src={vkFt} alt="" />
          </li>
        </ul>
        <div className="text-white font-PFBeauSansProRegular">
          <p>
            Глава клана: <span className="underline">nickName</span> | Сайт
            разработан: @Qdyys
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
