// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) { 
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.splice(0,0,"Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.splice(2,1);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.splice(0,1);
  return kittens;
}
