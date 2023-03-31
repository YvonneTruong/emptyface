function greet(name) {
  return "Hallo " + name;
}
console.log(greet("Yvonne"));

const arr = [1, 2, 3, 4, 5];
function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

function everysecondElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
everysecondElement(arr);

const paragraph = document.getElementById("paragraph");
paragraph.textContent = "glas";
