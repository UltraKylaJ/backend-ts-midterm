import { Router } from "express";
import { allPets } from "../controllers/petController";

const router = Router();

router.get('/', allPets);

// 

export default router;