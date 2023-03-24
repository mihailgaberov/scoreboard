import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";

const Scoreboard = ({ pairScore }) => {
    return (
        <div className={classes.scoreboard}>
            <TeamView teamData={pairScore.gameData.homeTeam} />
            <Result homeTeamScore={pairScore.gameData.homeTeam.score} awayTeamScore={pairScore.gameData.awayTeam.score} />
            <TeamView teamData={pairScore.gameData.awayTeam} />
        </div>
    );
};

export default Scoreboard;
