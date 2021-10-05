const axios = require('axios');

const BASE_URL = "https://jsonplaceholder.typicode.com/photos?albumId=";

const run = require('./console');

jest.mock("axios");
describe("run", () => {
  describe("when API call is successful", () => {
    it("should return photo album", async () => {
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
      axios.get.mockResolvedValueOnce(album);

      // when
      const result =  run();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}3`);
      expect(result).toEqual(album);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await run(3);

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}3`);
      expect(result).toEqual([]);
    });
  });
});
