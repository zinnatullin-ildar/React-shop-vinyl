import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Depeche Mode - 101 (1988)',
    price: '4 500 руб.',
    imageUrl: '/vinyl/Depeche Mode - 101.jpg'
  },
  {
    title: 'Depeche Mode - Songs Of Faith And Devotion (1993)',
    price: '5 700 руб.',
    imageUrl: '/vinyl/Depeche Mode - Songs Of Faith And Devotion.jpg'
  },
  {
    title: 'Depeche Mode - Music For The Masses (1987)',
    price: '5 800 руб.',
    imageUrl: '/vinyl/Depeche Mode - Music For The Masses.jpg'
  },
  {
    title: 'Depeche Mode - Black Celebration (1986)',
    price: '5 700 руб.',
    imageUrl: '/vinyl/Depeche Mode - Black Celebration.jpg'
  },
  {
    title: 'Depeche Mode - Violator (1990)',
    price: '5 900 руб.',
    imageUrl: '/vinyl/Depeche Mode - Violator.jpg'
  },
  {
    title: 'Depeche Mode - Ultra (1996)',
    price: '5 100 руб.',
    imageUrl: '/vinyl/Depeche Mode - Ultra.jpg'
  },
  {
    title: 'Depeche Mode - Speak & Spell (1981)',
    price: '4 600 руб.',
    imageUrl: '/vinyl/Depeche Mode - Speak & Spell.jpg'
  },
  {
    title: 'Depeche Mode - Some Great Reward (1984)',
    price: '5 700 руб.',
    imageUrl: '/vinyl/Depeche Mode - Some Great Reward.jpg'
  },
  {
    title: 'Depeche Mode - Construction Time Again (1983)',
    price: '4 900 руб.',
    imageUrl: '/vinyl/Depeche Mode - Construction Time Again.jpg'
  },
  {
    title: 'Depeche Mode - Playing The Angel (2005)',
    price: '5 300 руб.',
    imageUrl: '/vinyl/Depeche Mode - Playing The Angel.jpg'
  },
  {
    title: 'Depeche Mode - Exciter (2001)',
    price: '5 200 руб.',
    imageUrl: '/vinyl/Depeche Mode - Exciter.jpg'
  },
  {
    title: 'Depeche Mode - A Broken Frame (1982)',
    price: '4 600 руб.',
    imageUrl: '/vinyl/Depeche Mode - A Broken Frame.jpg'
  },
];

function App() {
  return <div className="wrapper clear">

    <Drawer />
    <Header />

    <main>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
          <h1 className="ml-10">Весь винил</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
      </div>

      <div className="vinyl d-flex flex-wrap">
        {arr.map((obj) =>
          <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl} />,
        )}

      </div>
    </main >
  </div >
}

export default App;
