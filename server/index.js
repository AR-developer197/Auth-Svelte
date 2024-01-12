import express from "express"
import {session} from "./router/session.routing.js"
const app = express()

app.use("/session", session)

app.listen(3000, () => {
    console.log('Now listening in port 3000!')
})