function App() {
  return <div className="wrapper clear">

    <div className="overlay">
      <aside>
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>


          <section>
            <div className="cartItem d-flex align-center mb-10">
              <img className="mr-20" width={70} heigh={70} src="/vinyl/Depeche Mode - Violator.jpg" alt="vinyl_basket" />
              <div className="mr-20">
                <p className="mb-5">LP Depeche Mode - Violator (1990)</p>
                <strong> 5 900 руб.</strong>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div>
          </section>

          <section>
            <div className="cartItem d-flex align-center mb-10">
              <img className="mr-20" width={70} heigh={70} src="/vinyl/Depeche Mode - Songs Of Faith And Devotion.jpg" alt="vinyl_basket" />
              <div className="mr-20">
                <p className="mb-5">LP Depeche Mode - Songs Of Faith And Devotion (1993)</p>
                <strong> 5 700 руб.</strong>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div>
          </section>

          <div className="items">
            <div className="cartTotal">
              <ul >
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <strong>11 600 руб.</strong>
                </li>
                <li className="d-flex">
                  <span>Налог 13%:</span>
                  <div></div>
                  <strong>1508 руб.</strong>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow" /> </button>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <header className="header d-flex justify-between align-center p-40">

      <div className="headerLeft d-flex align-center">
        <img width={40} heigh={40} src="/vinyl/vinyl.jpg" alt="logo" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Vinyl</h3>
          <p className="opacity-5">Магазин лучшего винила</p>
        </div>
      </div>

      <ul className="headerRight d-flex">
        <li className="mr-30">
          <img width={20} heigh={20} src="/img/basket.svg" alt="basket" />
          <span><strong>6 205 руб.</strong></span>
        </li>
        <li>
          <img width={20} heigh={20} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>

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
        <section>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} heigh={112} src="/vinyl/Depeche Mode - 101.jpg" alt="vinyl" />
            <h5>2LP Depeche Mode - 101 (1988)</h5>
            <div className="cardButton d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <strong> 4 500 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>


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
