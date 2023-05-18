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
        <link rel="stylesheet" href="soc.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div className="header">
          <a href="index.html"><img src="img/logo/logo.png" className="logo" /></a>
          <h1>Социалды пәндер</h1>
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value />
              <option value={1} style={{position: 'hidden'}}>Еңбек қорғау</option>
              <option value={2}>Әлеуметтану негіздері</option>
              <option value={3}>Әлеуметтану негіздері Ш.Қ.Қарабаев</option>
              <option value={4}>История Государства и права Казахстана</option>
              <option value={5}>История Казахстана</option>
              <option value={6}>Культурология</option>
              <option value={7}>Қарым-қатынас психологиясы</option>
              <option value={8}>Логика Ғабитов Т.Х.</option>
              <option value={9}>Мәдениеттану</option>
              <option value={10}>Основы политологии</option>
              <option value={11}>Основы социологии</option>
              <option value={12}>Основы философии</option>
              <option value={7}>Охрана труда</option>
              <option value={8}>Саясаттану</option>
              <option value={9}>Социология</option>
              <option value={10}>Философия негіздері</option>
              <option value={11}>Кәсіпкерлік және бизнес негіздері</option>
            </select>
          </div> 
          <link rel="stylesheet" href="https://snipp.ru/cdn/chosen/1.8.7/chosen.min.css" />
        </div>
        <iframe src="https://drive.google.com/file/d/1Sdz7BAbkmQ4-SGgVDsbfQpxQ6zxxFw3I/preview" width={240} height={340} className="book1" />
        <iframe src="https://drive.google.com/file/d/1NE62EMBAmEz1U66-XrHlkewkfxl7rQ7J/preview" width={240} height={340} className="book2" />
        <iframe src="https://drive.google.com/file/d/1NE62EMBAmEz1U66-XrHlkewkfxl7rQ7J/preview" width={240} height={340} className="book3" />
        <iframe src="https://drive.google.com/file/d/1oZdX6MxSxMnkgR1mktcacB-fR8RB5W96/preview" width={240} height={340} className="book4" />
        <iframe src="https://drive.google.com/file/d/1sSqifKbYw3OB1LoG1tsW9dRgzEzjMhV1/preview" width={240} height={340} className="book5" />
        <iframe src="https://drive.google.com/file/d/18jSEdxqGD_n4uMZ6NDuZv5RYuHMBY8ep/preview" width={240} height={340} className="book6" />
        <iframe src="https://drive.google.com/file/d/1mKrma-J5qGjN8OMWYz3day3uVd1f4I8A/preview" width={240} height={340} className="book7" />
        <iframe src="https://drive.google.com/file/d/1mRW6bHctv3kgvOlYcws8QkCp6AX0_0qL/preview" width={240} height={340} className="book8" />
        <iframe src="https://drive.google.com/file/d/1FKH8vrOjOGOW2nCuS6muVEsdP6YCo2Nm/preview" width={240} height={340} className="book9" />
        <iframe src="https://drive.google.com/file/d/1gBWYZ3JZnDlR0I4-nYTAFRwEv7XtSxl5/preview" width={240} height={340} className="book10" />
        <iframe src="https://drive.google.com/file/d/1mjy8WSShqS7HS9p6cBSta8ERvghChM_X/preview" width={240} height={340} className="book11" />
        <iframe src="https://drive.google.com/file/d/1z4QnLRKqT8oYLna6y375gBlgs7kLh8Fq/preview" width={240} height={340} className="book12" />
        <iframe src="https://drive.google.com/file/d/1TUO8qwqBjN4pLYw6MvW9ZGaB4RL4dEWz/preview" width={240} height={340} className="book13" />
        <iframe src="https://drive.google.com/file/d/1wqwKRkB661DVNRCnLF098YZJfs2j9i1G/preview" width={240} height={340} className="book14" />
        <iframe src="https://drive.google.com/file/d/1McdUeNRONPYlQG3Gj8o3HEweQvyPb9dd/preview" width={240} height={340} className="book15" />
        <iframe src="https://drive.google.com/file/d/1u7oOBIIvzq_h9ufEL0Q98GSJiAirdFFy/preview" width={240} height={340} className="book16" />
        <iframe src="https://drive.google.com/file/d/1iBNIgOzhOyFcyb2HM8ZgEO1cvyoreHHh/preview" width={240} height={340} className="book17" />
        <iframe src="https://drive.google.com/file/d/1w_JgkPq3wWhakdKNMneEl03HSYN7E5nT/preview" width={240} height={340} className="book18" />
        <iframe src="https://drive.google.com/file/d/1OR-N-2zDOW4-5NJW0TyGvMP7CeMPHw3l/preview" width={240} height={340} className="book19" />
        <iframe src="https://drive.google.com/file/d/12h7cVaywsDdpxA_mPF2hGpgcZ5waGRLe/preview" width={240} height={340} className="book20" />
        <iframe src="https://drive.google.com/file/d/1g0t6pGI5AUf3jZPzh9_tWUN9uOlx14G7/preview" width={240} height={340} className="book21" />
        <iframe src="https://drive.google.com/file/d/1GkXy7vlpL-oQGRc4Li_Qo59aTT8zRIwX/preview" width={240} height={340} className="book22" />
        <iframe src="https://drive.google.com/file/d/1jo0eiWT5zmX2zO2p2-TiANhtSvOOCmwy/preview" width={240} height={340} className="book23" />
        <iframe src="https://drive.google.com/file/d/1q0NH8D5fhl8kAqiUxK_JDNwwkfA31qop/preview" width={240} height={340} className="book24" />
        <iframe src="https://drive.google.com/file/d/1kPz-HpwzUed-d58QqMQFpV4m7g9KD95O/preview" width={240} height={340} className="book25" />
        <iframe src="https://drive.google.com/file/d/1OA8axz1fE2LgMelFa7BYih-H2Q6aLeJX/preview" width={240} height={340} className="book26" />
        <iframe src="https://drive.google.com/file/d/1RQEOZ-6bkRyMMyKE8AFfK4zQSlbqZ8yc/preview" width={240} height={340} className="book27" />
        <iframe src="https://drive.google.com/file/d/1v653tNZ5ILxwV3fwPuCZ3RihpvbQJXD-/preview" width={240} height={340} className="book28" />
        <iframe src="https://drive.google.com/file/d/1yZpakL-OvZRRW24-kz4Kt-h6vhelpygT/preview" width={240} height={340} className="book29" />
        <iframe src="https://drive.google.com/file/d/1BiFgIUDFrCFRg5GdRgZYxHjbPWpZZBFl/preview" width={240} height={340} className="book30" />
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
