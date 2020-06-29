const routes = require('next-routes');

// API:
// routes.add([name], pattern = /name, page = name)
// Arguments:
// name - Route name
// pattern - Route pattern (like express, see path-to-regexp)
// page - Page inside ./pages to be rendered

module.exports = routes()
  .add('home', '/home', 'home')
  .add('login', '/login', 'login')
  .add('register', '/register', 'register')
  .add('accueil', '/accueil', 'accueil')
  .add('cars', '/cars', 'cars')
  .add('carDetails','/carDetails/:id','carDetails')
  .add('loader', '/loader', 'loader');
