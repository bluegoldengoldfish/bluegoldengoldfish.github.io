var PrismicDOM = require('prismic-dom');
const Prismic = require('@prismicio/client');

var apiEndpoint = "https://soundays.cdn.prismic.io/api/v2";
 
Prismic.client(apiEndpoint, { req: req }).then(function(api) {
  return api.query(""); // An empty query will return all the documents
}).then(function(response) {
  console.log("Documents: ", response.results);
}, function(err) {
  console.log("Something went wrong: ", err);
});

// Link Resolver
function linkResolver(doc) {
  
    // Define the url depending on the document type
    if (doc.type === 'page') {
      return '/page/' + doc.uid;
    } else if (doc.type === 'blog_post') {
      return '/blog/' + doc.uid;
    }
    
    // Default to homepage
    return '/';
  }