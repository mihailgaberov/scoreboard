import classes from "./scoreboard.module.scss";
const Scoreboard = ({pairScore}) => {
    return (
        <div className={classes.scoreboard}>
          <div>
              <img src={`https://flagcdn.com/${pairScore.homeTeam.countryCode}.svg`} width="50" alt={`${pairScore.homeTeam.name}`} />
              <span>{pairScore.homeTeam.name}</span>
          </div>
            <div>{pairScore.homeTeam.score} - {pairScore.awayTeam.score}</div>
            <div>
                <img src={`https://flagcdn.com/${pairScore.awayTeam.countryCode}.svg`} width="50" alt={`${pairScore.awayTeam.name}`} />
                <span>{pairScore.awayTeam.name}</span>
            </div>
        </div>
    );
};

export default Scoreboard;
