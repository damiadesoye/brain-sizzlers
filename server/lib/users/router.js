import Controller from "./Controller.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const router = require("express").Router();

router.get("/users", Controller.fetchUsers);

export default router;
