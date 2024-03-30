
const articles = [
  {
    title: "Beans Porridge",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: 'images/beans-porridge.webp',
  },
  {
    title: "Yam and Egg Sauce",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/yam-and-egg.jpg",
  },
  {
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/fried rice.jpg",
  },
  {
    title: "Bitterleaf Soup",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/bitterleaf-soup.jpg",
  },
  {
    title: "Nigerian Beef Stew",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/beef-stew.jpg",
  },
  {
    title: "Pepper Soup",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/pepper-soup.jpg",
  },
  {
    title: "Ogbono Soup",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/ogbono-soup.jpg",
  },
  {
    title: "Native Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/native-rice.jpg",
  },
  {
    title: "Akara",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/akara.jpg",
  },
  {
    title: "Moi Moi (Steamed Beans Pudding)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "images/moi moi.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },{
    title: "Fried Rice",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://i.ibb.co/s5CkKqc/image-omelette.jpg",
  },
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
    ${item.content}
    </p>
    <a href="recipe.html">View Recipe</a>
  `;
  recipeCards.appendChild(div);
});

searchVal.addEventListener("input", (e) => {
  const value = e.target.value;

  const filteredArticles = articles.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
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
      <a href="recipe.html">View Recipe</a>
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