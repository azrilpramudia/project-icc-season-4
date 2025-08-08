const express = require('express');
const router = express.Router();
const controller = require('./client.controller');

router.get('/', controller.list);
router.get('/:id', controller.detail);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
