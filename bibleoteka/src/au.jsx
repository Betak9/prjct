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
        <link rel="stylesheet" href="au.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div className="header">
          <a href="index.html"><img src="img/logo/logo.png" className="logo" /></a>
          <h1>Есеп және аудит/Учёт и аудит</h1>
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Аудит Ажибаева З.Н.</option>
              <option value={2}>Аудит каз З.Н.Әжібаева</option>
              <option value={3}>Аудит Нұрсейітов Е.О.</option>
              <option value={4}>Басқару есебі Ержанов А.К.</option>
              <option value={5}>Басқару есебі Иманбаева З.О.</option>
              <option value={6}>Экономикалық талдау(2 бөлім)</option>
              <option value={7}>Экономикалық талдау(3 бөлім)</option>
              <option value={8}>Экономикалық талдау(4 бөлім)</option>
              <option value={9}>Әлеуметтік статистика</option>
              <option value={10}>Математика для экономистов</option>
              <option value={11}>Статистика Жумақсанова Қ.М.</option>
              <option value={12}>Статистика теориясы С.М.Мұханбетова</option>
              <option value={13}>Статистика Ю.К.Шоқаманова</option>
              <option value={14}>Статистика А.М.Байдильдина</option>
              <option value={15}>Статистика рус Ю.К.Шокаманова</option>
              <option value={16}>Статистика Ызғарбек Әміреев</option>
              <option value={17}>Тереңдетілген басқарушылық есеп</option>
              <option value={18}>Экономисттерге арналған математика</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://drive.google.com/file/d/1Cz8jVpc5k0V2B8UXiSlpAFmQraTJty_x/preview" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1tD_eko-_ofLHpxqBHf1IDI1b6FUJKy6T/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/17cH6J-XmmYMD-OtUufOCTdupL39CR4C3/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1n4YlR4YvbQqH52TqPiHzKxIQdidUJq_X/preview" width={240} height={340} className="book4" />
        <iframe src="https://drive.google.com/file/d/1oPHoR1w2Pr9Y9aswQG6JOWMiBYE4Uuwn/preview" width={240} height={340} className="book5" />
        <iframe src="https://drive.google.com/file/d/1Z8Okvb0om_pN7RoFsuqiLTAKFP_qXPoF/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/13Zo0K9DQ32zG7BOHlp0ePlDkNhkRwuNh/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/18QuYlMkOs8OnSILOTqYhdMXQNdFKTyic/preview" width={240} height={340} className="book8" />
        <iframe src="https://drive.google.com/file/d/1QHwc_mZVSoVwJyGaKRtB_6VwOHKxDk6H/preview" width={240} height={340} className="book9" />
        <iframe src="https://drive.google.com/file/d/1sDUFvwOx9CueUPTG7LyrENh9O5tt95nM/preview" width={240} height={340} className="book10" />
        <iframe src="https://drive.google.com/file/d/16Cn7-V3Xl0S0KtDJu945gDaKGJDcsE7J/preview" width={240} height={340} className="book11" />
        <iframe src="https://drive.google.com/file/d/13Kmsvsu5uUscfE0pj2iIRaUA_rkjy1cj/preview" width={240} height={340} className="book12" />
        <iframe src="https://drive.google.com/file/d/1T6ax8Ell6pLcfFA3QdFUgVF9QUfZOOWM/preview" width={240} height={340} className="book13" />
        <iframe src="https://drive.google.com/file/d/131p3Y-2gQTScd70hF0FkEvgL5dJRIylp/preview" width={240} height={340} className="book14" />
        <iframe src="https://drive.google.com/file/d/11ocRktwXXFwsQic5JUluw60hwXIRnkn-/preview" width={240} height={340} className="book15" />
        <iframe src="https://drive.google.com/file/d/1XLMCM2ucA6edAO5l2LOCVs316z7MvnWR/preview" width={240} height={340} className="book16" />
        <iframe src="https://drive.google.com/file/d/1hbj5eCxtdR_CKNRgX-WwwBR1GmR70VQT/preview" width={240} height={340} className="book17" />
        <iframe src="https://drive.google.com/file/d/1n4YlR4YvbQqH52TqPiHzKxIQdidUJq_X/preview" width={240} height={340} className="book18" />
        <footer>
          <img src="img/logo/1.png" className="icon1" />
          <h1 className="phone">
            8 707 351 89 38
          </h1>
          <img src="img/logo/2.png" className="icon2" />
          <a href="https://www.instagram.com/littlebajio"><h1 className="insta">
              zhu_ahan04
            </h1>
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
