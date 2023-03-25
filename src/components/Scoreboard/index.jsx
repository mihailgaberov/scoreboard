import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";
import GameStatus from "../GameStatus";

const Scoreboard = ({ pairScore, status }) => {
    return (
        <section className={classes.scoreboard}>
            <TeamView teamData={pairScore.gameData.homeTeam} />
            <main>
                <Result homeTeamScore={pairScore.gameData.homeTeam.score} awayTeamScore={pairScore.gameData.awayTeam.score} />
                <GameStatus status={status} />
            </main>
            <TeamView teamData={pairScore.gameData.awayTeam} />
        </section>
    );
};

export default Scoreboard;
