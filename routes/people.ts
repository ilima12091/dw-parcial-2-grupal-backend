import { Router } from "express";
import { people } from "../utils/globals";

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

export default peopleRouter;
