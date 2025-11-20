const products = ["Laptop", "Phone", "Headphones", "Monitor"];

const newArray = [...products].pop();

console.log(newArray);

function update(i, newName) {
  const newProducts = [...products];
  newProducts[i] = newName;
  console.log(newProducts);
  return newProducts;
}

update(0, "radio");
