import httpStatus from "http-status";
import { ErrorType } from "../protocols/error.protocols";
import { NextFunction, Request, Response } from "express";

export default function errorHandler(
	error: ErrorType,
	req: Request,
	res: Response,
	next: NextFunction
) {
	switch (error.Type) {
		case "Unprocessable Entity":
			error.Status = httpStatus.UNPROCESSABLE_ENTITY;
			return res.status(error.Status).send(error);

		default:
			error.Status = httpStatus.INTERNAL_SERVER_ERROR;
			error.Type = "Internal Server Error";
			return res.status(error.Status).send(error);
	}
}
