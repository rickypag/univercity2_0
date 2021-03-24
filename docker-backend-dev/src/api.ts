import { Router, Request, Response } from "express"
import { IConfig } from "./config"
import { DocumentRouter } from "./routes/documents"

export const Api = (config: IConfig) => {
	const router = Router()
	
	router.get("/", (req: Request, res: Response) => {
		return res.json(["/univercity"]).end()
	})

	router.use("/documents", DocumentRouter(config))

	return router
}
