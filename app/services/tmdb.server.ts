import { baseURL } from "~/utils";

const configURL = baseURL + `configuration?api_key=${process.env.TMDB_API_KEY}`;

export const getConfig = async () => {
  return await fetch(configURL, { method: "GET" }).then((res) => res.json());
};
