import express from "express";
import { signup,login, logout, updateUserName, updateUserEmail, updateUserPassword } from "../controllers/user.controller.js";


const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post("/logout",logout)
router.put('/updateUserName/:id',updateUserName)
router.put('/updateUserEmail/:id',updateUserEmail)
router.put('/updateUserPassword/:id',updateUserPassword)

export default router;