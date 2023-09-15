import { People } from "../protocols/people.protocols";
import { peopleSchema } from "../schemas/people.schemas";
import { NextFunction, Request, Response } from "express";

export function validatePeople(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const People = req.body as People;
	const validation = peopleSchema.validate(People, {
		abortEarly: false,
	});

	if (validation.error) {
		const error = {
			Type: "Unprocessable Entity",
			Message: validation.error.details
				.map((detail) => detail.message)
				.join(", "),
		};
		throw error;
	}

	next();
}
