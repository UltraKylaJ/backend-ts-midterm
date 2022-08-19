import { Router } from "express";
import { allPets, onePet } from "../controllers/petController";

const router = Router();

router.get('/', allPets);



router.get('/:petId', onePet);

export default router;