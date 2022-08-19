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

export const addPetPage: RequestHandler = (req, res, next) => {
    res.render('addPet');
}

export const addPet: RequestHandler = async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/pets');
}

export const editPetPage: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let selectedPet: Pet | null = await Pet.findOne({
        where: { petId }
    })

    if (selectedPet) {
        res.render('editPet', { foundPet: selectedPet });
    }
    else {
        res.status(404).render('error', { message: 'Uh-Oh! Pet was not found!' });
    }
}

export const editPet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let updatedPet: Pet = req.body;

    let [updated] = await Pet.update(updatedPet, {
        where: { petId }
    });

    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
}

export const deletePet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;

    let deleted = await Pet.destroy({
        where: { petId }
    });

    if (deleted) {
        res.redirect('/pets');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find pet' });
    }
}