import { useState } from "react";
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
import spin from "./assets/images/spin.svg";

// Logos
import logo from "./assets/images/logo.svg";
import maplogo from "./assets/images/maplogo.svg";
import footerlogo from "./assets/images/footerlogo.svg";

// import BrandCarousel from "./BrandCarousel";

// homiy
import artisans from "./assets/images/artisans.svg";
import boling from "./assets/images/boling.svg";
import portkeys from "./assets/images/portkeys.svg";
import synco from "./assets/images/synco.svg";

// arrows
import right from "./assets/images/right.svg";
import left from "./assets/images/left.svg";

// maps
import googlemap from "./assets/images/googlemap.svg";
import yandexmap from "./assets/images/yandexmap.svg";

// raitings
import starts from "./assets/images/starts.svg";

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
        <div className="max-w-[1200px] w-[100%] mx-auto px-[20px]">
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
                    className="font-inter font-normal text-[18px] leading-[175%] tracking-[-0.05em] text-[#2E3235] hover:text-[#F03957]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Phone (desktop) */}
            <a
              href="tel:+74992262928"
              className="hidden md:inline-block font-inter font-bold text-[20px] leading-[175%] tracking-[-0.05em] text-[#2E3235] hover:opacity-[0.3]"
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
          <div className="max-w-[1200px] w-[100%] mx-auto px-[20px]">
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
                  <button className="cursor-pointer font-inter font-semibold text-[18px] leading-[175%] text-white bg-[#F03957] border-[2px] border-[#F03957] py-[15px] px-[20px] rounded-[10px] hover:text-[#F03957] hover:bg-[white]">
                    Получить консультацию
                  </button>
                  <button className="cursor-pointer font-inter font-semibold text-[18px] leading-[175%] py-[15px] px-[30px] border-[2px] rounded-[10px] hover:bg-black hover:text-white">
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
          <div className="max-w-[1200px] w-[100%] mx-auto px-[20px]">
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
        <section className="py-[120px] bg-[#F5F5F5]">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <div className="pt-[35px] pb-[80px] px-[30px] bg-[#C4C4C4] rounded-[20px]">
                <img src={reaksiya} alt="" className="mb-[30px]" />
                <h3 className="max-w-[240px] font-inter font-semibold text-[30px] leading-[150%] mb-[25px]">
                  Удаленная диагностика
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[175%]">
                  Проведем предварительную диагностику по видео с неисправностью
                  от клиента и сориентируем по стоимости ремонта
                </p>
              </div>

              <div className="pt-[35px] pb-[80px] pr-[34px] pl-[30px] bg-[#525252] rounded-[20px]">
                <img src={lists} alt="" className="mb-[30px]" />
                <h3 className="max-w-[270px] font-inter font-semibold text-[30px] leading-[150%] mb-[25px] text-[#fff]">
                  Покажем причины неисправности
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[175%] text-[#fff]">
                  Сделаем бесплатную диагностику и предоставим видео запись.
                  Инжинер даст комментарии о причинах неисправности, чтобы у вас
                  не осталось сомнений
                </p>
              </div>

              <div className="pt-[35px] pb-[80px] pr-[34px] pl-[30px] bg-[#D4636B] rounded-[20px]">
                <img src={money} alt="" className="mb-[30px]" />
                <h3 className="max-w-[200px] font-inter font-semibold text-[30px] leading-[150%] mb-[25px] text-[#fff]">
                  Прозрачная цена
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[175%] text-[#fff]">
                  Заранее согласуем цену, честную и конкурентную, которая
                  соответствует цене в прайс-листе на нашем сайте
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section mini carusel */}
        <section className="py-[120px]">
          <div className="max-w-[1200px] w-full mx-auto px-[20px]">
            <div className="">
              <div className="">
                <h2 className="font-montserrat font-bold text-[45px] leading-[175%] uppercase text-[#000] mb-[80px]">
                  Мы работаем с этими брендами <br />
                  <span className="text-[#F03957]">и не только</span>
                </h2>
              </div>

              <div className="flex items-center justify-between gap-[30px] mb-[40px]">
                <a href="#" className="">
                  <img src={right} alt="" className="" />
                </a>

                <a href="#" className="">
                  <img src={artisans} alt="" className="" />
                </a>

                <a href="#" className="">
                  <img src={boling} alt="" className="" />
                </a>

                <a href="#" className="">
                  <img src={portkeys} alt="" className="" />
                </a>

                <a href="#" className="">
                  <img src={synco} alt="" className="" />
                </a>

                <a href="#" className="">
                  <img src={left} alt="" className="" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-2">
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-full cursor-pointer hover:bg-[#686868]"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section raitings */}
        <section className="pb-[80px]">
          <div className="max-w-[1200px] w-full mx-auto px-[20px]">
            <div className="">
              <h2 className="font-montserrat font-bold text-[45px] leading-[175%] uppercase text-[#000] mb-[80px]">
                Отзывы наших <br />
                <span className="text-[#F03957]">клиентов</span>
              </h2>

              <div className="grid grid-cols-3 gap-[30px]">
                <div className="p-[30px] rounded-[15px] bg-[#F7F5F5]">
                  <div className="flex items-center justify-between mb-[15px]">
                    <h3 className="font-inter font-bold text-[18px] leading-[175%]">
                      Анастасия
                    </h3>
                    <a
                      href="#"
                      className="flex items-center font-inter font-normal text-[16px] leading-[175%] text-[#6F7375] underline gap-[10px]"
                    >
                      Дата: 2022-02-23
                      <img src={googlemap} alt="" className="" />
                    </a>
                  </div>
                  <p className="mb-[15px]">
                    Спасибо большое сервисному центру. Удобный график работы.
                    Можно записаться через социальные сети. Дают гарантию,что
                    самое главное ...
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href=""
                      className="font-inter font-normal text-[16px] leading-[175%] text-[#6F7375] underline"
                    >
                      Читать полностью
                    </a>
                    <img src={starts} alt="" className="" />
                  </div>
                </div>

                <div className="p-[30px] rounded-[15px] bg-[#F7F5F5]">
                  <div className="flex items-center justify-between mb-[15px]">
                    <h3 className="font-inter font-bold text-[18px] leading-[175%]">
                      Ирек
                    </h3>
                    <a
                      href="#"
                      className="flex items-center font-inter font-normal text-[16px] leading-[175%] text-[#6F7375] underline gap-[10px]"
                    >
                      Дата: 2022-07-21
                      <img src={yandexmap} alt="" className="" />
                    </a>
                  </div>
                  <p className="mb-[15px]">
                    Спасибо большое сервисному центру. Удобный график работы.
                    Можно записаться через социальные сети. Дают гарантию,что
                    самое главное ...
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href=""
                      className="font-inter font-normal text-[16px] leading-[175%] text-[#6F7375] underline"
                    >
                      Читать полностью
                    </a>
                    <img src={starts} alt="" className="" />
                  </div>
                </div>

                <div className="p-[30px] rounded-[15px] bg-[#F7F5F5]">
                  <div className="flex items-center justify-between mb-[15px]">
                    <h3 className="font-inter font-bold text-[18px] leading-[175%]">
                      Евгения
                    </h3>
                    <a
                      href="#"
                      className="flex items-center font-inter font-normal text-[16px] leading-[175%] text-[#6F7375] underline gap-[10px]"
                    >
                      Дата: 2022-05-22
                      <img src={googlemap} alt="" className="" />
                    </a>
                  </div>
                  <p className="mb-[15px]">
                    Спасибо большое сервисному центру. Удобный график работы.
                    Можно записаться через социальные сети. Дают гарантию,что
                    самое главное ...
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href=""
                      className="font-inter font-normal text-[16px] leading-[175%] text-[#6F7375] underline"
                    >
                      Читать полностью
                    </a>
                    <img src={starts} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section contact */}
        <section className="bg-[#525252] py-[120px]">
          <div className="max-w-[1200px] w-full mx-auto px-[15px]">
            <div className="flex items-baseline justify-between mb-[60px]">
              <h2 className="font-montserrat font-bold text-[45px] leading-[175%] uppercase text-[#F7F5F5]">
                У вас остались <br />
                <span className="text-[#F03957]">вопросы?</span>
              </h2>

              <p className="max-w-[560px] w-[100%] pr-[240px] font-inter font-semibold text-[18px] leading-[175%] text-[#F7F5F5]">
                Оставьте заявку, мы свяжемся с вами и ответим на них
              </p>
            </div>

            {/* Inputlar */}
            <div className="py-[80px] px-[100px] bg-[#F7F5F5] rounded-[20px]">
              <div className="flex gap-[30px] mb-[40px]">
                <div className="flex flex-col gap-[20px] w-[50%]">
                  <input
                    type="text"
                    className="py-[15px] pl-[25px] border-[2px] border-[#D9D9D9] rounded-[10px] font-inter font-normal text-[16px] leading-[175%] outline-[#F03957]"
                    placeholder="Ваше имя"
                  />
                  <input
                    type="email"
                    className="py-[15px] pl-[25px] border-[2px] border-[#D9D9D9] rounded-[10px] font-inter font-normal text-[16px] leading-[175%] outline-[#F03957]"
                    placeholder="E-mail"
                  />
                  <input
                    type="number"
                    className="py-[15px] pl-[25px] border-[2px] border-[#D9D9D9] rounded-[10px] font-inter font-normal text-[16px] leading-[175%] outline-[#F03957]"
                    placeholder="Телефон*"
                  />
                </div>

                <div className="relative w-[50%]">
                  {/* Textarea */}
                  <textarea
                    placeholder="Опишите проблему и добавьте видео неисправности"
                    className="resize-none w-full h-full border-[2px] border-[#D9D9D9] rounded-[10px] px-[24px] py-[10px] outline-[#F03957]"
                  />

                  {/* File button */}
                  <label className="absolute w-[33.1px] flex bottom-[25px] right-[25px]">
                    <img src={spin} alt="" className="" />
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="flex items-center flex-col">
                <button className="py-[15px] px-[45px] font-inter font-semibold text-[18px] leading-[175%] text-[#fff] bg-[#F03957] rounded-[10px] mb-[15px]">
                  Оставить заявку
                </button>
                <p className="max-w-[230px] w-full font-inter font-semibold text-[10px] leading-[175%] pr-[10px]">
                  Нажимая на данную кнопку вы соглашаетесь с политикой
                  конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Mapping */}
        <section className="relative w-full pt-[120px] pb-[230px]">
          <iframe
            src="https://yandex.com/map-widget/v1/-/YOUR_MAP_ID"
            className="absolute inset-0 w-full h-full z-0"
            allowFullScreen
            loading="lazy"
          />

          <div className="relative z-10 max-w-[1200px] h-full mx-auto px-[20px] flex items-center">
            <div className="bg-[#525252] py-[50px] pr-[22px] pl-[54px] rounded-[15px]">
              <a href="/" className="block mb-[30px]">
                <img src={maplogo} alt="Logo" className="" />
              </a>

              <p className="font-inter font-normal text-[16px] leading-[175%] text-[#EFEFEF] pr-[50px] mb-[25px]">
                Москва, ул Шарикоподшипниковская д.4 к.4а
              </p>

              <a
                href="mailto:info@krepair.ru"
                className="block font-inter font-normal text-[16px] leading-[175%] text-[#EFEFEF] mb-[25px]"
              >
                info@krepair.ru
              </a>

              <a
                href="tel:+74992262928"
                className="block font-inter font-bold text-[20px] leading-[175%] text-[#DEDCDC]"
              >
                +7 499 226 29 28
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-[110px] pb-[90px] bg-[#000]">
        <section className="">
          <div className="max-w-[1200px] w-full mx-auto px-[15px]">
            <div className="flex justify-between">
              <div className="">
                <a href="/" className="">
                  <img src={footerlogo} alt="" className="" />
                </a>
              </div>

              <div className="">
                <ul className="flex flex-col gap-[20px]">
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Прайс-лист
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      О компании
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>

              <div className="">
                <ul className="flex flex-col gap-[20px]">
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Услуги
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Ремонт аудио техники
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Ремонт видео техники
                    </a>
                  </li>
                </ul>
              </div>

              <div className="">
                <ul className="flex flex-col gap-[20px]">
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Ремонт телефонов
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Ремонт электротранспорта
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="hover:underline font-inter font-normal text-[16px] leading-[175%] tracking-[-0.05em] text-[#D9D9D9]"
                    >
                      Политика конфиденциальности
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
