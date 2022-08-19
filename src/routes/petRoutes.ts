import { Router } from "express";
import { addPet, addPetPage, allPets, deletePet, editPet, editPetPage, onePet } from "../controllers/petController";

const router = Router();

router.get('/', allPets);

router.get('/add', addPetPage);

router.post('/add', addPet);

router.get('/edit/:petId', editPetPage);

router.post('/edit/:petId', editPet);

router.post('/delete/:coffeeId', deletePet);

router.get('/:petId', onePet);

export default router;