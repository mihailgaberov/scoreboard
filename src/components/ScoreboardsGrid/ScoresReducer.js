const teamsMap = {
    1: 'homeTeam',
    2: 'awayTeam'
}

export const initialState = {
    team: null,
    gameId: null,
    finishedGames: [],
    games: [
        {
            gameId: 1,
            startedGame: false,
            scoresData: {
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
            }
        },
        {
            gameId: 2,
            startedGame: false,
            scoresData: {
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
            }
        },
        {
            gameId: 3,
            startedGame: false,
            scoresData: {
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
            }
        },
        {
            gameId: 4,
            startedGame: false,
            scoresData: {
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
            }
        },
        {
            gameId: 5,
            startedGame: false,
            scoresData: {
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
            }
        },
    ]
};

export const actionTypes = {
    START_GAME: 'start',
    UPDATE_SCORE: 'update',
    FINISH_GAME: 'finish'
}

const reducer = (state, action) => {
    const data = action.data;
    const { gameId } = data;

    switch (action.type) {
        case actionTypes.START_GAME:
            console.log(">>> START_GAME: gameId:", gameId);
            return {
                ...state,
                games: state.games.map((game) => game.gameId === gameId ? { ...game, startedGame: true }
                    : game
                )
            }
        case actionTypes.UPDATE_SCORE:
            const { teamId } = data;

            // Don't update the score if the game has not started yer
            const isGameStarted = state.games.find(game => game.gameId === gameId && game.startedGame === true);
            if (!isGameStarted) {
                return state;
            }

            console.log(">>> UPDATE_SCORE: gameId:", gameId, " | team: ", teamsMap[teamId]);

            // Increment the goals value of the team who scored
            const team = teamsMap[teamId];
            const updatedGames = state.games.map(game => {
                if (game.gameId === gameId) {
                    return {
                        ...game,
                        scoresData: {
                            ...game.scoresData,
                            [team]: {
                                ...game.scoresData[team],
                                score: game.scoresData[team].score++
                            }
                        }
                    }
                }
                return game;
            })

            return {
                ...state,
                games: updatedGames
            }
        case actionTypes.FINISH_GAME:

            return {
                ...state,
                finishedGames: state.games.map((game) => game.gameId === gameId ? game : null)
            }
        default:
            throw new Error('Unrecognized action type. Please check ScoresReducer.');
    }
}
export default reducer;
