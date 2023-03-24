import { useReducer, useState } from "react";

import classes from "./scoreboards-grid.module.scss";
import Scoreboard from "../Scoreboard";
import useInterval from "../../hooks/useInterval";
import MessageBoard from "../MessageBoard";
import ScoresReducer, { actionTypes, initialState } from "./ScoresReducer";
import useRandomInterval from "../../hooks/useRandomInterval";
import { areAllGamesStarted, getRandomInt } from "../../utils";


const TIME_BEFORE_GAMES_START = 3; // sec
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

    const delay = [1000, 4000];
    const cancel = useRandomInterval(() => {
        dispatch({type: actionTypes.START_GAME, data: { gameId: getRandomInt(1, state.games.length)}});
    }, ...delay);

    if (areAllGamesStarted(state.games)) {
        cancel();
    }

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
                                status={pairScore.startedGame ? 'Started' : ''} />))}
                    </div>
                </> :
                <MessageBoard message={`Games are about to start in ${timeElapsed} seconds.`}/>
            }
        </>
    );
};

export default ScoreboardsGrid;
