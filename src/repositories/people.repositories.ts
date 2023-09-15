import { db } from "../database/database.connection";
import { Count, People, PeopleDB } from "../protocols/people.protocols";

function insert(people: People) {
	return db.query(
		`INSERT INTO people ("firstName", "lastName") VALUES ($1, $2);`,
		[people.firstName, people.lastName]
	);
}

function getById(id: number) {
	return db.query<PeopleDB>(`SELECT * FROM people WHERE people.id = $1;`, [id]);
}

function getCount() {
	return db.query<Count>(`SELECT COUNT(*) FROM people;`);
}

export const peoplesRepositories = { insert, getById, getCount };
