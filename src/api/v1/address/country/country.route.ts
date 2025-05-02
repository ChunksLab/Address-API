import express from 'express';
import { getAllCountries, getCountryById, getCountryByName, getCountryByCode } from './country.controller';

const router = express.Router();

// Route to get all countries
router.get('/', getAllCountries);
// Route to get a country by id
router.get('/:id', getCountryById);
// Route to get a country by name
router.get('/name/:name', getCountryByName);
// Route to get a country by code
router.get('/code/:code', getCountryByCode);

export default router;