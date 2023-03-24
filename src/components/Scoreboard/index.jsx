import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";
import GameStatus from "../GameStatus";

const Scoreboard = ({ pairScore, status }) => {
    return (
        <div className={classes.scoreboard}>
            <TeamView teamData={pairScore.gameData.homeTeam} />
            <article>
                <Result homeTeamScore={pairScore.gameData.homeTeam.score} awayTeamScore={pairScore.gameData.awayTeam.score} />
                <GameStatus status={status} />
            </article>
            <TeamView teamData={pairScore.gameData.awayTeam} />
        </div>
    );
};

export default Scoreboard;
