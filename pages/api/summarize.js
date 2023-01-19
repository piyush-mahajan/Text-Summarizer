import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "POST",
    url: "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "tldrthis.p.rapidapi.com",
      "x-rapidapi-key": "3e12f56198mshf04dc81dbc2142dp1ce2c3jsn07cc45956320",
    },
    data: {
      text: req.body.text,
      min_length: 100,
      max_length: 300,
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}
