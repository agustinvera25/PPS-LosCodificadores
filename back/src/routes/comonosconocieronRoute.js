const express = require('express');
const router = express.Router();
const comonosconocieronController = require('../controllers/comonosconocieronController');

router.get('/comonosconocieron', comonosconocieronController.getComonosconocieron);
router.get('/comonosconocieron/:id', comonosconocieronController.getComonosconocieronById);
router.post('/comonosconocieron', comonosconocieronController.createComonosconocieron);
router.put('/comonosconocieron/:id', comonosconocieronController.updateComonosconocieron);
router.delete('/comonosconocieron/:id', comonosconocieronController.deleteComonosconocieron);

module.exports = router;
