import express, { Request, Response, NextFunction} from "express"
import cors from "cors"
import { Api } from "./api"
import { IConfig } from "./config"

export const App = (config: IConfig) => {
	const app = express()
	app.use(cors())

	app.use("/api", Api(config))

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500);
    res.render('error.ejs', {
        message: err.message,
        error: err
    });
  });
  


	const start = () => {
		return new Promise<void>((resolve) => {
			app.listen(config.server.port, () => {
				console.log(`server is running on port ${config.server.port}`)
				resolve()
			})
		})
	}

	return {
		start,
	}
}