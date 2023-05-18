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
          <h1>Құқық/право</h1>
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Всеобщая история государства и права</option>
              <option value={2}>История государства и права Казахстана</option>
              <option value={3}>Заманауи компьютерлермен есептеулер және жобалау</option>
              <option value={4}>Қазақстан Республикасындағы адвокатура және адвокаттық қызмет</option>
              <option value={5}>Қазақстан Республикасының әкімшілік іс жүргізу құқығы</option>
              <option value={6}>Қазақстан Республикасының әкімшілік құқығы</option>
              <option value={7}>Қазақстан Республикасының құқық қорғау органдары</option>
              <option value={8}>Құқық негіздері</option>
              <option value={9}>Мемлекет және құқық теориясы Ғ.Сапарғалиева</option>
              <option value={10}>Мемлекет және құқық теориясы</option>
              <option value={11}>Основы права</option>
              <option value={12}>Основы государства и права</option>
              <option value={13}>Правоохранительные органы Республики Казахстан</option>
              <option value={14}>Финансовое право</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://docs.google.com/document/d/1M77WW5mAJ6lX7DdXYzj4Zz2irsVgLD_FYDrsmIz6iaw/edit" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1tVHMHQWOnehOSchVOu7oqB4FCEUWlFwA/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/18Fu6RW_daI0TJGhUHcjNKnydbRJIOyXH/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1dhFCKdxMpilTVKEhykHzlIarNpGuVY7d/preview" width={240} height={340} className="book4" />
        <iframe src="https://drive.google.com/file/d/1Dx0DvGtk1olcoTdvYqBH-XyHyKJ1CJHe/preview" width={240} height={340} className="book5" />
        <iframe src="https://drive.google.com/file/d/19yPphqzkrGGnM2QYV4ajePcDaM5HwybQ/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/1eqrMXDNB0gvFa5tjY2lPwmW0bK9gzOt8/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/1k_bueAhfqqyKEyvGIjPQeTGWP5RncFia/preview" width={240} height={340} className="book8" />
        <iframe src="https://drive.google.com/file/d/1-6F5GprksmRNET6ACaGkx0dq2-7wz9MM/preview" width={240} height={340} className="book9" />
        <iframe src="https://drive.google.com/file/d/1Bq06yu15-1Jgnk4wBqittxf4gHQzRifD/preview" width={240} height={340} className="book10" />
        <iframe src="https://drive.google.com/file/d/1IaKD0g6D8W2BYgCeTBPUw2_L37_zj3Q7/preview" width={240} height={340} className="book11" />
        <iframe src="https://drive.google.com/file/d/1XCo4QShBxBVNzhDtN4u3fK9CltpYreOW/preview" width={240} height={340} className="book12" />
        <iframe src="https://drive.google.com/file/d/1pn5aKra58Y5EgTMk-GTriSOLU5N7dyhQ/preview" width={240} height={340} className="book13" />
        <footer>
          <img src="img/logo/1.png" className="icon1" />
          <h1 className="phone">
            8 707 618 8186
          </h1>
          <img src="img/logo/2.png" className="icon2" />
          <a href="https://www.instagram.com/littlebajio"><h1 className="insta">
              littlebajio
            </h1>
            <img src="img/logo/3.png" className="icon3" />
          </a><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCBkWCVCdxNBsHbpKkSXJsXFWWfrXnLCzMjccwkscKLrvgtdMrtgQNFpGdpGcBVgbhWGBq">
            <h1 className="mail">
              atulebayeva@college-narxoz.kz
            </h1>
          </a></footer><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCBkWCVCdxNBsHbpKkSXJsXFWWfrXnLCzMjccwkscKLrvgtdMrtgQNFpGdpGcBVgbhWGBq">
        </a></div>
    </>
  )
}

export default App
