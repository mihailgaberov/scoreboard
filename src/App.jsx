import classes from './app.module.scss'
import ScoreboardsGrid from "./components/ScoreboardsGrid/index.jsx";

function App() {
    return (
        <div className={classes.app}>
            <header>
                <img src='./logo.svg' alt='FIFA World Cup Scoreboard'/>
                <h2>FIFA World Cup Scoreboard</h2>
            </header>
            <main>
                <ScoreboardsGrid />
            </main>
        </div>
    )
}

export default App
