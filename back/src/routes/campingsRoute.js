const express = require('express');
const router = express.Router();
const campingsController = require('../controllers/campingsController');

router.get('/campings', campingsController.getCampings);
router.get('/campings/:id', campingsController.getCampingById);
router.post('/campings', campingsController.createCamping);
router.put('/campings/:id', campingsController.updateCamping);
router.delete('/campings/:id', campingsController.deleteCamping);

module.exports = router;