const Kind = require("../../database/models/Kinds");
const { getKinds } = require("./kindsControllers");

describe("Given the getKinds function", () => {
  describe("When it's called and receives a list of kinds from database", () => {
    test("Then it should call response with status 200 and json with a list of kinds", async () => {
      const listOfKinds = [
        { id: 1, kind: "Grumpy" },
        { id: 2, kind: "Flufy" },
      ];
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      Kind.find = jest.fn().mockResolvedValue(listOfKinds);
      const expectedStatus = 200;

      await getKinds(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ kinds: listOfKinds });
    });
  });
  describe("When it's called and don't receives data from database", () => {
    test("Then it should call next with an error with code 409 and message 'Request error'", async () => {
      const next = jest.fn();
      Kind.find = jest.fn().mockResolvedValue(undefined);
      const err = new Error();
      err.code = 409;
      err.message = "Request error";

      await getKinds(null, null, next);

      expect(next).toHaveBeenCalledWith(err);
    });
  });
});
