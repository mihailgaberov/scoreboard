import { useReducer, useState } from "react";

import classes from "./scoreboards-grid.module.scss";
import Scoreboard from "../Scoreboard";
import useInterval from "../../hooks/useInterval";
import MessageBoard from "../MessageBoard";
import ScoresReducer, { actionTypes, initialState } from "./ScoresReducer";
import useTimeout from "../../hooks/useTimeout";



const TIME_BEFORE_GAMES_START = 3; // sec
const ScoreboardsGrid = () => {
    const [timeElapsed, setTimeElapsed] = useState(TIME_BEFORE_GAMES_START);
    const [state, dispatch] = useReducer(ScoresReducer, initialState);

    useInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed - 1);

        if (timeElapsed === 0) {
            setTimeElapsed(timeElapsed); // stop the timer
        }
    }, 1000);

    useTimeout(() => dispatch({type: actionTypes.START_GAME}), 5);

    return (
        <>
            {timeElapsed === 0 ?
                <>
                    <MessageBoard message={'Current Games'}/>
                    <div className={classes.grid}>
                        {state.scores?.map(pairScore => (<Scoreboard key={crypto.randomUUID()} pairScore={pairScore}/>))}
                    </div>
                </> :
                <MessageBoard message={`Games are about to start in ${timeElapsed} seconds.`}/>
            }
        </>
    );
};

export default ScoreboardsGrid;
