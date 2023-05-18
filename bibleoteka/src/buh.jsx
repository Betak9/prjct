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
        <link rel="stylesheet" href="buh.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div className="header">
          <a href="index.html"><img src="img/logo/logo.png" className="logo" /></a>
          <h1>Бухгалтерлік есеп</h1>
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Банктегі бухгалтерлік есеп</option>
              <option value={2}>О бухгалтерском учете и финансовой отчетности</option>
              <option value={3}>Бухгалтерлік есеп Г.Рубцова</option>
              <option value={4}>Бухгалтерлік есеп В.П.Проскурина</option>
              <option value={5}>Бухгалтерлік есеп бойынша есептер жинағы В.П.Проскурина</option>
              <option value={6}>Бухгалтерлік есеп бойынша практикум М.Молдашев</option>
              <option value={7}>Бухгалтерлік есеп В.Л.Назарова</option>
              <option value={8}>Бухгалтерлік есеп негіздері Таштанова Н.Н.</option>
              <option value={9}>Бухгалтерлік есеп теориясы және негіздері</option>
              <option value={10}>Бухгалтерлік есепті жүргізу қағидалары</option>
              <option value={11}>Бухгалтерлік проводкалар</option>
              <option value={12}>Бухгалтерлік есеп шоттарының үлгілік жоспары</option>
              <option value={13}>Бухгалтерские проводки</option>
              <option value={14}>Бухгалтерский учет в организациях</option>
              <option value={15}>Бухгалтерский учет в отраслях</option>
              <option value={16}>1с: Предприятие 8</option>
              <option value={17}>Бухгалтерлік есеп және қаржылық талдау</option>
              <option value={18}>Бухгалтерлікесеп теориясы</option>
              <option value={19}>1С Бухгалтерия программасында жүргізу</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://drive.google.com/file/d/1JtTRTy3IR4tGzHRbaNNTMWBOXTV4yyQ1/preview" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1YULQRY_1cnSy-frJ5sOec7O73h2VG4D8/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/1mIrRltxMn8bb_DT6ynLbbja7SFAS7Sq-/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1E0gtYNt9EOvAp5f_oR1rEcwNYWtuxNd9/preview" width={240} height={340} className="book4">&lt;iframe&gt;
          &lt;iframe src="https://drive.google.com/file/d/10r9kExPsEQJKjcl87mWvZlF0qhmpEerS/preview" width="240" height="340" class="book5"&gt;</iframe>
        <iframe src="https://drive.google.com/file/d/1-Web2d04YSxL9-QENHFuqtQ0M2VXkr0i/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/10Vmzn4v66qeMR8PduVm2mg-LqzpJShVq/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/1QriV4pQTOeg6haJqeOd-hyiCPazP9DgI/preview" width={240} height={340} className="book8" />
        <iframe src="https://drive.google.com/file/d/1vbGllMWdcqaVTHpMEE4qN51c0noD-VHG/preview" width={240} height={340} className="book9" />
        <iframe src="https://drive.google.com/file/d/1qvjzb_UdUCD9slGwVGSbzo9QACoaA26-/preview" width={240} height={340} className="book10" />
        <iframe src="https://drive.google.com/file/d/1iWHSiMR65mWnkQVi0-_Zvv9kztFHUV_Y/preview" width={240} height={340} className="book11" />
        <iframe src="https://drive.google.com/file/d/1Vykke7OzxQaTez_5yHQYp7rZoZhmMk1A/preview" width={240} height={340} className="book12" />
        <iframe src="https://drive.google.com/file/d/1ydWC2wbwbQAZMVI0cc_rqQAq2ABK9Yfe/preview" width={240} height={340} className="book13" />
        <iframe src="https://drive.google.com/file/d/1008-XVukf8aWOoEgkHoT3xjcSmuYvmxo/preview" width={240} height={340} className="book14" />
        <iframe src="https://drive.google.com/file/d/1tte4XC0TkdFpwx9shNQFgDMSp72EIXbj/preview" width={240} height={340} className="book15" />
        <iframe src="https://drive.google.com/file/d/19wDk-MhWBKFHu9DGE4QV4LPX9AF7O8Ll/preview" width={240} height={340} className="book16" />
        <iframe src="https://drive.google.com/file/d/1VpXg53n1OSztBuX1qjsVQdknHH_jZZ4S/preview" width={240} height={340} className="book17" />
        <iframe src="https://drive.google.com/file/d/13C1s_qo2kVwAtxiwQz_05ZCGFfo9B4pG/preview" width={240} height={340} className="book18" />
        <iframe src="https://drive.google.com/file/d/1us1PlpQoI62V0i7pm_ZxODHcEzQ9kEvr/preview" width={240} height={340} className="book19" />
        <iframe src="https://drive.google.com/file/d/13h-KZYpSckwphXDuNn7lCXsXfRD40OIe/preview" width={240} height={340} className="book20" />
        <iframe src="https://drive.google.com/file/d/1n0Eo4XXk4JHz5rVYYbRQVa9NIJLHl6VK/preview" width={240} height={340} className="book21" />
        <iframe src="https://drive.google.com/file/d/1cjUqzBsQe2XawedsfguPZ2ufyxDcdUen/preview" width={240} height={340} className="book22" />
        <iframe src="https://drive.google.com/file/d/1JW7ik-NKMnxuGr8-7Ew3O4E0GrLB1pIy/preview" width={240} height={340} className="book23" />
        <iframe src="https://drive.google.com/file/d/1LbLU7NJtAxxqHmC5qDTuCVHjd6uma6ay/preview" width={240} height={340} className="book25" />
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
