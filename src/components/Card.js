function Card() {
    return (
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
    );
}

export default Card;