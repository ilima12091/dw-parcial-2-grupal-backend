import { Router } from "express";
import { companies, getNextPersonId, people } from "../utils/globals";
import { Person } from "../interfaces/Person";

const peopleRouter = Router();

peopleRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = people.findIndex((person) => person.id === id);
  if (index !== -1) {
    people.splice(index, 1);
    res.json({ message: "Person deleted" });
  } else {
    res.status(404).json({
      message: "Person not found",
    });
  }
});

peopleRouter.get("/", (req, res) => {
  const { name, surname } = req.query;

  const result = people.filter((person) => {
    if (name && surname)
      return (
        person.name.includes(name as string) || person.surname.includes(surname as string)
      );
    if (name) return person.name.includes(name as string);
    if (surname) return person.surname.includes(surname as string);
    return true;
  });

  res.json(result);
});

peopleRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const person = people.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).json({
      message: "Person not found",
    });
  }
});

peopleRouter.post("/", (req, res) => {
  const {
    name,
    secondName,
    surname,
    secondSurname,
    email,
    phone,
    companyId,
    additionalNotes = "",
  } = req.body;

  if (
    !name ||
    !secondName ||
    !surname ||
    !secondSurname ||
    !email ||
    !phone ||
    !companyId
  ) {
    return res.status(400).json({
      message: "Bad request",
    });
  }

  if (!companies.some((company) => company.id === parseInt(companyId))) {
    return res.status(404).json({
      message: "Company not found",
    });
  }

  const newPerson: Person = {
    id: getNextPersonId(),
    name,
    secondName,
    surname,
    secondSurname,
    email,
    phone,
    companyId: parseInt(companyId),
    additionalNotes,
  };

  people.push(newPerson);

  res.json(newPerson);
});

export default peopleRouter;
