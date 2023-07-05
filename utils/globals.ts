import { Company } from "../interfaces/Company";
import { Person } from "../interfaces/Person";
import { User } from "../interfaces/User";

export const people: Person[] = [
  {
    id: 1,
    name: "John",
    secondName: "Doe",
    surname: "Doe",
    secondSurname: "Doe",
    email: "test@test.com",
    phone: "123",
    companyId: 1,
    additionalNotes: "",
  },
];

export const companies: Company[] = [
  {
    id: 1,
    name: "Test",
    website: "test.com",
    additionalNotes: "",
  },
];

export const validUsers: User[] = [
  {
    username: "test",
    password: "test",
  },
];

let nextPersonId = 2;

let nextCompanyId = 2;

export const getNextPersonId = () => {
  nextPersonId++;
  return nextPersonId - 1;
};

export const getNextCompanyId = () => {
  nextCompanyId++;
  return nextCompanyId - 1;
};
