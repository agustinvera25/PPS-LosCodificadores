const express = require('express');
const router = express.Router();
const hosteriasController = require('../controllers/hosteriasController');

router.get('/hosterias', hosteriasController.getHosterias);
router.get('/hosterias/:id_habitacion', hosteriasController.getHosteriaById);
router.post('/hosterias', hosteriasController.createHosteria);
router.put('/hosterias/:id_habitacion', hosteriasController.updateHosteria);
router.delete('/hosterias/:id_habitacion', hosteriasController.deleteHosteria);

module.exports = router;
