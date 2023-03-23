import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView/index.jsx";

const Scoreboard = ({ pairScore }) => {
    return (
        <div className={classes.scoreboard}>
            <TeamView teamData={pairScore.homeTeam} />
            <div>{pairScore.homeTeam.score} - {pairScore.awayTeam.score}</div>
            <TeamView teamData={pairScore.awayTeam} />
        </div>
    );
};

export default Scoreboard;
