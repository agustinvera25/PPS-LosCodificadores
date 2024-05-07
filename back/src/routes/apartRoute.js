const express = require('express');
const router = express.Router();
const apartController = require('../controllers/apartController');

router.get('/aparts', apartController.getAparts);
router.get('/aparts/:id', apartController.getApartById);
router.post('/aparts', apartController.createApart);
router.put('/aparts/:id', apartController.updateApart);
router.delete('/aparts/:id', apartController.deleteApart);

module.exports = router;
