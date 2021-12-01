import * as axios from "axios";

export default class Api {
  constructor() {
    this.api_url = process.env.REACT_APP_API_URL;
    this.api_key = process.env.REACT_APP_API_KEY;
  }

  getSeriesList = async (params) => {
    const response = await axios(
        `${this.api_url}/?apikey=${this.api_key}&i=tt3896198&type=series&s=game`
      );
      const data = response.data;
      return data;
  };

  getSeriesDetails = async (params) => {
    const response = await axios(
        `${this.api_url}/?apikey=${this.api_key}&i=${params.imdbID}&type=series`
      );
      const data = response.data;
      return data;
  };

}