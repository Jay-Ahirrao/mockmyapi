import Endpoint from '../models/endpoint.model.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';

class EndpointController {
  static async createEndpoint(req, res) {
    const {
      owner,
      username,
      path,
      method,
      statusCode,
      responseBody,
      delayMs,
      failureRate,
      isActive,
    } = req.body;

    const existingEndpoint = await Endpoint.findOne({
      username: username.toLowerCase(),
      path: path.toLowerCase(),
      method: method.toUpperCase(),
    });

    if (existingEndpoint) {
      throw new ApiError(409, 'Endpoint already exists with this username, path, and method combination');
    }

    const endpoint = await Endpoint.create({
      owner,
      username: username.toLowerCase(),
      path: path.toLowerCase(),
      method: method.toUpperCase(),
      statusCode: statusCode || 200,
      responseBody,
      delayMs: delayMs || 0,
      failureRate: failureRate || 0,
      isActive: isActive !== undefined ? isActive : true,
    });

    res.status(201).json(ApiResponse.created(endpoint, 'Endpoint created successfully'));
  }

  static async getUserEndpoints(req, res) {
    const { username } = req.params;

    const endpoints = await Endpoint.find({
      username: username.toLowerCase(),
    }).select('-__v').sort({ createdAt: -1 });

    res.status(200).json(ApiResponse.success(endpoints, 'Endpoints retrieved successfully'));
  }

  static async deleteEndpoint(req, res) {
    const { id } = req.params;

    const endpoint = await Endpoint.findByIdAndDelete(id);

    if (!endpoint) {
      throw new ApiError(404, 'Endpoint not found');
    }

    res.status(200).json(ApiResponse.success(null, 'Endpoint deleted successfully'));
  }
}

export default EndpointController;
