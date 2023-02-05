type Movie = {
  id: number;
  title: string;
};

type Vote = {
  id: number;
  movies: Movie[];
};

export async function getPolls(): Promise<Array<Vote>> {
  return [
    {
      id: 1,
      movies: [
        {
          id: 1,
          title: "Inglorious Basterds",
        },
        {
          id: 2,
          title: "Shrek 2",
        },
        {
          id: 3,
          title: "Chef",
        },
        {
          id: 4,
          title: "Avengers: Infinity War",
        },
      ],
    },
  ];
}
