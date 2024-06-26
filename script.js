
const articles = [
  {
    title: "Beans Porridge",
    content: "A traditional Nigerian dish that is rich in protein and fiber.",
    image: 'images/beans-porridge.webp',
    tag: 'recipes/beans-porridge.html',
    // ingredients:'onion, palm oil, beans, crayfish'
    ingredients:['onions', 'palm oil', 'beans', 'crayfish']
    },
  {
    title: "Yam and Egg Sauce",
    content: "A popular Nigerian dish enjoyed as a breakfast or brunch option.",
    image: "images/yam-and-egg.jpg",
    tag: 'recipes/yam-and-egg.html',
    ingredients:['eggs', 'yam', 'pepper', 'tomato']
  },
  {
    title: "Fried Rice",
    content: "A popular dish in Nigerian cuisine, often served at parties and special occasions.",
    image: "images/fried rice.jpg",
    tag: 'recipes/fried-rice.html',
    ingredients:['soy sauce', 'onions', 'chicken', 'shrimp']
  },
  {
    title: "Bitterleaf Soup",
    content: "A traditional Nigerian soup made with bitter leaves and assorted meats.",
    image: "images/bitterleaf-soup.jpg",
    tag: 'recipes/bitter-leaf.html',
    ingredients:['assorted meats', 'palm oil', 'dried fish', 'uziza']
  },
  {
    title: "Nigerian Beef Stew",
    content: "A staple dish in Nigerian cuisine and is often served as a main course alongside rice, yam, or other starches.",
    image: "images/beef-stew.jpg",
    tag: 'recipes/beef-stew.html',
    ingredients:['thyme', 'curry', 'beef', 'tomatoes']
  },
  {
    title: "Pepper Soup",
    content: "A spicy and flavorful Nigerian soup that is typically enjoyed as a appetizer or main course.",
    image: "images/pepper-soup.jpg",
    tag: 'recipes/pepper-soup.html',
    ingredients:['assorted meats', 'uziza', 'scent leaves', 'atarodo']
  },
  {
    title: "Ogbono Soup",
    content: "A rich and hearty Nigerian soup made with ground ogbono seeds, assorted meats, and vegetables.",
    image: "images/ogbono-soup.jpg",
    tag: 'recipes/ogbono.html',
    ingredients:['crayfish', 'palm oil', 'assorted meats', 'crayfish']
  },
  {
    title: "Native Rice",
    content: "A traditional dish originating from the Niger Delta region of Nigeria.",
    image: "images/native-rice.jpg",
    tag: 'recipes/native-rice.html',
    ingredients:['onions', 'palm oil', 'spinach', 'assorted meats']
  },
  {
    title: "Akara",
    content: "A popular Nigerian street food made from deep-fried bean batter.",
    image: "images/akara.jpg",
    tag: 'recipes/akara.html',
    ingredients:['onions', 'atarodo', 'beans', 'crayfish']
  },
  {
    title: "Moi Moi (Steamed Beans Pudding)",
    content: "A traditional Nigerian dish made from ground beans and typically steamed until firm.",
    image: "images/moi moi.jpg",
    tag: 'recipes/moi-moi.html',
    ingredients:['onions', 'eggs', 'beans', 'crayfish']
  },{
    title: "Meat Pie",
    content: "A beloved snack in Nigeria, often enjoyed on the go or as a delicious appetizer.",
    image: "images/meat-pie.jpeg",
    tag: 'recipes/meat-pie.html',
    ingredients:['carrots', 'flour', 'butter', 'ground beef']
  },{
    title: "Suya",
    content: "A popular West African street food, particularly in Nigeria, where it is enjoyed as a snack or appetizer.",
    image: "images/suya.jpg",
    tag: "recipes/suya.html",
    ingredients:['onions', 'beef', 'tomatoes', 'skewers'] }
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },{
  //   title: "Fried Rice",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  // },
];

const recipeCards = document.getElementById("recipe-container");
const searchVal = document.getElementById("srch-input");

articles.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("recipe-card");
  div.innerHTML = `
    <img src="${item.image}" alt="food" />
    <h2>${item.title}</h2>
    <p>
    ${item.content.substring(0, 100)}
    </p>
    <a href="${item.tag}">View Recipe</a>
  `;
  recipeCards.appendChild(div);
});

searchVal.addEventListener("input", (e) => {
  const value = e.target.value;

  const filteredArticles = articles.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase()) || item.ingredients.includes(value) 
  );

  recipeCards.innerHTML = "";

  filteredArticles.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("recipe-card");
    div.innerHTML = `
      <img src="${item.image}" alt="food" />
      <h2>${item.title}</h2>
      <p>
      ${item.content}
      </p>
      <a href="${item.tag}">View Recipe</a>
    `;
    recipeCards.appendChild(div);
  });
});




// const searchForm = document.querySelector('#search-form');
// const searchButton = document.querySelector('#bttn');

// searchForm.addEventListener('submit', searchArticles);





// function searchArticles(event) {
//     event.preventDefault();
//     const searchInput = document.querySelector('#srch-input');
//     const searchTerm = searchInput.value.toLowerCase();
//     const articles = document.querySelectorAll('.recipe-card');
  
//     articles.forEach((article) => {
//       const articleContent = article.innerText.toLowerCase();
//       if (articleContent.includes(searchTerm)) {
//         article.style.display = 'block';
//       } else {
//         article.style.display = 'none';
//       }
//     })
//   }

 


// function searchArticles(event) {
//   event.preventDefault();
//   const searchInput = document.querySelector('#search-input');
//   const searchTerm = searchInput.value.toLowerCase();
//   const articles = document.querySelectorAll('.article');

//   articles.forEach((article) => {
//     const articleContent = article.innerText.toLowerCase();
//     if (articleContent.includes(searchTerm)) {
//       article.style.display = 'block';
//     } else {
//       article.style.display = 'none';
//     }
//   });
// }
