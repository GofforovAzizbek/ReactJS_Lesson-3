import { useState } from "react";
import logo from "./assets/images/logo.svg";
import menubtn from "./assets/images/menubtn.svg";
import closebtn from "./assets/images/closebtn.svg";
import hero from "./assets/images/hero.png";
import speaker from "./assets/images/speaker.png";
import camera from "./assets/images/camera.png";
import phone from "./assets/images/phone.png";
import hoverboard from "./assets/images/hoverboard.png";
import telebizor from "./assets/images/telebizor.png";
import reaksiya from "./assets/images/reaksiya.svg";
import lists from "./assets/images/lists.svg";
import money from "./assets/images/money.svg";

const navLinks = [
  { id: 1, text: "Услуги", href: "#" },
  { id: 2, text: "Прайс-лист", href: "#" },
  { id: 3, text: "О компании", href: "#" },
  { id: 4, text: "Контакты", href: "#" },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="pt-[25px]">
        <div className="max-w-[1200px] w-[100%] mx-auto px-[15px]">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex gap-[8px] md:gap-[38px] lg:gap-[76px]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="font-inter font-normal text-[18px] leading-[175%] tracking-[-0.05em] text-[#2E3235]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Phone (desktop) */}
            <a
              href="tel:+74992262928"
              className="hidden md:inline-block font-inter font-bold text-[20px] leading-[175%] tracking-[-0.05em] text-[#2E3235]"
            >
              +7 499 226 29 28
            </a>

            {/* Hamburger button (mobile) */}
            <button
              className="md:hidden text-[#2E3235] text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <img src={closebtn} alt="menu" />
              ) : (
                <img src={menubtn} alt="menu" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="flex flex-col mt-4 md:hidden gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="font-inter font-normal text-[18px] leading-[175%] tracking-[-0.05em] text-[#2E3235]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:+74992262928"
                  className="font-inter font-bold text-[20px] leading-[175%] tracking-[-0.05em] text-[#2E3235]"
                >
                  +7 499 226 29 28
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="">
        {/* Section Hero */}
        <section className="pt-[76px] pb-[160px]">
          <div className="max-w-[1200px] w-[100%] mx-auto px-[15px]">
            <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center">
              {/* Matn qismi */}
              <div className="mb-10 lg:mb-0">
                <h1 className="font-montserrat font-bold text-[50px] leading-[175%] tracking-[-0.05em] uppercase mb-4">
                  Сервисный центр
                </h1>
                <p className="font-montserrat font-medium text-[30px] leading-[175%] tracking-[-0.05em] text-[#817979] mb-6">
                  по ремонту техники в Москве
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <button className="cursor-pointer font-inter font-semibold text-[18px] leading-[175%] text-white bg-[#F03957] border-[2px] border-[#F03957] py-[15px] px-[20px] rounded-[10px]">
                    Получить консультацию
                  </button>
                  <button className="cursor-pointer font-inter font-semibold text-[18px] leading-[175%] py-[15px] px-[30px] border-[2px] rounded-[10px]">
                    Смотреть прайс-лист
                  </button>
                </div>
              </div>

              {/* Rasm qismi */}
              <div className="w-full lg:w-auto">
                <img src={hero} alt="Hero" className="w-full lg:w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Section Products */}
        <section className="pt-[80px] pb-[120px] bg-[#525252]">
          <div className="max-w-[1200px] w-[100%] mx-auto px-[15px]">
            <div className="">
              <div className="flex items-center justify-between mb-[80px]">
                <h2 className="font-montserrat font-bold text-[45px] leading-[175%] uppercase text-[#F7F5F5]">
                  Наши услуги <br />
                  <span className="text-[#F03957]">для вас</span>
                </h2>
                <p className="max-w-[470px] w-[100%] font-inter font-semibold text-[18px] leading-[175%] text-[#F7F5F5]">
                  Наша компания оказывает полный спектр услуг, имеет надежную
                  репутация, и успела завоевать доверие и расположение своих
                  клиентов
                </p>
              </div>

              <div className="flex items-center justify-between bg-[#fff] rounded-[20px] pt-[50px] pb-[30px] pr-[140px] pl-[66px] mb-[60px]">
                <div className="">
                  <h3 className="font-inter font-semibold text-[30px] leading-[175%] mb-[25px]">
                    Ремонт <span className="text-[#F03957]">аудио техники</span>
                  </h3>
                  <p className="max-w-[530px] w-[100%] font-inter font-normal text-[18px] leading-[175%] mb-[30px]">
                    Мы выполняем качественный ремонт аудиотехники, включая
                    колонки, усилители и прочее оборудование, выдаем гарантию и
                    имеем необходимые запчасти в наличие
                  </p>
                  <button className="py-[15px] px-[30px] border-[2px] rounded-[10px] font-inter font-normal text-[18px] leading-[175%]">
                    Подробнее
                  </button>
                </div>
                <div className="">
                  <img src={speaker} alt="" className="" />
                </div>
              </div>

              <div className="flex flex-row-reverse items-center justify-between bg-[#fff] rounded-[20px] pt-[15px] pb-[35px] pr-[45px] pl-[85px] mb-[60px]">
                <div className="">
                  <h3 className="font-inter font-semibold text-[30px] leading-[175%] mb-[25px]">
                    Ремонт{" "}
                    <span className="text-[#F03957]">фото/видео техники</span>
                  </h3>
                  <p className="max-w-[530px] w-[100%] font-inter font-normal text-[18px] leading-[175%] mb-[30px]">
                    Осуществляем ремонт современной цифровой фото и видео
                    аппаратура, проводимый первоклассными инженерами
                  </p>
                  <button className="py-[15px] px-[30px] border-[2px] rounded-[10px] font-inter font-normal text-[18px] leading-[175%]">
                    Подробнее
                  </button>
                </div>
                <div className="">
                  <img src={camera} alt="" className="" />
                </div>
              </div>

              <div className="flex items-stretch justify-between bg-[#fff] rounded-[20px] pt-[35px] pb-[0px] pr-[165px] pl-[65px] mb-[60px]">
                <div className="pt-[25px]">
                  <h3 className="font-inter font-semibold text-[30px] leading-[175%] mb-[25px]">
                    Ремонт <span className="text-[#F03957]">телефонов</span>
                  </h3>
                  <p className="max-w-[530px] w-[100%] font-inter font-normal text-[18px] leading-[175%] mb-[30px]">
                    Мы предоставляем полный спектр услуг по обслуживанию и
                    ремонту мобильных устройств марки Apple
                  </p>
                  <button className="py-[15px] px-[30px] border-[2px] rounded-[10px] font-inter font-normal text-[18px] leading-[175%]">
                    Подробнее
                  </button>
                </div>
                <div className="">
                  <img src={phone} alt="" className="" />
                </div>
              </div>

              <div className="flex flex-row-reverse items-center justify-between bg-[#fff] rounded-[20px] pt-[54px] pb-[30px] pr-[50px] pl-[74px] mb-[60px]">
                <div className="">
                  <h3 className="font-inter font-semibold text-[30px] leading-[175%] mb-[25px]">
                    Ремонт{" "}
                    <span className="text-[#F03957]">электротранспорта</span>
                  </h3>
                  <p className="max-w-[530px] w-[100%] font-inter font-normal text-[18px] leading-[175%] mb-[30px]">
                    Осуществляем ремонт электровелосипедов, сегвеев, моноколес,
                    электросамокатов, гироскутеров и пр.
                  </p>
                  <button className="py-[15px] px-[30px] border-[2px] rounded-[10px] font-inter font-normal text-[18px] leading-[175%]">
                    Подробнее
                  </button>
                </div>
                <div className="">
                  <img src={hoverboard} alt="" className="" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#fff] rounded-[20px] py-[35px] pr-[155px] pl-[65px] mb-[60px]">
                <div className="">
                  <h3 className="font-inter font-semibold text-[30px] leading-[175%] mb-[25px]">
                    Ремонт <span className="text-[#F03957]">телевизоров</span>
                  </h3>
                  <p className="max-w-[530px] w-[100%] font-inter font-normal text-[18px] leading-[175%] mb-[30px]">
                    Сервисный центр Krepair выполнит профессиональный ремонт
                    телевизоров любых марок и моделей
                  </p>
                  <button className="py-[15px] px-[30px] border-[2px] rounded-[10px] font-inter font-normal text-[18px] leading-[175%]">
                    Подробнее
                  </button>
                </div>
                <div className="">
                  <img src={telebizor} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Products messages */}
        <section className="py-[120px]">
          <div className="max-w-[1200px] w-[100%] mx-auto px-[15px]">
            <div className="flex items-center justify-between mb-[80px]">
              <h2 className="font-montserrat font-bold text-[45px] leading-[175%] uppercase text-[#000]">
                Наши <br />
                <span className="text-[#F03957]">Преимущества</span>
              </h2>

              <p className="max-w-[540px] w-[100%] font-inter font-semibold text-[18px] leading-[175%] text-[#000]">
                Сервисный центр KRepair является клиентоориентированным, на
                первом месте у нас гарантированное качественное и надежное
                решение задач клиента
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[30px]">
              <div className="">
                <img src={reaksiya} alt="" className="mb-[30px]" />
                <h3 className="max-w-[240px] font-inter font-semibold text-[30px] leading-[150%] mb-[25px]">
                  Удаленная диагностика
                </h3>
                <p className="">
                  Проведем предварительную диагностику по видео с неисправностью
                  от клиента и сориентируем по стоимости ремонта
                </p>
              </div>

              <div className="">
                <img src={lists} alt="" className="mb-[30px]" />
                <h3 className="max-w-[270px] font-inter font-semibold text-[30px] leading-[150%] mb-[25px]">
                  Покажем причины неисправности
                </h3>
                <p className="">
                  Сделаем бесплатную диагностику и предоставим видео запись.
                  Инжинер даст комментарии о причинах неисправности, чтобы у вас
                  не осталось сомнений
                </p>
              </div>

              <div className="">
                <img src={money} alt="" className="mb-[30px]" />
                <h3 className="max-w-[200px] font-inter font-semibold text-[30px] leading-[150%] mb-[25px]">
                  Прозрачная цена
                </h3>
                <p className="">
                  Заранее согласуем цену, честную и конкурентную, которая
                  соответствует цене в прайс-листе на нашем сайте
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
