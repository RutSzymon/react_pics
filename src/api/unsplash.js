import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Drf_vHRAa6xqpBT4NeWZ_JK0dfUEuz9Cw2iu9B4iF5E",
  },
});
