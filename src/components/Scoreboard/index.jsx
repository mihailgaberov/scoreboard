import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";

const Scoreboard = ({ pairScore }) => {
    return (
        <div className={classes.scoreboard}>
            <TeamView teamData={pairScore.homeTeam} />
            <Result homeTeamScore={pairScore.homeTeam.score} awayTeamScore={pairScore.awayTeam.score} />
            <TeamView teamData={pairScore.awayTeam} />
        </div>
    );
};

export default Scoreboard;
