import express from "express"
import { index } from "../controller/session.js"

const session = express.Router()

session.get('/', index)

export {session}