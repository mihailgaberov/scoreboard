export const initialState = {
    team: null,
    gameId: null,
    games: [
        {
            gameId: 1,
            gameData: {
                startedGame: false,
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
            gameData: {
                startedGame: false,
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
            gameData: {
                startedGame: false,
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
            gameData: {
                startedGame: false,
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
            gameData: {
                startedGame: false,
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

    console.log('>>> data: ', data)
    console.log('>>> state: ', state.games)

    switch (action.type) {
        case actionTypes.START_GAME:

            return {
                ...state,
                games: state.games.map((game) => game.gameId === data.gameId ? { ...game, startedGame: true }
                    : game
                )
            }
        case actionTypes.UPDATE_SCORE:
            const { whichTeam, whichGame } = data;

            return {
                ...state,
                team: whichTeam,
                gameId: whichGame
            }
        case actionTypes.FINISH_GAME:
            return {
                ...state,
                startGames: false
            }
        default:
            throw new Error('Unrecognized action type. Please check ScoresReducer.');
    }
}
export default reducer;
