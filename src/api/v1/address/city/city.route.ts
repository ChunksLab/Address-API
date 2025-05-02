import express from 'express';
import {
  getAllCities,
  getCityById,
  getCityByName,
  getCitiesByStateId,
  getCitiesByStateName,
  getCitiesByCountryId,
  getCitiesByCountryCode,
  getCitiesByCountryName,
} from './city.controller';

const router = express.Router();

// Route to get all cities
router.get('/', getAllCities);
// Route to get city by id
router.get('/:id', getCityById);
// Route to get city by name
router.get('/name/:name', getCityByName);
// Route to get cities by state id
router.get('/state/:state_id', getCitiesByStateId);
// Route to get cities by state name
router.get('/state/name/:state_name', getCitiesByStateName);
// Route to get cities by country id
router.get('/country/:country_id', getCitiesByCountryId);
// Route to get cities by country code
router.get('/country/code/:country_code', getCitiesByCountryCode);
// Route to get cities by country name
router.get('/country/name/:country_name', getCitiesByCountryName);

export default router;