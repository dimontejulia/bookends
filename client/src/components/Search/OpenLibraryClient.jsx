import { stringify } from "query-string";

const BASE_URL = "http://openlibrary.org";

const get = async (uri, params) => {
  const url = `${BASE_URL}${uri}?${stringify(params)}`;
  console.log(url);
  const response = await fetch(url, {
    cache: "no-cache",
    headers: {
      Accept: "application/json",
    },
  });

  return await response.json();
};

export const findBooks = (title) => get("/search.json", { title });
