import classes from './app.module.scss'

function App() {
    return (
        <div className={classes.app}>
            <header>
                <img src='./logo.svg' alt='Football World Cup Scoreboard'/>
                <h2>Football World Cup Scoreboard</h2>
            </header>
            <main>
                scoreboard here...
            </main>
        </div>
    )
}

export default App
