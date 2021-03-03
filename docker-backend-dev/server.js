import express from "express"
import * as http from "http"
import morgan from "morgan"
import * as bodyParser from "body-parser"
import cors from "cors"
import { Api } from "./Api.js"

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

export const Server = () => {
	const app = express()
	app.use(cors())
	app.use(morgan("dev"))
	//app.use(bodyParser.json())
	//app.use(bodyParser.urlencoded({ extended: true }))
	app.disable("x-powered-by")

	app.use("/api", Api())

	const server = http.createServer(app)

	const start = () => {
		return new Promise((resolve) => {
			server.listen(PORT, () => {
                console.log(`Running on http://${HOST}:${PORT}`);
				resolve()
			})
		})
	}

	const close = async () => {
		return new Promise((resolve, reject) => {
			server.close((error) => {
				if (error) {
					return reject(error)
				}
				resolve()
			})
		})
	}

	return {
		start,
		close,
	}
}
