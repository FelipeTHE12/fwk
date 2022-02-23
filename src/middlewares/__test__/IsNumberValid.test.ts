import { NextFunction, Request, Response } from "express";

let mockRequest: Partial<Request>;
let mockResponse: Partial<Response>;
let nextFunction: NextFunction = jest.fn();

beforeEach(() => {
  mockRequest = {};
  mockResponse = {
    json: jest.fn(),
  };
});
