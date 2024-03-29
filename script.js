const searchForm = document.querySelector('#search-form');
const searchButton = document.querySelector('#bttn');

searchForm.addEventListener('submit', searchArticles);

/.trdeswaq






































function searchArticles(event) {
    event.preventDefault();
    const searchInput = document.querySelector('#srch-input');
    const searchTerm = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll('.recipe-card');
  
    articles.forEach((article) => {
      const articleContent = article.innerText.toLowerCase();
      if (articleContent.includes(searchTerm)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    })
  }

 


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