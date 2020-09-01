import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
    'Bearer Fp_yffJbWIkgALyigj9fAgVvZSSJ-QJQt0ikN5UbQ4wQgt4JJHN7ooBMfkHDnEuKl3-LkhA-Ho0ebr4jRUnq8v1KykS39iDGX2s5VNavYyLMAMmrv_y-rPwJ3_iUXXYx'
  }
});
