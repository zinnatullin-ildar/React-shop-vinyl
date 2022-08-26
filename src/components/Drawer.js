function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
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
                                    <span>Налог 20%:</span>
                                    <div></div>
                                    <strong>2320 руб.</strong>
                                </li>
                            </ul>
                            <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow" /> </button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Drawer;
