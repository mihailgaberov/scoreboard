import { useState } from "react"

import classes from "./scoreboards-grid.module.scss"
import Scoreboard from "../Scoreboard"
import useInterval from "../../hooks/useInterval"
import MessageBoard from "../MessageBoard"
import { useScoreboardStore } from "./ScoresReducer"
import useRandomInterval from "../../hooks/useRandomInterval"
import { areAllGamesFinished, getRandomInt } from "../../utils"
import useTimeout from "../../hooks/useTimeout"


const TIME_BEFORE_GAMES_START = 3; // seconds
const PLAYING_TIME = 90000; // milliseconds
const ScoreboardsGrid = () => {
    const [timeElapsed, setTimeElapsed] = useState(TIME_BEFORE_GAMES_START);
    const [isPlayingTime, setIsPlayingTime] = useState(true);
    const games = useScoreboardStore(state => state.games);
    const finishedGames = useScoreboardStore(state => state.finishedGames);
    const startGame = useScoreboardStore(state => state.startGame);
    const finishGame = useScoreboardStore(state => state.finishGame);
    const updateScore = useScoreboardStore(state => state.updateScore);

    const minGameId = 0;
    const gamesToRender = games.length > 0 ? games : finishedGames;
    const maxGameId = games.length - 1;

    // Initial countdown time interval
    useInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed - 1);

        if (timeElapsed === 0) {
            setTimeElapsed(timeElapsed); // stop the timer
        }
    }, 1000);

    // Start games in random moment of time
    const delay = [3000, 4000];
    const cancelUpdateGameState = useRandomInterval(() => {
        if (isPlayingTime) {
            startGame(getRandomInt(minGameId, maxGameId));
        } else {
            finishGame(getRandomInt(minGameId, games.length - 1));
        }
    }, ...delay);

    // Start game score updates
    const updateScoreDelay = [3000, 8000];
    const cancelUpdateScoreInterval = useRandomInterval(() => {
        updateScore(getRandomInt(1, 2), getRandomInt(minGameId, maxGameId));
    }, ...updateScoreDelay);

    if (areAllGamesFinished(games)) {
        console.log(">>> All games finished. Cancel all updates.");
        cancelUpdateGameState();
        cancelUpdateScoreInterval();
    }

    // Start a timeout for when to finish the games
    useTimeout(() => {
        console.log(">>> Playing time ended. Start finalizing the games.");
        setIsPlayingTime(false);
    }, PLAYING_TIME);

    const getGameStatus = (isGameStarted) => isGameStarted ? 'Playing' : '';

    const getScoreBoardStateMessage = () => areAllGamesFinished(games) ? 'Summary'  : 'Current Games';

    return (
        <>
            {timeElapsed === 0 ?
                <>
                    <MessageBoard message={getScoreBoardStateMessage()}/>
                    <div className={classes.grid}>
                        {gamesToRender?.map(pairScore => (
                            <Scoreboard
                                key={crypto.randomUUID()}
                                pairScore={pairScore}
                                status={getGameStatus(pairScore.startedGame)}/>))}
                    </div>
                </> :
                <MessageBoard message={`Games are about to start in ${timeElapsed} seconds.`}/>
            }
        </>
    );
};

export default ScoreboardsGrid;
