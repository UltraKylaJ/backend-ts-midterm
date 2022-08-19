import { Router } from "express";
import { addPet, addPetPage, allPets, onePet } from "../controllers/petController";

const router = Router();

router.get('/', allPets);

router.get('/add', addPetPage);

router.post('/add', addPet);



router.get('/:petId', onePet);

export default router;