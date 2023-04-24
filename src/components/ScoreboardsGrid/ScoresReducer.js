import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const teamsMap = {
    1: 'homeTeam',
    2: 'awayTeam'
};

const sortGamesByTotalScore = (currentGame, nextGame) => {
    const currentGameTotalScore = currentGame.homeTeam.score + currentGame.awayTeam.score
    const nextGameTotalScore = nextGame.homeTeam.score + nextGame.awayTeam.score
    return nextGameTotalScore - currentGameTotalScore
}

export const initialState = {
    finishedGames: [],
    games: [
        {
            gameId: 0,
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
        },
        {
            gameId: 1,
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
        },
        {
            gameId: 2,
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
        },
        {
            gameId: 3,
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
        },
        {
            gameId: 4,
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
        },
    ]
}
const store = (set) => ({
    ...initialState,
    startGame: (gameId) => set((state) => {
        console.log(">>> START_GAME: gameId:", gameId);

        return ({
            games: state.games.map((game) => game.gameId === gameId ? {
                ...game,
                startedGame: true
            } : game)
        })
    }),
    finishGame: (gameId) => set((state) => {
        console.log(">>> FINISH_GAME: gameId:", gameId);

        return ({
            games: state.games.filter(game => game.gameId !== gameId),
            finishedGames: [
                ...state.finishedGames,
                state.games.find((game) => game.gameId === gameId)
            ].filter(Boolean)
                .sort(sortGamesByTotalScore)
                .map(game => {
                    game.startedGame = false
                    return game
                })
        })
    }),
    updateScore: (teamId, gameId) => set((state) => {
        // Don't update the score if the game has not started yer
        const isGameStarted = state.games.find(game => game.gameId === gameId && game.startedGame === true)
        if (!isGameStarted) {
            return state
        }
        console.log(">>> UPDATE_SCORE: gameId:", gameId, " | team: ", teamsMap[teamId])

        // Increment the goals value of the team who scored
        const team = teamsMap[teamId]
        return {
            games: state.games.map((game) => game.gameId === gameId ?
                {
                    ...game,
                    [team]: {
                        ...game[team],
                        score: game[team].score + 1
                    }
                } :
                game)
        }
    }),
});

export const useScoreboardStore = create(devtools(store));
