import { Router } from "express";
import { postChangePassword, postLogin, postRegister } from "../controllers/auth.js";
const router = Router();


router.post('/login', [], postLogin);
router.post('/register', [], postRegister);
router.post('/changePassword', [], postChangePassword);

export default router;
