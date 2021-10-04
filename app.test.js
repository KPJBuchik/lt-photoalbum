const start = require('./app');
const axios = require('axios');

jest.mock('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        albumId: 3,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: "https://via.placeholder.com/600/e743b",
        thumbnailUrl: "https://via.placeholder.com/150/e743b"
      },
      {
        albumId: 3,
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        url: "https://via.placeholder.com/600/e743b",
        thumbnailUrl: "https://via.placeholder.com/150/e743b"

      }
    ]
  });

  const idTitle = await start(3);
  expect(idTitle).toEqual('[1] My First Album ');

});
