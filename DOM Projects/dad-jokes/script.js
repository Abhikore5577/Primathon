// let jokeE1=document.getElementById('joke')
// let jokebtn=document.getElementById('jokebtn')

// jokebtn.addEventListener('click', generateJoke)

// generateJoke();

// async function generateJoke(){
//     const config={headers:{Accept:'application/json',},}

//     const result=await fetch('https://icanhazdadjoke.com', config)

//     const data= await result.json;

//     jokeE1.innerHTML=data.joke;
// }

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}