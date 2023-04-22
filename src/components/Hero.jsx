import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Получи самый <span className="orange_gradient">"сок"</span>  из статьи <br className='max-md:hidden' /> с помощью
        <span className='orange_gradient '> чат  </span>GPT-4
      </h1>
      <h2 className='desc'>
      Упростите чтение с помощью    <span className='orange_gradient font-bold  underline underline-offset-0'> Summize  </span>, программы для обобщения статей с открытым исходным
кодом, которая преобразует длинные статьи в четкие и лаконичные <span className="text-blue-500 font-semibold">выжимки</span>.
      </h2>
    </header>
  );
};

export default Hero;
