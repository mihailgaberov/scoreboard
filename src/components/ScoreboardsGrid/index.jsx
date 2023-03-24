import { useState } from "react";

import classes from "./scoreboards-grid.module.scss";
import Scoreboard from "../Scoreboard";
import useInterval from "../../hooks/useInterval";
import MessageBoard from "../MessageBoard";

const initialScores = [
    {
        homeTeam: {
            name: 'Mexico',
            countryCode: 'mx',
            score: 0
        },
        awayTeam: {
            name: 'Canada',
            countryCode: 'ca',
            score: 0
        }
    },
    {
        homeTeam: {
            name: 'Spain',
            countryCode: 'es',
            score: 0
        },
        awayTeam: {
            name: 'Brazil',
            countryCode: 'br',
            score: 0
        }
    },
    {
        homeTeam: {
            name: 'Germany',
            countryCode: 'de',
            score: 0
        },
        awayTeam: {
            name: 'France',
            countryCode: 'fr',
            score: 0
        }
    },
    {
        homeTeam: {
            name: 'Uruguay',
            countryCode: 'uy',
            score: 0
        },
        awayTeam: {
            name: 'Italy',
            countryCode: 'it',
            score: 0
        }
    },
    {
        homeTeam: {
            name: 'Argentina',
            countryCode: 'ar',
            score: 0
        },
        awayTeam: {
            name: 'Australia',
            countryCode: 'au',
            score: 0
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
                        {initialScores?.map(pairScore => (<Scoreboard key={crypto.randomUUID()} pairScore={pairScore}/>))}
                    </div>
                </> :
                <MessageBoard message={`Games are about to start in ${timeElapsed} seconds.`}/>
            }
        </>
    );
};

export default ScoreboardsGrid;
