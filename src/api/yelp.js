import axios from 'axios';

export default axios.create ({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:'Bearer iJQA8bHjXtIFOaMp40GUhfYIcMtXxLADa1wbjQcjCUVFnTmS3dSULAovcfqG3ME-FT_u3wJRtenLwjEkMTB5VRVg1OpBZP2m8rNk8BSlPNtsKMpMmLdvWuW2xpw-XnYx'
  }

});


// API KEY iJQA8bHjXtIFOaMp40GUhfYIcMtXxLADa1wbjQcjCUVFnTmS3dSULAovcfqG3ME-FT_u3wJRtenLwjEkMTB5VRVg1OpBZP2m8rNk8BSlPNtsKMpMmLdvWuW2xpw-XnYx
// CLient ID jrKcQ-wrO4pBVxXHrY2iLA
