

const getPokemon = async (e) => {
    e.preventDefault()
    let userInput = document.getElementById("user-input")
    console.log(userInput)
    let url = "https://pokeapi.co/api/v2/pokemon/" + userInput.value.toLowerCase()

    const res = await fetch(url)
    const data = await res.json()


    const pokeImage = document.getElementById('image')
    const pokeName = document.getElementById('name')
    const pokeHP = document.getElementById('hp')
    const pokeAttack = document.getElementById('attack')
    const pokeDef = document.getElementById('defense')
    const pokeSpeed = document.getElementById('speed')
    const pokeSpAtt = document.getElementById('sp-att')
    const pokeSpDef = document.getElementById('sp-def')
    const pokeAbility = document.getElementById('ability')

    pokeImage.src = data.sprites.front_default
    pokeName.innerText = data.forms[0].name
    pokeHP.innerText = "HP: " + data.stats[0].base_stat
    pokeAttack.innerText = "Attack: " + data.stats[1].base_stat
    pokeDef.innerText = "Defense: " + data.stats[2].base_stat   
    pokeSpAtt.innerText = "Special Attack: " + data.stats[3].base_stat
    pokeSpDef.innerText = "Special Defense: " + data.stats[4].base_stat
    pokeSpeed.innerText = "Speed: " + data.stats[5].base_stat
    pokeAbility.innerText = "Ability: " + data.abilities[0].ability.name
  
}

