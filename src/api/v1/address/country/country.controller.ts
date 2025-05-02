import { Country } from "./country.model";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const getAllCountries = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const countries = await Country.find();
        res.status(200).json(countries);
    }
);

const getCountryById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const country = await Country.findOne({ id: req.params.id });
        if (!country) {
            res.status(404).json({ message: "Country not found" });
            return;
        }
        res.status(200).json(country);
    }
);

const getCountryByName = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const country = await Country.findOne({ name: req.params.name });
        if (!country) {
            res.status(404).json({ message: "Country not found" });
            return;
        }
        res.status(200).json(country);
    }
);

const getCountryByCode = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const country = await Country.findOne({ iso2: req.params.code });
        if (!country) {
            res.status(404).json({ message: "Country not found" });
            return;
        }
        res.status(200).json(country);
    }
);

export { getAllCountries, getCountryById, getCountryByName, getCountryByCode };