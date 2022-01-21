const btn = document
  .querySelector("[data-btn]")
  .addEventListener("click", findWinner)

function findWinner() {
  const pokemonOne = document
    .querySelector("[data-pokemon1]")
    .value.toLowerCase()
    .trim()
  const pokemonTwo = document
    .querySelector("[data-pokemon2]")
    .value.toLowerCase()
    .trim()
  const url1 = `https://pokeapi.co/api/v2/pokemon/${pokemonOne}/`
  const url2 = `https://pokeapi.co/api/v2/pokemon/${pokemonTwo}/`
  let weightPokemon1 = []
  let weightPokemon2 = []

  fetch(url1)
    .then((res) => res.json())
    .then((data) => {
      weightPokemon1.push(data.stats[0].base_stat)
      document.querySelector("[data-name1]").innerText = `Name: ${data.name}`
      document.querySelector("[data-img1]").src = data.sprites.front_default
      document.querySelector(
        "[data-ability11]"
      ).innerText = `Ability ${data.abilities[0].ability.name}`
      document.querySelector(
        "[data-ability12]"
      ).innerText = `Ability ${data.abilities[1].ability.name}`
      document.querySelector(
        "[data-type1]"
      ).innerText = `Type: ${data.types[0].type.name}`
      document.querySelector(
        "[data-weight1]"
      ).innerText = `Weight: ${data.weight} Height: ${data.height}`
    })
  fetch(url2)
    .then((res) => res.json())
    .then((data) => {
      weightPokemon2.push(data.stats[0].base_stat)
      document.querySelector("[data-name2]").innerText = `Name: ${data.name}`
      document.querySelector("[data-img2]").src = data.sprites.front_default
      document.querySelector(
        "[data-ability21]"
      ).innerText = `Ability ${data.abilities[0].ability.name}`
      document.querySelector(
        "[data-ability22]"
      ).innerText = `Ability ${data.abilities[1].ability.name}`
      document.querySelector(
        "[data-type2]"
      ).innerText = `Type: ${data.types[0].type.name}`
      document.querySelector(
        "[data-weight2]"
      ).innerText = `Weight: ${data.weight} Height: ${data.height}`
      if (weightPokemon1[0] === weightPokemon2[0]) {
        document.querySelector("[data-result]").innerText = `Equal hp`
      } else if (weightPokemon1[0] > weightPokemon2[0]) {
        document.querySelector(
          "[data-result]"
        ).innerText = `First pokemon have more hp`
      } else {
        document.querySelector(
          "[data-result]"
        ).innerText = `First pokemon have less hp`
      }
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}
