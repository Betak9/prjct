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
        <link rel="stylesheet" href="men.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div className="header">
          <a href="index.html"><img src="img/logo/logo.png" className="logo" /></a>
          <h1>Менеджмент, маркетинг</h1>
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Маркетинг негіздері С.Х.Тойкин</option>
              <option value={2}>Маркетинг Н.А.Калганбаев</option>
              <option value={3}>Менеджмент негіздері</option>
              <option value={4}>Менеджмент Теория и практика Казахстана</option>
              <option value={5}>Менеджмент Рикки У.Гриффин</option>
              <option value={6}>Менеджмент Умбеталиева Б.Қ.</option>
              <option value={7}>Основы маркетинга и менеджмента И.А.Леонтьева</option>
              <option value={8}>Халықаралық экономика А.М.Қазамбаева</option>
              <option value={9}>Кәсіпорын экономикасы Р.Қ.Ниязбекова</option>
              <option value={10}>Макроэкономика М.Айдарханов</option>
              <option value={11}>Микроэкономика Бекжанова Г.Е.</option>
              <option value={12}>Нарықтық экономика негіздері</option>
              <option value={13}>Основы экономики</option>
              <option value={14}>Основы экономической теории</option>
              <option value={15}>Ұйым экономикасы</option>
              <option value={16}>Ұлттық экономика</option>
              <option value={17}>Экономика негіздері</option>
              <option value={18}>Экономика предприятия</option>
              <option value={19}>Экономикалық теория: кестелі оқу құралы</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://drive.google.com/file/d/1Q2_S41Ndom2HJBcIkBfOZFIq82iBsthk/preview" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1MtZ5Km-y2snhzUhuQ1gzPg3-Ux0jxR9I/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/1nBpIPhG_sfzEAwIGvURoGQXLEHrlf1n7/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1CxGgryJItzdi0GJDd-sS-NHndrihEK9v/preview" width={240} height={340} className="book4" />
        <iframe src="https://drive.google.com/file/d/10BW9XLiXskyrIeRiV8pN9j56xRYOKdHn/preview" width={240} height={340} className="book5" />
        <iframe src="https://drive.google.com/file/d/1pKe6hfoo0XVTEoTn3SUClmD9grOnVFBZ/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/1ssJoVEGhNj87UsWJ5V89XvwBsBI9EJRF/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/1587l5-OlW6G0WzisKtaWrosas2JPqUQy/preview" width={240} height={340} className="book8" />
        <iframe src="https://drive.google.com/file/d/1Zg43M-TcZAazGdmr0ATFHOHecnXjOmKJ/preview" width={240} height={340} className="book9" />
        <iframe src="https://drive.google.com/file/d/1m1DEzXqCGKdrd1zkNx2ozyxV7gPnMxW2/preview" width={240} height={340} className="book10" />
        <iframe src="https://drive.google.com/file/d/17s7ugjxe6ogYbBq5GUrPeLsBxXlQZSFt/preview" width={240} height={340} className="book11" />
        <iframe src="https://drive.google.com/file/d/1RGB07uZ7w7WWwpvqRUqQrTD6iX4HN4SF/preview" width={240} height={340} className="book12" />
        <iframe src="https://drive.google.com/file/d/154ngKAcwgj8cwgWgSlyxO9JnCpRx23br/preview" width={240} height={340} className="book13" />
        <iframe src="https://drive.google.com/file/d/1NAtJ-_s5PHz8zpncUW1f0rKUN3epJZdQ/preview" width={240} height={340} className="book14" />
        <iframe src="https://drive.google.com/file/d/13kpzyVTm7jlKfDLrb4CsnDYF-1wtjCOw/preview" width={240} height={340} className="book15" />
        <iframe src="https://drive.google.com/file/d/1gzltz5KEM8cdJBQLOeFsdf86H58tahWK/preview" width={240} height={340} className="book16" />
        <iframe src="https://drive.google.com/file/d/1lLgSR_qH1wBqXw591D4K_Ix4FusJbjh6/preview" width={240} height={340} className="book17" />
        <iframe src="https://drive.google.com/file/d/1aBuxPI8HWXERmZ4faUg8dBCu_4bJWj3o/preview" width={240} height={340} className="book18" />
        <iframe src="https://drive.google.com/file/d/1RIRATL9vhtWz_cCCfP3tnkXTPpvTD0MH/preview" width={240} height={340} className="book19" />
        <iframe src="https://drive.google.com/file/d/1xN4IyaD0pWkTa-NOD82UoYxOIckSK9d7/preview" width={240} height={340} className="book20" />
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
