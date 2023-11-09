import express from "express";
import { paginaDeInicio,paginaNosotros,paginaViajes,paginaTestimoniales,paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";
const router = express.Router();

router.get('/',paginaDeInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes',paginaViajes)

router.get('/viaje/:slug',paginaDetalleViaje)

router.get('/testimoniales',paginaTestimoniales)

router.post('/testimoniales',guardarTestimonial)

export default router;
