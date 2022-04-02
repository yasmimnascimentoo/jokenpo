module.exports = (app) => {
  const plays = ["pedra", "papel", "tesoura"];

  const playerBot = () => {
    const aleatory = parseInt(Math.random() * 3);
    return plays[aleatory];
  };

  const gameLogic = {
    pedra: {
      pedra: "tied",
      papel: "second",
      tesoura: "first",
    },
    tesoura: {
      pedra: "second",
      papel: "first",
      tesoura: "tied",
    },
    papel: {
      pedra: "first",
      papel: "tied",
      tesoura: "second",
    },
  };

  const winner = (firstOption, secondOption, modeChoice) => {
    const result = gameLogic[firstOption][secondOption];
    if (modeChoice === "Bot") {
      return result === "first"
        ? "The Player Won"
        : result === "second"
        ? "The Bot Won"
        : "The Game Tied";
    }
    return result === "first"
      ? "The Player 1 Won"
      : result === "second"
      ? "The Player 2 Won"
      : "The Game Tied";
  };

  const validateOption = (play1, play2, res) => {
    const botOption = playerBot();

    if (play2) {
      res.status(200).send({
        message: {
          playerOne: play1,
          playerTwo: play2,
          champion: winner(play1, play2, "Player 2"),
        },
      });
    }
    if (!plays.includes(play1)) {
      res.status(400).send({
        message: "Bad Request",
      });
    }
    if (plays.includes(play1) && !play2) {
      res.status(200).send({
        message: {
          playerOption: play1,
          botOption: botOption,
          champion: winner(play1, botOption, "Bot"),
        },
      });
    }
  };

  const service = {};

  service.jokenpoGame = (req, res) => {
    const { plays: player1, play2: player2 } = req.query;
    return validateOption(player1, player2, res);
  };

  return service;
};
