import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Library of College Narxoz</title>
        <link rel="shortcut icon" href="img/logo/icon.png" type="image/png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="gum.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div className="header">
          <a href="index.html"><img src="img/logo/logo.png" className="logo" /></a>
          <h1>Гуманитарлық пәндер</h1> 
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Учебник английского языка Н.А.Бонк</option>
              <option value={2}>ENGLISH THROUGH READING Ш.Г.Искакова</option>
              <option value={3}>Engish on Economics</option>
              <option value={4}>Кәсіби қазақ тілі</option>
              <option value={5}>Кәсіптік қазақ тілі</option>
              <option value={6}>Қазақ тілі З.С.Кузекова</option>
              <option value={7}>Основы экономики и бизнеса на английском</option>
              <option value={8}>Профессиональный русский язык</option>
              <option value={9}>Профессиональный русский язык Х.К.Солтаналина</option>
              <option value={10}>Русский язык для программистов</option>
              <option value={11}>Іс қағаздарын жүргізу және техникалық құжаттама</option>
              <option value={12}>Делопроизводство в Республике Казахстан</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://drive.google.com/file/d/1I8x5dxtk6n9C3_94rcbkiGAqrS1Ov_4t/preview" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1vGdWwd588ZSYuDCHo4Brj6Mr63RfAKLj/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/1OMCL_hgGe0mMy8-L9DcYS3FpU9WWd3c-/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1rHNrjol_4w-g2rNOmglhx3Lutx8whkzK/preview" width={240} height={340} className="book4" />
        <iframe src="https://drive.google.com/file/d/1tMuLCy45UflThp3j-YYtgs4poBeAkyou/preview" width={240} height={340} className="book5" />
        <iframe src="https://drive.google.com/file/d/1rtUqYMG60yY2nW9syunAyTZRrFy5eYms/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/1565vXQ_hRbOPfQI0L6tjQgy0DY-XBFjQ/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/1l9egPuvU6al2Y1f6u5Ne_FbDt2g1tNlq/preview" width={240} height={340} className="book8" />
        <iframe src="https://drive.google.com/file/d/1RRnbDJQwbmEn5okgr-2Ueh-EOHxUK270/preview" width={240} height={340} className="book9" />
        <iframe src="https://drive.google.com/file/d/1r5TKm7uMWukRYxMLwLvhEod0Ex6xOUIT/preview" width={240} height={340} className="book10" />
        <iframe src="https://drive.google.com/file/d/1bi3EbLgB4imZ7O7e0m965RXJULWgvZXd/preview" width={240} height={340} className="book11" />
        <iframe src="https://drive.google.com/file/d/1q84Vn_nf8rWlJ1Cw7meacRJ5wtk8_ZfQ/preview" width={240} height={340} className="book12" />
        <iframe src="https://drive.google.com/file/d/1Hp-PE_-5dhxigyI6Kwnwe_CGBqmGZFWl/preview" width={240} height={340} className="book13" />
        <iframe src="https://drive.google.com/file/d/1d_QFgnxhqe-QDeKNaX-6qRDA8AQxhiqi/preview" width={240} height={340} className="book14" />
        <iframe src="https://drive.google.com/file/d/195ooR323W_ZJe47-Rdc67Be2W3nTgZ5z/preview" width={240} height={340} className="book15" />
        <iframe src="https://drive.google.com/file/d/12O5tgAwnklK9xBTaoJO65e1riVRLASb6/preview" width={240} height={340} className="book16" />
        <iframe src="https://drive.google.com/file/d/1SC7M0N3UgWhGOHzb74D1Lbkr2sIZ_kgK/preview" width={240} height={340} className="book17" />
        <iframe src="https://drive.google.com/file/d/1G7uSB8axXMsxnKtu9wTxvb72UEcmgmv9/preview" width={240} height={340} className="book18" />
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
