
let categories = document.querySelectorAll('.nav-a-link');
console.log(categories[0].innerHTML);
console.log(categories);

console.log(categories.length);

for (let i = 0; i < categories.length; i++) {
  // console.log(categories[i].innerHTML);
  categories[i].addEventListener('click', () => {
    console.log(categories[i].innerHTML);
  })
};


