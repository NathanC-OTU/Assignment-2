var express = require('express');
var router = express.Router();

/* Routing */
router.get('/', function(req, res, next) {
  res.render('about', { 
    title: 'Portfolio'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Me'
  });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact'
  });
});

module.exports = router;
