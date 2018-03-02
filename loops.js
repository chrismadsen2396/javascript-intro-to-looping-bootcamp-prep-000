function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      array = [...array, 'I am 1 strange loop.'];
    } else {
      array = [...array, `I am ${i} strange loops.`];
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    console.log(array);
    array.pop;
  } while (array.length >= -1 && maybeTrue());
  return array;
}