// Promises in JavaScript

// const url = "http://api.icndb.com/jokes/random"
// const jokes = document.querySelector("#joke")
// const loadJokes = document.querySelector("#load")

// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch(url, setHeader).then((res) => res.json()).then((data) => {
//         jokes.innerHTML = data.value.joke
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";
const jokes = document.querySelector("#joke");
const loadJokes = document.querySelector("#load");
const cat = document.querySelector("#cat")

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch(url, setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
    cat.innerHTML = data.category
  } catch (error) {
      console.log(error)
  }
};

loadJokes.addEventListener("click", generateJokes);
