import styles from './Card.module.scss';

function Card(props) {
    const onClickButton = () => {
        alert(props.title);
    };
    return (
        <section>
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src="/img/heart-unliked.svg" alt="unliked" />
                </div>
                <img width={133} heigh={112} src={props.imageUrl} alt="vinyl" />
                <h5>{props.title}</h5>
                <div className="cardButton d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <strong>{props.price}</strong>
                    </div>
                    <button className="button" onClick={onClickButton}>
                        <img src="/img/add.svg" alt="add" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Card;