const controller = require ("./controller.js")
const User = require("./models/user.js")
// const {expect, jest, test} = require('@jest/globals');
jest.mock("./models/user.js")
const mockedUser= jest.mocked(User);

describe ("the controller should call the register function ", () => {
    it("should pass the username and password ", async () => {
        const username = "test username";
        const password = "test password";
        mockedUser.register = jest.fn();
        controller({body:{username, password}});
        firstCallArguments = (mockedUser.register.mock.calls[0]);
        expect(firstCallArguments[0]).toHaveProperty("username");
        });
    });