import axios from "axios";
import Country from "../models/Country.js";

const fetchAndStoreCountries = async (req, res) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countriesData = response.data;

    const countries = countriesData.map((country) => {
      const countryName = country.name.common;
      let currency = { name: "", symbol: "" };

      if (country.currencies) {
        const currencyData = Object.values(country.currencies)[0];
        if (currencyData) {
          currency = {
            name: currencyData.name || "",
            symbol: currencyData.symbol || "",
          };
        }
      }

      return {
        country_name: countryName,
        currency: currency,
      };
    });

    await Country.insertMany(countries);

    res.json({ message: "Countries fetched and stored successfully" });
  } catch (error) {
    console.error("Error fetching and storing countries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchCountriesFromDB = async (req, res) => {
  try {
    const countries = await Country.find({}, "country_name currency");
    res.json(countries);
  } catch (error) {
    console.error("Error fetching countries from database:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { fetchAndStoreCountries, fetchCountriesFromDB };
