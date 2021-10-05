const axios = require('axios');
jest.mock('axios');
//tests structure of API

test('should return id and photo title', () => {

  const album = [{
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
  ];

  const response = { data: album };

  axios.get.mockResolvedValue(response);

  for (let i = 0; i < response.data.length; i++) {

     console.log("[" + response.data[i].id + "]" + " " + response.data[i].title)

  }

});

test('should return undefined ', () => {

  const album = [{
    url: "https://via.placeholder.com/600/e743b",
    thumbnailUrl: "https://via.placeholder.com/150/e743b"
  },
  {
    url: "https://via.placeholder.com/600/e743b",
    thumbnailUrl: "https://via.placeholder.com/150/e743b"

  }
  ];

  const response = { data: album };

  axios.get.mockResolvedValue(response);
  for (let i = 0; i < response.data.length; i++) {

     console.log("[" + response.data[i].id + "]" + " " + response.data[i].title)

  }

});

