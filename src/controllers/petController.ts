import { RequestHandler } from "express";
import { Pet } from "../models/pet";

export const defaultPets: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const allPets: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('allPets', { petList });
}

export const onePet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let selectedPet: Pet | null = await Pet.findByPk(petId);

    if (selectedPet) {
        res.render('petDetail', { foundPet: selectedPet });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found!' });
    }
}
