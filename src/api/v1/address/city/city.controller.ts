import { City } from "./city.model";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const getAllCities = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const cities = await City.find();
        res.status(200).json(cities);
    }
);

const getCityById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const city = await City.findOne({ id: req.params.id });
        if (!city) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        res.status(200).json(city);
    }
);

const getCityByName = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const city = await City.findOne({ name: req.params.name });
        if (!city) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        res.status(200).json(city);
    }
);

const getCitiesByStateId = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const cities = await City.find({ state_id: req.params.state_id });
        if (!cities) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        res.status(200).json(cities);
    }
);

const getCitiesByStateName = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const cities = await City.find({ state_name: req.params.state_name });
        if (!cities) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        res.status(200).json(cities);
    }
);

const getCitiesByCountryId = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const cities = await City.find({ country_id: req.params.country_id });
        if (!cities) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        res.status(200).json(cities);
    }
);

const getCitiesByCountryCode = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const cities = await City.find({ country_code: req.params.country_code });
        if (!cities) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        res.status(200).json(cities);
    }
);

const getCitiesByCountryName = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const cities = await City.find({ country_name: req.params.country_name });
        if (!cities) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        res.status(200).json(cities);
    }
);

export {
    getAllCities,
    getCityById,
    getCityByName,
    getCitiesByStateId,
    getCitiesByStateName,
    getCitiesByCountryId,
    getCitiesByCountryCode,
    getCitiesByCountryName,
};