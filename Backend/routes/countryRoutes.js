import express from "express";
import {
  fetchAndStoreCountries,
  fetchCountriesFromDB,
} from "../controllers/countryController.js";

import { validateCreateCountry } from "../validators/countryValidator.js";

const router = express.Router();

router.get("/countries/fetch", fetchAndStoreCountries);

router.get("/countries", fetchCountriesFromDB);

export default router;
