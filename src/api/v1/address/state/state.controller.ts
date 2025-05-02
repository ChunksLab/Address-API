import { State } from "./state.model";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const getAllStates = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const states = await State.find();
        res.status(200).json(states);
    }
);

const getStateById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const state = await State.findOne({ id: req.params.id });
        if (!state) {
            res.status(404).json({ message: "State not found" });
            return;
        }
        res.status(200).json(state);
    }
);

const getStateByName = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const state = await State.findOne({ name: req.params.name });
        if (!state) {
            res.status(404).json({ message: "State not found" });
            return;
        }
        res.status(200).json(state);
    }
);

const getStatesByCountryId = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const states = await State.find({ country_id: req.params.country_id });
        if (!states) {
            res.status(404).json({ message: "State not found" });
            return;
        }
        res.status(200).json(states);
    }
);

const getStatesByCountryCode = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const states = await State.find({ country_code: req.params.country_code });
        if (!states) {
            res.status(404).json({ message: "State not found" });
            return;
        }
        res.status(200).json(states);
    }
);

const getStatesByCountryName = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const states = await State.find({ country_name: req.params.country_name });
        if (!states) {
            res.status(404).json({ message: "State not found" });
            return;
        }
        res.status(200).json(states);
    }
);

export {
    getAllStates,
    getStateById,
    getStateByName,
    getStatesByCountryId,
    getStatesByCountryCode,
    getStatesByCountryName,
};