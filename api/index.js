import axios from "axios";
import { REACT_APP_RAPID_API_TRAVEL_API } from "@env";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {

    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "-4.509366427761524",
          tr_latitude: tr_lat ? tr_lat : "-4.293241118983426",
          bl_longitude: bl_lng ? bl_lng : "15.17607906837238",
          tr_longitude: tr_lng ? tr_lng : "15.46941015627613",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          'X-RapidAPI-Key': String(REACT_APP_RAPID_API_TRAVEL_API),
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );
    return data;
  } catch (error) {
    console.log(error.message)
    return null;
  }
};