const router = require('express').Router();
const { Project, User } = require('../models');



router.get('/', async (req, res) => {
    try {
      const projectData = await Project.findAll();
  
      const projects = projectData.map((project) =>
        project.get({ plain: true })
      );
  
      res.render('homepage', {
        projects,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get('/project/:id', withAuth, async (req, res) => {
    try {
      const projectData = await Project.findByPk(req.params.id);
  
      const projects = projectData.get({ plain: true });
      res.render('**', { project, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  

  module.exports = router;