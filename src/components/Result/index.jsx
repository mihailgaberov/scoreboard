import React from 'react';
import classes from "./result.module.scss";

const Result = ({ homeTeamScore, awayTeamScore }) => {
    return (
        <div className={classes.result}>{homeTeamScore} - {awayTeamScore}</div>
    );
};

export default Result;
