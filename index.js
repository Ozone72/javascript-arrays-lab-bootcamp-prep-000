const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']
console.log(`Starting array: ${kittens}`)

function destructivelyAppendKitten(name){
  kittens.push(name)
  console.log(kittens)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  console.log(kittens)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  console.log(kittens)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  console.log(kittens)
  return kittens
}

function appendKitten(name){
  const more_kittens = kittens.push(name)
  console.log(more_kittens)
  return more_kittens
}
