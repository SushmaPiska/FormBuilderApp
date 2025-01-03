import express from "express";
import { createForm, getForms, updateForm } from "../controllers/form.controller.js";


const router=express.Router()

router.post('/createForm',createForm)
router.post('/updateForm/:id',updateForm)
router.get('/getForms',getForms)



export default router;