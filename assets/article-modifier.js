function markAsRead(articleId) {
  let readArticles = localStorage.getItem('readArticles');
  
  if(readArticles) {
    readArticles = JSON.parse(readArticles);
  } else {
    readArticles = [];
  }

  if(!readArticles.includes(articleId)) {
    readArticles.push(articleId);
  }

  localStorage.setItem('readArticles', JSON.stringify(readArticles));
}


alert("Hello")
console.log("Watii");