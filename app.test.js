const axios = require('axios');

const BASE_URL = "https://jsonplaceholder.typicode.com/photos?albumId=";

const run = require('./console');

jest.mock("axios");
describe("run", () => {
  describe("when get request is successful", () => {
    it("should return endpoint", async () => {
      // dummy data
      const album = [
              {
          albumId: 3,
          id: 1,
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: "https://via.placeholder.com/600/e743b",
          thumbnailUrl: "https://via.placeholder.com/150/e743b"
        }

      ];
      axios.get.mockResolvedValueOnce(`${BASE_URL}`);

      // when
      const result =  run(3);

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}3`);
      expect(result).toEqual(album);
    });
  });

  describe("when get request call fails", () => {
    it("should return empty array", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await run();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}3`);
      expect(result).toEqual([]);
    });
  });
});
