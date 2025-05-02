import express from 'express';
import {
  getAllStates,
  getStateById,
  getStateByName,
  getStatesByCountryId,
  getStatesByCountryCode,
  getStatesByCountryName,
} from './state.controller';

const router = express.Router();

// Route to get all states
router.get('/', getAllStates);
// Route to get state by id
router.get('/:id', getStateById);
// Route to get state by name
router.get('/name/:name', getStateByName);
// Route to get states by country id
router.get('/country/:country_id', getStatesByCountryId);
// Route to get states by country code
router.get('/country/code/:country_code', getStatesByCountryCode);
// Route to get states by country name
router.get('/country/name/:country_name', getStatesByCountryName);

export default router;