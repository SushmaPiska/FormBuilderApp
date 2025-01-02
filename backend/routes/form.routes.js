import express from "express";
import { createForm, getForms } from "../controllers/form.controller.js";


const router=express.Router()

router.post('/createForm',createForm)
router.get('/getForms',getForms)



export default router;