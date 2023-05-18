import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="header">
          <a href="index.html"><img src="img/logo/logo.png" className="logo" /></a>
          <h1>Электронная библиотека <br /> Экономического колледжа Нархоз</h1>
        </div>
        <a href="vt.jsx"><div className="box1">
            <img src="img/imeg/1.png" className="q" />
          </div>
          <div className="box1a">
            <div className="text1">ВТиПО</div>
          </div>
        </a>
        <a href="fin.jsx"><div className="box2">
            <img src="img/imeg/2.png" className="w" />
          </div>
          <div className="box2a">
            <div className="text2">Қаржы/финансы</div>
          </div>
        </a>
        <a href="kuk.html"><div className="box3">
            <img src="img/imeg/3.png" className="e" />
          </div>
          <div className="box3a">
            <div className="text3">Құқық/право</div>
          </div>
        </a>
        <a href="men.html"><div className="box4">
            <img src="img/imeg/4.png" className="r" />
          </div>
          <div className="box4a">
            <div className="text4">Менеджмент/маркетинг</div>
          </div>
        </a>
        <a href="au.html"><div className="box5">
            <img src="img/imeg/5.png" className="t" />
          </div>
          <div className="box5a">
            <div className="text5">Учёт и аудит</div>
          </div>
        </a>
        <a href="gum.html"><div className="box6">
            <img src="img/imeg/6.png" className="y" />
          </div>
          <div className="box6a">
            <div className="text6">Гуманитарлық пәндер</div>
          </div>
        </a>
        <a href="buh.html"><div className="box7">
            <img src="img/imeg/7.png" className="u" />
          </div>
          <div className="box7a">
            <div className="text7">Бухгалтерлік есеп</div>
          </div>
        </a>
        <a href="soc.html"><div className="box8">
            <img src="img/imeg/8.png" className="i" />
          </div>
          <div className="box8a">
            <div className="text8">Социалды-экономикалық пәндер</div>
          </div>
        </a>
        <div className="aiCheck">
          <input type="text" id="inputField" className="helloAI" />
          <button id="submitButton" className="buttonAI">ButtonAI</button>
        </div>
        <footer>
          <img src="img/logo/1.png" className="icon1" />
          <h1 className="phone">
            8 707 618 8186
          </h1>
          <img src="img/logo/2.png" className="icon2" />
          <a href="https://instagram.com/zhu_ahan04?igshid=YmMyMTA2M2Y="><h1 className="insta">zhu_ahan04</h1>
            <img src="img/logo/3.png" className="icon3" />
          </a><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCBkWCVCdxNBsHbpKkSXJsXFWWfrXnLCzMjccwkscKLrvgtdMrtgQNFpGdpGcBVgbhWGBq">
            <h1 className="mail">
              zhuahan04@gmail.com
            </h1>
          </a></footer><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCBkWCVCdxNBsHbpKkSXJsXFWWfrXnLCzMjccwkscKLrvgtdMrtgQNFpGdpGcBVgbhWGBq">
        </a></div>
    </>
  )
}

export default App
