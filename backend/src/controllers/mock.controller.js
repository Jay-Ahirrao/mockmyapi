import Endpoint from '../models/endpoint.model.js';
import ApiError from '../utils/ApiError.js';

class MockController {
  static async serveMockEndpoint(req, res) {
    const { username, mockPath } = req.params;

    // mockPath is an array of path segments, join them with /
    const path = Array.isArray(mockPath) ? `/${mockPath.join('/')}` : `/${mockPath}`;

    const endpoint = await Endpoint.findOne({
      username: username.toLowerCase(),
      path: path.toLowerCase(),
      method: req.method.toUpperCase(),
      isActive: true,
    });

    if (!endpoint) {
      throw new ApiError(404, 'Mock endpoint not found');
    }

    if (endpoint.failureRate > 0) {
      const randomPercentage = Math.random() * 100;
      if (randomPercentage <= endpoint.failureRate) {
        throw new ApiError(500, 'Simulated Server Error');
      }
    }

    let parsedBody;
    try {
      parsedBody = JSON.parse(endpoint.responseBody);
    } catch {
      throw new ApiError(500, 'Invalid JSON in response body');
    }

    if (endpoint.delayMs > 0) {
      setTimeout(() => {
        res.status(endpoint.statusCode).json(parsedBody);
      }, endpoint.delayMs);
    } else {
      res.status(endpoint.statusCode).json(parsedBody);
    }
  }
}

export default MockController;
