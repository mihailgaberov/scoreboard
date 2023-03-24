import { useState } from "react";

import classes from "./scoreboards-grid.module.scss";
import Scoreboard from "../Scoreboard";
import useInterval from "../../hooks/useInterval";
import MessageBoard from "../MessageBoard";

const scores = [
    {
        homeTeam: {
            name: 'Mexico',
            countryCode: 'mx',
            score: 0
        },
        awayTeam: {
            name: 'Canada',
            countryCode: 'ca',
            score: 5
        }
    },
    {
        homeTeam: {
            name: 'Spain',
            countryCode: 'es',
            score: 10
        },
        awayTeam: {
            name: 'Brazil',
            countryCode: 'br',
            score: 2
        }
    },
    {
        homeTeam: {
            name: 'Germany',
            countryCode: 'de',
            score: 2
        },
        awayTeam: {
            name: 'France',
            countryCode: 'fr',
            score: 2
        }
    },
    {
        homeTeam: {
            name: 'Uruguay',
            countryCode: 'uy',
            score: 6
        },
        awayTeam: {
            name: 'Italy',
            countryCode: 'it',
            score: 6
        }
    },
    {
        homeTeam: {
            name: 'Argentina',
            countryCode: 'ar',
            score: 3
        },
        awayTeam: {
            name: 'Australia',
            countryCode: 'au',
            score: 1
        }
    },
];

const TIME_BEFORE_GAMES_START = 3; // sec
const ScoreboardsGrid = () => {
    const [timeElapsed, setTimeElapsed] = useState(TIME_BEFORE_GAMES_START);

    useInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed - 1);

        if (timeElapsed === 0) {
            setTimeElapsed(timeElapsed); // stop the timer
        }
    }, 1000);

    return (
        <>
            {timeElapsed === 0 ?
                <>
                    <MessageBoard message={'Current Games'}/>
                    <div className={classes.grid}>
                        {scores?.map(pairScore => (<Scoreboard key={crypto.randomUUID()} pairScore={pairScore}/>))}
                    </div>
                </> :
                <MessageBoard message={`Games are about to start in ${timeElapsed} seconds.`}/>
            }
        </>
    );
};

export default ScoreboardsGrid;
