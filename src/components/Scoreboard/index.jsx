import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";
import GameStatus from "../GameStatus";

const Scoreboard = ({ pairScore, status }) => {
    return (
        <section className={classes.scoreboard}>
            <TeamView teamData={pairScore.scoresData.homeTeam} />
            <main>
                <Result homeTeamScore={pairScore.scoresData.homeTeam.score} awayTeamScore={pairScore.scoresData.awayTeam.score} />
                <GameStatus status={status} />
            </main>
            <TeamView teamData={pairScore.scoresData.awayTeam} />
        </section>
    );
};

export default Scoreboard;
