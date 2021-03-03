import { Router } from "express"
import { DocumentRouter } from "./routes/documents.js"

export const Api = () => {
	const router = Router()

	router.get("/", (req, res) => {
		res.json(["/univercity-api"]).end()
	})

	router.use("/documents", DocumentRouter())

	return router
}
