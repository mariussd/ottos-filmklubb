import type { Movie } from "./types";

test("lol2k", () => {
  const movie: Movie = {
    id: 1,
    title: "Bleh",
    img: "",
    imgSize: "",
    releaseYear: "1993",
  };

  expect(movie).toBeDefined();
});
