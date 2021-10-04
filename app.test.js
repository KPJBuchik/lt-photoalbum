// const start = require('./app');
// const axios = require('axios');

// jest.mock('axios');

// it('returns id and title of image', async () => {
//   axios.get.mockResolvedValue({
//     data: [
//       {
//         albumId: 3,
//         id: 1,
//         title: 'accusamus beatae ad facilis cum similique qui sunt',
//         url: "https://via.placeholder.com/600/e743b",
//         thumbnailUrl: "https://via.placeholder.com/150/e743b"
//       },
//       {
//         albumId: 3,
//         id: 2,
//         title: 'reprehenderit est deserunt velit ipsam',
//         url: "https://via.placeholder.com/600/e743b",
//         thumbnailUrl: "https://via.placeholder.com/150/e743b"

//       }
//     ]
//   });

//   const idTitle =  start(3);
//   expect(idTitle).toEqual('[1] accusamus beatae ad facilis cum similique qui sunt');

// });

// const axios = require('axios');

// const start = require('./app');

// jest.mock("axios");

// describe("start", () => {
//   describe("when API call is successful", () => {
//     it("should return photo id and titles", async () => {
//       // given
//       const data = [
//         {
//                   albumId: 3,
//                   id: 1,
//                   title: 'accusamus beatae ad facilis cum similique qui sunt',
//                   url: "https://via.placeholder.com/600/e743b",
//                   thumbnailUrl: "https://via.placeholder.com/150/e743b"
//                 },
//                 {
//                   albumId: 3,
//                   id: 2,
//                   title: 'reprehenderit est deserunt velit ipsam',
//                   url: "https://via.placeholder.com/600/e743b",
//                   thumbnailUrl: "https://via.placeholder.com/150/e743b"

//                 }
//       ];
//       axios.get.mockResolvedValueOnce(data);

//       // when
//       const result = await start(3);

//       // then
//       // expect(result).toEqual(data);
//         expect(result).toEqual('[1] accusamus beatae ad facilis cum similique qui sunt');

//     });
//   });

// });



const axios = require('axios');

jest.mock('axios');

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
  axios.get.mockImplementation(() => Promise.resolve(response));
  for (let i = 0; i < response.data.length; i++) {

    console.log("[" + response.data[i].id + "]" + " " + response.data[i].title)

  }

});
