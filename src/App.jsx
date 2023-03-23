import classes from './app.module.scss'

function App() {
    return (
        <div className={classes.app}>
            <header>
                <img src='./logo.svg' alt='FIFA World Cup Scoreboard'/>
                <h2>FIFA World Cup Scoreboard</h2>
            </header>
            <main>
                scoreboard here...
            </main>
        </div>
    )
}

export default App
