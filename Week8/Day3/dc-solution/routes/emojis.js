import express from "express"

import { getRandomOptions } from "../controllers/emojis.js"

const router = express.Router();

router.get('/play', getRandomOptions);

export default router;
