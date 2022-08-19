import { RequestHandler } from "express";
import { Pet } from "../models/pet";

export const defaultPets: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const allPets: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('allPets', { petList });
}
