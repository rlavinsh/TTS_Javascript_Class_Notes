const movies = [
  {
    title: "KGF",
    rating: 9,
  },
  {
    title: "Pushpa",
    rating: 8,
  },
  {
    title: "Bahubali",
    rating: 10,
  },
  {
    title: "Animal",
    rating: 7,
  },
];

let moviesContainer = document.querySelector("#movies");

// console.log(moviesContainer);

movies.forEach((movie) => {
  // create card
  const card = document.createElement("div");

  card.innerHTML = `
    <h2>${movie.title}</h2>
    <p>Rating: ${movie.rating}</p>
    `;

  moviesContainer.append(card);
});

// creating button

const loadBtn = document.createElement("button");

loadBtn.innerText = "Load More Movies";

moviesContainer.append(loadBtn);

// create heading

const heading = document.createElement("h2")

heading.innerText = "Trending Movies"

moviesContainer.prepend(heading)

// creating one line

const line = document.createElement("hr")

moviesContainer.insertBefore(line,loadBtn)

// console.log(loadBtn);
