import Menu from "./Menu";

function Game(){
    return(
        <div>
            <img class="logo" src="./img/logo.png" alt="logo-solo" width={500} />
            <div className="game">
                <h1>Game</h1>
                <Menu />
            </div>
        </div>
    )
}

export default Game;