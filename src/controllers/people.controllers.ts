import { peoplesServices } from "../services/people.services";
import { People, PeopleDB } from "../protocols/people.protocols";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
	const people = req.body as People;

	await peoplesServices.create(people);

	return res.sendStatus(httpStatus.CREATED);
}

async function read(req: Request, res: Response) {
	const result = await peoplesServices.read();
	return res.status(httpStatus.OK).send(result);
}

export const peopleControllers = { create, read };
