import mainBg from "../../public/images/poster1.png";
import sect2Bg from "../../public/images/poster2.png";
import sect3bg from "../../public/images/poster3.jpg";
import chart1 from "../../public/images/chart1.jpg";
import chart2 from "../../public/images/chart2.jpg";
import chart3 from "../../public/images/chart3.jpg";
import chart4 from "../../public/images/chart4.jpg";
import chart5 from "../../public/images/chart5.jpg";
import vid1 from "../../public/images/vid1.png";
import vid2 from "../../public/images/vid2.png";
import vid3 from "../../public/images/vid3.png";
import vid4 from "../../public/images/vid4.png";

const Main = () => {
  return (
    <>
      <div className="max-w-screen-xl cont_a px-16 mx-auto flex flex-col items-center">
        <div className="main_ border-4 border-darkBlue bg-white text-darkBlue mb-48 flex overflow-hidden">
          <div className="py-10 px-10">
            <h2 className="font-TekoSemiBold text-6xl mb-3">
              Washington ★ Squad
            </h2>

            <div className="flex font-PFBeauSansProSemiBold items-center gap-3 mb-3">
              <h2 className="text-7xl">Клан</h2>
              <p className="text-xl">
                С непривзайденной <br /> историей
              </p>
            </div>

            <div className="border-s-4 border-customRed pl-3">
              <p className="font-PFBeauSansProSemiBold text-2xl mb-7">
                Наши достижения говорят <br /> сами за себя
              </p>
              <ul className="font-TekoBold text-3xl flex gap-11">
                <li>
                  <h3>115</h3>
                  <p>Человек</p>
                </li>
                <li>
                  <h3>150</h3>
                  <p>Лидерок</p>
                </li>
                <li>
                  <h3>52</h3>
                  <p>Миссии</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={mainBg} alt="gta_image" />
          </div>
        </div>

        <div className="main2_ main_elem relative border-4 border-darkBlue bg-white text-darkBlue flex items-center mb-48">
          <img src={sect2Bg} alt="" />
          <div className="sect2_bg w-full flex flex-col gap-9">
            <div className="relative">
              <div className="flex items-center gap-5">
                <p className="font-TekoBold text-7xl">1</p>
                <p className="font-PFBeauSansProSemiBold text-2xl">
                  Честная игра
                </p>
              </div>
              <p className="text-lg font-PFBeauSansProRegular">
                Запрещено использовать читы, макросы и другое. Это основа
                честной игры для Washibgton squad
              </p>
            </div>

            <div className="right-12 relative">
              <div className="flex items-center gap-5">
                <p className="font-TekoBold text-7xl">2</p>
                <p className="font-PFBeauSansProSemiBold text-2xl">
                  Вторая ценность
                </p>
              </div>
              <p className="text-lg font-PFBeauSansProRegular">
                Текст разъясняющие понятие второй ценности для клана. Текст в 3
                строки, 20 шрифт. Текст разъясняющие понятие 2 ценности.
              </p>
            </div>

            <div className="relative right-24">
              <div className="flex items-center gap-5">
                <p className="font-TekoBold text-7xl">3</p>
                <p className="font-PFBeauSansProSemiBold text-2xl">
                  Третья ценность
                </p>
              </div>
              <p className="text-lg font-PFBeauSansProRegular">
                Текст разъясняющие понятие третьей ценности для клана. Текст в 2
                строки, 20 шрифт. Текст разъясняющие понятие третьей ценности
                для клана.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="main main_elem2 relative border-4 border-darkBlue bg-white text-darkBlue flex mb-48">
          <img src={sect3bg} alt="" className="w-11/12" />
          <div className="py-16 px-12">
            <h2 className="font-PFBeauSansProBlack text-5xl mb-16">
              Главный заголовок новости
            </h2>

            <div>
              <h4 className="text-lg font-PFBeauSansProBlack mb-6">
                Подзаголовок новости
              </h4>
              <p className="font-PFBeauSansProRegular text-lg">
                Короткий текст новости, суть, затравка. Короткий текст новости,
                суть, затравка. Короткий текст новости, суть, затравка.
              </p>
            </div>
          </div>
          <div className="w-16 bg-slate-600/40"></div>
        </div>

        <div className="main main_elem3 relative text-darkBlue flex mb-48 text-white">
          <div className="flex charters gap-5">
            <div className="chrt_pe flex flex-col justify-center pl-7">
              <div className="text-base chrt_is">
                <p>В клане с 2013 года</p>
                <p className="mt-5">Обязанности:</p>
              </div>

              <ul className="text-base font-PFBeauSansProLight">
                <li>Обязанность</li>
                <li>Обязанность.</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
              </ul>

              <div className="flex items-end gap-10 mt-4">
                <p className="font-TekoMedium text-2xl">
                  Washington <br /> Yaroslav
                </p>
                <span className="font-PFBeauSansProLight cursor-pointer more_chrt">
                  ...MORE
                </span>
              </div>
            </div>

            <div className="chrt_pe flex flex-col justify-center pl-7">
              <div className="text-base chrt_is">
                <p>В клане с 2013 года</p>
                <p className="mt-5">Обязанности:</p>
              </div>

              <ul className="text-base font-PFBeauSansProLight">
                <li>Обязанность</li>
                <li>Обязанность.</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
              </ul>

              <div className="flex items-end gap-10 mt-4">
                <p className="font-TekoMedium text-2xl">
                  Washington <br /> Yaroslav
                </p>
                <span className="font-PFBeauSansProLight cursor-pointer more_chrt">
                  ...MORE
                </span>
              </div>
            </div>

            <div className="chrt_pe flex flex-col justify-center pl-7">
              <div className="text-base chrt_is">
                <p>В клане с 2013 года</p>
                <p className="mt-5">Обязанности:</p>
              </div>

              <ul className="text-base font-PFBeauSansProLight">
                <li>Обязанность</li>
                <li>Обязанность.</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
              </ul>

              <div className="flex items-end gap-10 mt-4">
                <p className="font-TekoMedium text-2xl">
                  Washington <br /> Yaroslav
                </p>
                <span className="font-PFBeauSansProLight cursor-pointer more_chrt">
                  ...MORE
                </span>
              </div>
            </div>

            <div className="chrt_pe flex flex-col justify-center pl-7">
              <div className="text-base chrt_is">
                <p>В клане с 2013 года</p>
                <p className="mt-5">Обязанности:</p>
              </div>

              <ul className="text-base font-PFBeauSansProLight">
                <li>Обязанность</li>
                <li>Обязанность.</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
              </ul>

              <div className="flex items-end gap-10 mt-4">
                <p className="font-TekoMedium text-2xl">
                  Washington <br /> Yaroslav
                </p>
                <span className="font-PFBeauSansProLight cursor-pointer more_chrt">
                  ...MORE
                </span>
              </div>
            </div>

            <div className="chrt_pe flex flex-col justify-center pl-7">
              <div className="text-base chrt_is">
                <p>В клане с 2013 года</p>
                <p className="mt-5">Обязанности:</p>
              </div>

              <ul className="text-base font-PFBeauSansProLight">
                <li>Обязанность</li>
                <li>Обязанность.</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
                <li>Обязанность</li>
              </ul>

              <div className="flex items-end gap-10 mt-4">
                <p className="font-TekoMedium text-2xl">
                  Washington <br /> Yaroslav
                </p>
                <span className="font-PFBeauSansProLight cursor-pointer more_chrt">
                  ...MORE
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="main main_elem2 main_3 relative bg-white text-darkBlue flex mb-48">
          <div className="w-full px-5 py-5">
            <div className="inf_sub flex justify-between w-full font-PFBeauSansProRegular items-center mb-7">
              <div className="flex flex-col">
                <h3 className="text-2xl">The washington</h3>
                <div className="flex gap-5 text-black/40 subs_inf">
                  <p>@TheWashington</p>
                  <p>958 Подписчиков</p>
                  <p>138 Видео</p>
                </div>
              </div>

              <div className="cursor-pointer bg-black text-white rounded-3xl px-5 py-2 font-PFBeauSansProSemiBold active:scale-95 transition select-none sub_btn">
                Подписаться
              </div>
            </div>
            <div className="flex gap-5 mb-16">
              <div className="cursor-pointer">
                <img src={vid1} alt="" className="mb-3" />
                <p className="font-RobotoBold">
                  ПРОФЕССИЯ ПОЖАРНИКА НА MAJESTIC RP: КАК ЭФФЕКТИВНО РАБОТАТЬ
                  В...
                </p>
              </div>

              <div className="cursor-pointer">
                <img src={vid2} alt="" className="mb-3" />
                <p className="font-RobotoBold">
                  ХЭЛЛОУИНСКИЙ УЖАС НА MAJESTIC RP: ПОЛНЫЙ ОБЗОР ОБНОВЛЕНИЯ ДЛЯ
                  GTA...
                </p>
              </div>

              <div className="cursor-pointer">
                <img src={vid3} alt="" className="mb-3" />
                <p className="font-RobotoBold">
                  Топовая арена на GTA 5 RP Majestic RP - Маджестик РП ГТА 5 РП
                </p>
              </div>

              <div className="cursor-pointer">
                <img src={vid4} alt="" className="mb-3" />
                <p className="font-RobotoBold">
                  Работа фермером или как поднять бабла на GTA 5 RP Majestic RP
                  - Маджестик РП...
                </p>
              </div>
            </div>

            <div className="cursor-pointer font-TekoSemiBold bg-darkBlue max-w-max text-white mx-auto px-20 py-2 text-lg active:scale-95 transition select-none">
              Все видео
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
