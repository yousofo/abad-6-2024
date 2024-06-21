document.addEventListener('DOMContentLoaded', () => {
  const articles = {
      1: "Content of Article 1",
      2: "Content of Article 2",
      3: "Content of Article 3"
  };

  const contentDiv = document.getElementById('article-content');

  function loadArticle() {
      const path = window.location.pathname;
      const pathParts = path.split('/');
      
      if (pathParts[1] === 'articles' && pathParts[2]) {
          const articleId = pathParts[2];
          if (articles[articleId]) {
              contentDiv.innerHTML = `<h2>Article ${articleId}</h2><p>${articles[articleId]}</p>`;
          } else {
              contentDiv.innerHTML = `<p>Article not found</p>`;
          }
      } else {
          contentDiv.innerHTML = '';
      }
  }

  // Handle back/forward navigation
  window.onpopstate = loadArticle;

  // Load the appropriate content when the page is first loaded
  loadArticle();
  
  // Intercept links to handle them with JavaScript
  document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
          event.preventDefault();
          history.pushState(null, '', this.href);
          loadArticle();
      });
  });
});
