import { useReducer, useState } from "react";

import classes from "./scoreboards-grid.module.scss";
import Scoreboard from "../Scoreboard";
import useInterval from "../../hooks/useInterval";
import MessageBoard from "../MessageBoard";
import ScoresReducer, { actionTypes, initialState } from "./ScoresReducer";
import useRandomInterval from "../../hooks/useRandomInterval";
import { areAllGamesStarted, getRandomInt } from "../../utils";


const TIME_BEFORE_GAMES_START = 3; // seconds

const ScoreboardsGrid = () => {
    const [timeElapsed, setTimeElapsed] = useState(TIME_BEFORE_GAMES_START);
    const [state, dispatch] = useReducer(ScoresReducer, initialState);

    // Initial countdown time interval
    useInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed - 1);

        if (timeElapsed === 0) {
            setTimeElapsed(timeElapsed); // stop the timer
        }
    }, 1000);

    // Start games in random moment of time
    const delay = [3000, 4000];
    const minGameId = 0;
    const maxGameId = state.games.length - 1;
    const cancelStartGameInterval = useRandomInterval(() => {
        dispatch({ type: actionTypes.START_GAME, data: { gameId: getRandomInt(minGameId, maxGameId) } });
    }, ...delay);

    /*const initFinalizingGames = () => {
        cancelUpdateScoreInterval();

        const finishGameDelay = [1000, 8000];
        const cancelFinishGamesInterval = useRandomInterval(() => {
            dispatch({ type: actionTypes.FINISH_GAME, data: { gameId: getRandomInt(1, state.games.length) } });
        }, ...finishGameDelay);
    }*/

    // Start game score updates
    const updateScoreDelay = [3000, 8000];
    const cancelUpdateScoreInterval = useRandomInterval(() => {
        dispatch({
            type: actionTypes.UPDATE_SCORE,
            data: { gameId: getRandomInt(minGameId, maxGameId), teamId: getRandomInt(1, 2) }
        });
    }, ...updateScoreDelay);

    if (areAllGamesStarted(state.games)) {
        cancelStartGameInterval();
    }

    // Start a timeout for when to finish the games
    /* useTimeout(() => {
         cancelUpdateScoreInterval();
     }, PLAYING_TIME);*/

    /* const finishGameDelay = [FINISH_GAMES_MIN_DELAY, FINISH_GAMES_MAX_DELAY];
     const cancelFinishGamesInterval = useRandomInterval(() => {
         dispatch({ type: actionTypes.FINISH_GAME, data: { gameId: getRandomInt(1, state.games.length) } });
     }, ...finishGameDelay);*/

    const getGameStatus = (isGameStarted) => isGameStarted ? 'Started' : '';

    return (
        <>
            {timeElapsed === 0 ?
                <>
                    <MessageBoard message={'Current Games'}/>
                    <div className={classes.grid}>
                        {state.games?.map(pairScore => (
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
