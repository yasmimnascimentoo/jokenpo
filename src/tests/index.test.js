"use strict";

const request = require("supertest");
const { validateURL, validateParam } = require("../utils/handlers/errors");
const app = require("../../config/express")();

describe("Validate URL", () => {
  it("final path does not exist in the url", () => {
    const url = "http://localhost:8080/jokenpo/";
    const jsonReceived = validateURL(url.split("jokenpo")[1]);

    expect(jsonReceived.example).toBe("http://localhost:8080/jokenpo/?plays=value");
  });

  it("param does not exist in the url", () => {
    const url = "http://localhost:8080/jokenpo/?plays=";
    const jsonReceived = validateURL(url.split("=")[1]);

    expect(jsonReceived.example).toBe("pedra, papel or tesoura");
  });

  it("param invalid in the url", () => {
    const url = "http://localhost:8080/jokenpo/?plays=qwe123";
    const jsonReceived = validateURL(url.split("=")[1]);

    expect(jsonReceived.message).toBe("You need to pass a valid value in the url.");
  });

  it("param valid in the url for player vs bot", () => {
    const url = "http://localhost:8080/jokenpo/?plays=pedra";
    const jsonReceived = validateURL(url.split("=")[1]);

    expect(jsonReceived.message).toBe("Sucess params!");
  });

  it("param for play with 2 players in the url", () => {
    const url = "http://localhost:8080/jokenpo/?plays=pedra&play2";
    const jsonReceived = validateURL(url.split("&")[1]);

    expect(jsonReceived.example).toBe("http://localhost:8080/jokenpo/?plays=value&play2=value");
  });
});

describe("Validate param", () => {
  it("should get the response 200 because it sent a valid parameter"
  , () => {
    const url = "http://localhost:8080/jokenpo/?plays=pedra";
    const param = url.split("=")[1];
    const { status } = validateParam(param);
    expect(status).toBe(200);
  });

  it('should the response 400 because it receives a empty values'
  , () => {
    const url = "http://localhost:8080/jokenpo/?plays=";
    const param = url.split("=")[1];
    console.log("param", param, !param);
    const { message } = validateParam(param);
    expect(message).toBe("Parameter not defined.");
  });

  it('should the response 400 because it receives an invalid value'
  , () => {
    const url = "http://localhost:8080/jokenpo/?plays=pedro";
    const param = url.split("=")[1];
    const { message } = validateParam(param);
    expect(message).toBe("Invalid parameter.");
  });

  it("should get the response 200 because it sent a valid parameter for player two"
  , () => {
    const url = "http://localhost:8080/jokenpo/?plays=pedra&play2=pedra";
    const param = url.split("?plays=")[1];
    const { message } = validateParam(param);
    expect(message).toBe("Parameter valid, success!");
  });

  it("should get the response 200 because it sent a valid parameter for player two"
  , () => {
    const url = "http://localhost:8080/jokenpo/?plays=papel&play2=papel";
    const param = url.split("?plays=")[1];
    const { message } = validateParam(param);
    expect(message).toBe("Parameter valid, success!");
  });

  it("should get the response 200 because it sent a valid parameter for player two"
  , () => {
    const url = "http://localhost:8080/jokenpo/?plays=tesoura&play2=tesoura";
    const param = url.split("?plays=")[1];
    const { message } = validateParam(param);
    expect(message).toBe("Parameter valid, success!");
  });

});

describe("App server", () => {
  it("should test the game against machine", async () => {
    const res = await request(app).get("/jokenpo/?plays=pedra");
    const { status } = res;
    expect(status).toBe(200);
  });

  it("should test the game when it is player against player", async () => {
    const res = await request(app).get("/jokenpo/?plays=papel&play2=papel");
    const { body } = res;
    expect(body.message.champion).toBe("The Game Tied");
  });

  it("should test the game when it is player against player", async () => {
    const res = await request(app).get("/jokenpo/?plays=paper");
    const { status } = res;
    expect(status).toBe(400);
  });
});
