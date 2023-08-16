import express from "express";
import * as controller from "../controller/Cuser.js";
const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controller.getSignup);
router.post("/signup", controller.signup);

router.get("/signin", controller.getSignin);
router.post("/signin", controller.signin);

router.post("/profile", controller.viewProfile);
router.post("/profile/edit", controller.editProfile);
// router.patch("/profile/edit", controller.editProfile); 도 가능
router.post("/profile/delete", controller.deleteProfile);
// router.delete("/profile/delete", controller.deleteProfile); 도 가능

export default router;
