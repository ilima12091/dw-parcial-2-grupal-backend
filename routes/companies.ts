import { Router } from "express";
import { companies, people } from "../utils/globals";

const companiesRouter = Router();

companiesRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = companies.findIndex(
    (company) => company.id === id && !people.some((person) => person.id === company.id)
  );
  if (index !== -1) {
    companies.splice(index, 1);
    res.json({ message: "Company deleted" });
  } else {
    res.status(404).json({
      message: "Company not found or cannot be deleted because it has people associated",
    });
  }
});

companiesRouter.get("/", (req, res) => {
  res.json(companies);
});

companiesRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const company = companies.find((company) => company.id === id);

  if (company) {
    res.json(company);
  } else {
    res.status(404).json({
      message: "Company not found",
    });
  }
});

export default companiesRouter;
