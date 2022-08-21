import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
        <Card />


        {/* <section>
          <div className="card">
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - Songs Of Faith And Devotion.jpg" alt="vinyl" />
            <h5>LP Depeche Mode - Songs Of Faith And Devotion (1993)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 5 700 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="card">
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - Music For The Masses.jpg" alt="vinyl" />
            <h5>LP Depeche Mode - Music For The Masses (1987)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 5 800 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="card">
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - Black Celebration.jpg" alt="vinyl" />
            <h5>LP Depeche Mode - Black Celebration (1986)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 5 700 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="card">
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - Violator.jpg" alt="vinyl" />
            <h5>LP Depeche Mode - Violator (1990)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 5 900 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="card">
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - Ultra.jpg" alt="vinyl" />
            <h5>LP Depeche Mode - Ultra (1996)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 5 100 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="card">
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - Speak & Spell.jpg" alt="vinyl" />
            <h5>LP Depeche Mode - Speak & Spell (1981)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 4 600 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="card">
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - Some Great Reward.jpg" alt="vinyl" />
            <h5>LP Depeche Mode - Some Great Reward (1984)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 4 900 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section> */}

        {/* <div className="card">
          <img width={133} heigh={112} src="/vinyl/Depeche Mode - Construction Time Again.jpg" alt="vinyl" />
          <h5>LP Depeche Mode - Construction Time Again (1983)</h5>
          <div className="cardButton d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <strong> 4 900 руб.</strong>
            </div>
            <button className="button">
              <img src="/img/add.svg" alt="add" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} heigh={112} src="/vinyl/Depeche Mode - Playing The Angel.jpg" alt="vinyl" />
          <h5>LP Depeche Mode - Playing The Angel (2005)</h5>
          <div className="cardButton d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <strong> 5 300 руб.</strong>
            </div>
            <button className="button">
              <img src="/img/add.svg" alt="add" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} heigh={112} src="/vinyl/Depeche Mode - Exciter.jpg" alt="vinyl" />
          <h5>LP Depeche Mode - Exciter (2001)</h5>
          <div className="cardButton d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <strong> 5 200 руб.</strong>
            </div>
            <button className="button">
              <img src="/img/add.svg" alt="add" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} heigh={112} src="/vinyl/Depeche Mode - A Broken Frame.jpg" alt="vinyl" />
          <h5>LP Depeche Mode - A Broken Frame (1982)</h5>
          <div className="cardButton d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <strong> 4 600 руб.</strong>
            </div>
            <button className="button">
              <img src="/img/add.svg" alt="add" />
            </button>
          </div>
        </div> */}

      </div>
    </main >
  </div >
}

export default App;
