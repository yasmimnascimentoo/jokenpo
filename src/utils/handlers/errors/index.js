const { json } = require("express/lib/response");

const validsValues = ["pedra", "papel", "tesoura"];

const validateURL = (params) => {
  response = {};

  if (Object.is(params, "/")) {
    response.status = 400;
    response.message = "You need to pass a valid path in the url.";
    response.example = "http://localhost:8080/jokenpo/?plays=value";
  }
  if (!params) {
    response.status = 400;
    response.message = "You need to pass a value in the url.";
    response.example = "pedra, papel or tesoura";
  }
  if (params.length > 1 && !validsValues.includes(params)) {
    response.status = 400;
    response.message = "You need to pass a valid value in the url.";
    response.example = "pedra, papel or tesoura";
  }
  if (params.length > 1 && validsValues.includes(params)) {
    response.status = 200;
    response.message = "Sucess params!";
    response.example = "pedra, papel or tesoura";
  }
  if (Object.is(params, "play2")) {
    response.status = 400;
    response.message = "You need to pass a valid path in the url for play2.";
    response.example = "http://localhost:8080/jokenpo/?plays=value&play2=value";
  }

  return response;
};

const validateParam = (params) => {
  response = {};

  if (params.length > 1 && validsValues.includes(params)) {
    response.status = 200;
    response.message = "Parameter valid, success!";
  }
  if (!params) {
    response.status = 400;
    response.message = "Parameter not defined.";
  }

  if (params.length > 1 && !validsValues.includes(params)) {
    response.status = 400;
    response.message = "Invalid parameter.";
  }

  if (params === "pedra&play2=pedra") {
    response.status = 200;
    response.message = "Parameter valid, success!";
  }

  if (params === "papel&play2=papel") {
    response.status = 200;
    response.message = "Parameter valid, success!";
  }

  if (params === "tesoura&play2=tesoura") {
    response.status = 200;
    response.message = "Parameter valid, success!";
  }

  return response;
};

module.exports = { validateParam, validateURL };
