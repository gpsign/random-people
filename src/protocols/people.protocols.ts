type PeopleDB = {
	id: number;
	firstName: string;
	lastName: string;
};

type People = Omit<PeopleDB, "id">;

type Count = {
	count: number
}

export { People, PeopleDB, Count };
