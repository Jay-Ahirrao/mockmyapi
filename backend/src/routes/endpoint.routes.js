import express from 'express';
import EndpointController from '../controllers/endpoint.controller.js';

const router = express.Router();

router.post('/', EndpointController.createEndpoint);
router.get('/:username', EndpointController.getUserEndpoints);
router.delete('/:id', EndpointController.deleteEndpoint);

export default router;
