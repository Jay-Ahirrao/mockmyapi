import express from 'express';
import MockController from '../controllers/mock.controller.js';

const router = express.Router();

router.all('/:username/*mockPath', MockController.serveMockEndpoint);

export default router;