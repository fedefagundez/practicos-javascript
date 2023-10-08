const fibonacci = [1, 1];

for (let i = 2; i < 19; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

document.querySelector("#pMostrar").innerHTML = fibonacci;
