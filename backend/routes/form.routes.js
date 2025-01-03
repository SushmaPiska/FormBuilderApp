import express from "express";
import { createForm, deleteForm, getFormById, getForms, updateForm } from "../controllers/form.controller.js";


const router=express.Router()

router.post('/createForm',createForm)
router.post('/updateForm/:id',updateForm)
router.get('/getFormById/:id',getFormById)
router.get('/getForms',getForms)
router.delete('/deleteForm/:id',deleteForm)



export default router;