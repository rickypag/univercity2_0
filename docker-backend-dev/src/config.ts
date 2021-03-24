import { Environment } from "./environment"

//Add here necessary environment variables
export interface IConfig {
	server: {
		port: number
	}
}

export const Config = (): IConfig => {
	const env = Environment()
	env.load(process.env.NODE_ENV !== "production", "backend.env")

	return {
		server: {
			port: env.getNumber("PORT"),
		},
	}
}
