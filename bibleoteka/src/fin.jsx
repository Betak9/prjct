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
          <h1>Қаржы/финансы</h1>
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Ақша және банктер К.Блеутаева</option>
              <option value={2}>Бюджет и бюджетная система Н. Макарова</option>
              <option value={3}>Корпроративтік қаржы пәнінен дәрістер кешені Ж.Байшукурова</option>
              <option value={4}>Корпоративтік қаржы Н.Кадерова</option>
              <option value={5}>Қаржы С.Құлпыбаев</option>
              <option value={6}>Қаржы бойынша практикум А.Мукашева</option>
              <option value={7}>Қаржы С.Құлпыбаев</option>
              <option value={8}>Қаржылық есеп Б.Баймұханова</option>
              <option value={9}>Қаржылық есеп</option>
              <option value={10}>Мемлекеттік қаржы Г.Жолмырзаева</option>
              <option value={11}>КОРПОРАТИВТІК ҚАРЖЫ Э.Э.Михель</option>
              <option value={12}>Основы финансов</option>
              <option value={13}>Теория финансов</option>
              <option value={14}>КОРПОРАТИВТІК ҚАРЖЫ Уакпаева М.М</option>
              <option value={15}>Финансовый учёт С.Б.Баймуханова</option>
              <option value={16}>Налоговая система Республики Казахстан Б.Ж.Ермекбаев</option>
              <option value={17}>Методика исчисления налогов и других обязательных платежей в Республике Казахстан</option>
              <option value={18}>Салық есебі Б.Сұлтанова</option>
              <option value={19}>Салық және салық салу Жакипбеков С.Т.</option>
              <option value={20}>Салық және салық салу Б.Ж.Ермекбаева</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://drive.google.com/file/d/1Hp5D74A8GCMwCQDXmAkOsNL-Wy0iM5cr/preview" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1cqyvgOMX8G8jDD0n3R9oV-o7iNo5yYld/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/1IM1xOYLwTc6U82GgtRWre1Gr7-Ymioym/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1hId-pqtUYZKGYffMKMK4yHP6nUu2kirf/preview" width={240} height={340} className="book4" />
        <iframe src="https://drive.google.com/file/d/1YgCRh6x_aQ5y7paubHtSzhRjm5pczaN7/preview" width={240} height={340} className="book5" />
        <iframe src="https://drive.google.com/file/d/1rnv6RVZFBNFjES5OItgfetAgbQ2p5jEf/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/1m0TQ5wgHxYRLKiUc0AJcQYZIPiCU-mcb/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/1j-xmEQP7aJYLBtgyG9WoiCSboWQp5lQv/preview" width={240} height={340} className="book8" />
        <iframe src="https://drive.google.com/file/d/1PtSmBN6nquiHP1Guu1-bQGYnclkDJOhh/preview" width={240} height={340} className="book9" />
        <iframe src="https://drive.google.com/file/d/1O6UMLysgFkxLz9pWfASJgHOYxdJLT0jE/preview" width={240} height={340} className="book10" />
        <iframe src="https://drive.google.com/file/d/1gYKef94MsBtNX3XSrnhSf2sr8TCtCL5w/preview" width={240} height={340} className="book11" />
        <iframe src="https://drive.google.com/file/d/1duUWKkBZ_Gjyh0hljsATaK8CK-foDtJf/preview" width={240} height={340} className="book12" />
        <iframe src="https://drive.google.com/file/d/1X54_9165-b3hRUorMzOWIloJZPgUfdd6/preview" width={240} height={340} className="book13" />
        <iframe src="https://drive.google.com/file/d/1fhVNpBE28TAWzGA59Ad6vvTY5cIKqgKN/preview" width={240} height={340} className="book14" />
        <iframe src="https://drive.google.com/file/d/1FrRZEEWKkLr1L-j3Mgs3hdYXSefABlIa/preview" width={240} height={340} className="book15" />
        <iframe src="https://drive.google.com/file/d/1gFyGQFEYoPtuJ6H6XG8XCJQ4Zf4BzEAQ/preview" width={240} height={340} className="book16" />
        <iframe src="https://drive.google.com/file/d/1S_0AlsQ-tGOrQzRAzF_S9NeLOkAYEmXK/preview" width={240} height={340} className="book17" />
        <iframe src="https://drive.google.com/file/d/1-UmbEaRRI6slqBVjQLGa5i0MWb-n6KgB/preview" width={240} height={340} className="book18" />
        <iframe src="https://drive.google.com/file/d/1117NkcJMrCtYuJe-vFXgrB6SqAe1Zd-q/preview" width={240} height={340} className="book19" />
        <iframe src="https://drive.google.com/file/d/1CgyegsjlodEKv9fCiMCwKTWv9Uu44pr2/preview" width={240} height={340} className="book20" />
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
