import mongoose from 'mongoose';

const endpointSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Owner is required'],
      index: true,
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, 'Username is required'],
    },
    path: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, 'Path is required'],
    },
    method: {
      type: String,
      enum: {
        values: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        message: '{VALUE} is not a valid HTTP method',
      },
      default: 'GET',
    },
    statusCode: {
      type: Number,
      default: 200,
      min: [100, 'Status code must be at least 100'],
      max: [599, 'Status code cannot exceed 599'],
    },
    responseBody: {
      type: String,
      required: [true, 'Response body is required'],
      validate: {
        validator: function (value) {
          try {
            JSON.parse(value);
            return true;
          } catch {
            return false;
          }
        },
        message: 'responseBody must be a valid JSON string',
      },
    },
    delayMs: {
      type: Number,
      default: 0,
      min: [0, 'Delay cannot be negative'],
      max: [10000, 'Delay cannot exceed 10000ms'],
    },
    failureRate: {
      type: Number,
      default: 0,
      min: [0, 'Failure rate cannot be negative'],
      max: [100, 'Failure rate cannot exceed 100%'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

endpointSchema.index({ username: 1, path: 1, method: 1 }, { unique: true });

const Endpoint = mongoose.model('Endpoint', endpointSchema);

export default Endpoint;
