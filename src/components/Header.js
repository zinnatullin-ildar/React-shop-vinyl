function Header() {
    return (
        <header className="header d-flex justify-between align-center p-40 {styles.card}" >

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
                    <span><strong>11 600 руб.</strong></span>
                </li>
                <li>
                    <img width={20} heigh={20} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    );
}

export default Header;