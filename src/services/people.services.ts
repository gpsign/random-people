import { People } from "../protocols/people.protocols";
import { peoplesRepositories } from "../repositories/people.repositories";

async function create(people: People) {
	await peoplesRepositories.insert(people);
	return;
}

async function read() {
	const size = await peoplesRepositories.getCount();
	const random = Math.floor(Math.random() * Number(size.rows[0].count) + 1);

	const result = await peoplesRepositories.getById(random);

	return result.rows[0];
}

export const peoplesServices = { create, read };
