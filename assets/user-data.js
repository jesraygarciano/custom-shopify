console.log("USER-DATA JS");

// Products
fetch('/products.json')
.then(response => response.json())
.then(data => {
    console.log(data); // this will log all your products data in the console
    // Here you can loop through the data and display it as you want
    data.products.forEach(product => {
        console.log(product.title);
        // Add your code here to display the product data
    });
})
.catch(err => console.error(err));


// Users/ CUstomers
fetch('/blogs/{blog_id}/articles.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // this will log all your articles data in the console
        // Here you can loop through the data and display it as you want
        data.articles.forEach(article => {
            console.log(article.title);
            // Add your code here to display the article data
        });
    })
    .catch(err => console.error(err));



// const ShopifyData = require('shopify-api-node');

// const shopifydatum = new ShopifyData({
//   shopName: 'eco-pendulum',
//   apiKey: '8c9e4e7d68911b51fe698d7c3c90ba22',
//   password: 'gecrud'
// });

// console.log(shopifydatum);

// shopifydatum.product.list()
//   .then(products => console.log(products))
//   .catch(err => console.error(err));

console.log("USER-DATA JS BOTTOM");
