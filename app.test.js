jest.mock('axios');

const { expect } = require('@jest/globals');
const axios = require('axios');
const  run  = require('./console');

it(' return mock album data from axios get request', async () => {
  const id = 3;
  const album = {data:[
                  {
              albumId: 3,
              id: 1,
              title: 'accusamus beatae ad facilis cum similique qui sunt',
              url: "https://via.placeholder.com/600/e743b",
              thumbnailUrl: "https://via.placeholder.com/150/e743b"
            },{
              albumId: 3,
              id: 1,
              title: 'accusamus beatae ad facilis cum similique qui sunt',
              url: "https://via.placeholder.com/600/e743b",
              thumbnailUrl: "https://via.placeholder.com/150/e743b"
            }
          
    
            
    
          ]}

  axios.get.mockResolvedValue(album);

  const response = run(3);

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
})