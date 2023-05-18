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
          <h1>ВТиПО/ЕТжБҚ</h1>
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Aвтоматтандырылған жобалау жүйесінің негіздері</option>
              <option value={2}>Алгоритмизация и программирование</option>
              <option value={3}>Заманауи компьютерлермен есептеулер және жобалау</option>
              <option value={4}>Компьютерлік графиканың теориялық негіздер</option>
              <option value={5}>Компьютерлік жүйелердің сенімділігі</option>
              <option value={6}>Компьютерные технологии</option>
              <option value={7}>Робототехника және бағдарламалау</option>
              <option value={8}>Робототехника и программирование</option>
              <option value={9}>Aқша және банктер</option>
              <option value={10}>Бюджет и бюджетная система</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://drive.google.com/file/d/1epEaMQMML_4aj4-vHwuPjPafrKQQTEQZ/preview" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1ob3Nm-Q2Rx-ozraU1YNsUuaoHuXijA_s/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/18HJgbcERQCXw4OCooDfKmBm-nGXcAh5P/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1f8dy0L3JkmKmgkqWQFZUBBuqSwXiIYEM/preview" width={240} height={340} className="book4" />
        <iframe src="https://drive.google.com/file/d/12KZyKhwH3a5FXkv5BjV5UFGuBpIfsXVK/preview" width={240} height={340} className="book5" />
        <iframe src="https://drive.google.com/file/d/1ft_-Vp5Hli43msFM1r0Vp-4CIlt-gowg/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/1trWQlaDcd9Dhc24L36jd9gmLE8IW_vVz/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/1H-lw-5RAHhPdK7A9mvqDH-CLgvdmSxOk/preview" width={240} height={340} className="book8" />
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
