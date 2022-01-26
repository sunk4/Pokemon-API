const btn = document
  .querySelector("[data-btn]")
  .addEventListener("click", findWinner)

async function findWinner() {
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

  try {
    const res = await fetch(url1)
    const data = await res.json()

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
  } catch (err) {
    console.log(`error ${err}`)
  }

  try {
    const res2 = await fetch(url2)
    const data2 = await res2.json()

    weightPokemon2.push(data2.stats[0].base_stat)
    document.querySelector("[data-name2]").innerText = `Name: ${data2.name}`
    document.querySelector("[data-img2]").src = data2.sprites.front_default
    document.querySelector(
      "[data-ability21]"
    ).innerText = `Ability ${data2.abilities[0].ability.name}`
    document.querySelector(
      "[data-ability22]"
    ).innerText = `Ability ${data2.abilities[1].ability.name}`
    document.querySelector(
      "[data-type2]"
    ).innerText = `Type: ${data2.types[0].type.name}`
    document.querySelector(
      "[data-weight2]"
    ).innerText = `Weight: ${data2.weight} Height: ${data2.height}`
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
  } catch (err) {
    console.log(`error ${err}`)
  }
}
