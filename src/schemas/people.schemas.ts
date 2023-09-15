import { People } from "../protocols/people.protocols";
import Joi from "joi";

export const peopleSchema = Joi.object<People>({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
});
