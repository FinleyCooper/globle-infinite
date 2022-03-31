import { Country } from "../lib/country";
import { today } from "./dates";

const countryData: Country[] = require("../data/country_data.json").features;

countryData.sort((a, b) => {
  return a.properties.FLAG[1].localeCompare(b.properties.FLAG[1]);
});

function generateKeyNew(list: any[], day: string) {
  return Math.floor(Math.random()*list.length)
}

const key = generateKeyNew(countryData, today);

export const answerCountry = countryData[key];
export const answerName = answerCountry.properties.NAME;
