# Football World Cup Scoreboard
A React app simulating a **Live Football World Cup Scoreboard**⚽ that shows matches and scores.

## Tech stack 💾
- React (with Vite)
- Vitest / React Testing Library
- CSS Modules (SASS)

### Screenshots 📸
![Animated](https://github.com/mihailgaberov/scoreboard/blob/main/screenshots/animated.gif)
![Starting games](https://github.com/mihailgaberov/scoreboard/blob/main/screenshots/starting-games.png)
![Running games](https://github.com/mihailgaberov/scoreboard/blob/main/screenshots/running-games.png)
![Finalizing games](https://github.com/mihailgaberov/scoreboard/blob/main/screenshots/finalizing-games.png)
![Desktop View](https://github.com/mihailgaberov/scoreboard/blob/main/screenshots/desktop-view.png)
![iPad View](https://github.com/mihailgaberov/scoreboard/blob/main/screenshots/ipad-view.png)

## Application features: ⚙️
**Live Football World Cup Scoreboard** that shows matches and scores.

The board supports the following operations:

1. Start a game. When a game starts, it should capture (being initial score 0 – 0):
    a. Home team
    b. Away team

2. Finish game. It will remove a match from the scoreboard.

3. Update score. Receiving the pair score; home team score and away team score updates a game score.

4. Get a summary of games by total score. Those games with the same total score will be returned ordered by the most recently added to our system.

✍️ As an example, being the current data in the system:

    a. Mexico - Canada: 0 - 5
    b. Spain - Brazil: 10 – 2
    c. Germany - France: 2 – 2
    d. Uruguay - Italy: 6 – 6
    e. Argentina - Australia: 3 - 1

The summary would provide with the following information:

    1. Uruguay 6 - Italy 6
    2. Spain 10 - Brazil 2
    3. Mexico 0 - Canada 5
    4. Argentina 3 - Australia 1
    5. Germany 2 - France 2

  ### Possible Improvements 🚀
    - Add a clock under the game status, say counting down the seconds, to make it look more like a real-time app
    - Add some animation to when updating the scores to make it easier for the user to spot the change
    - Add some interactivity in general:
        - Clicking on each game leading to a details pane with the match details
        - Option for selecting favourite team
    - Add another page/tab where the history summary of the past games can be read

### Demo 📺
:star: [https://scoreboard-mihailgaberov.vercel.app/](https://scoreboard-mihailgaberov.vercel.app/) :star:

### Running The App locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install).
3. From the project folder, execute the following commands:

To install dependencies:
```shell
  yarn install
```
To run the client app:

```shell
  yarn dev
```
To run the tests:

```shell
  yarn test
```

MIT License

Copyright (c) 2018-2023 Mihail Gaberov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

