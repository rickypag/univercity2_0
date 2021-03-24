import * as dotenv from "dotenv"

export class EnvironmentError extends Error {
	constructor(message: string) {
		super(message)

		Object.setPrototypeOf(this, EnvironmentError.prototype)
	}
}

export type IEnvironment = ReturnType<typeof Environment>
export const Environment = () => {
	const _requiredEnvs = new Set<string>()

	const load = (loadFromFile: boolean, filename?: string) => {
		if (loadFromFile) {
			if (filename) {
				let err = dotenv.config({
					path: `${process.cwd()}/${filename}`,
				}).error

				if (err) {
					throw new EnvironmentError(`Error while parsing environment variables: \n
                        ${err.message}\n
                        Please check your .env file!`)
				}
			} else {
				throw new EnvironmentError("No filename provided")
			}
		}

		//Check if all required env vars are present
		_requiredEnvs.forEach((reqEnv: string): void => {
			if (!process.env[reqEnv]) {
				throw new EnvironmentError(`Required environment variable ${reqEnv} not found!`)
			}
		})
	}

	type GetString = {
		(name: string, defaultValue: string): string
		(name: string, defaultValue: string | null): string | null
		(name: string, defaultValue?: string): string // throws error if undefined
	}
	const getString: GetString = (name: string, defaultValue?: any): any => {
		if (process.env[name]) {
			return "" + process.env[name]
		} else if (typeof defaultValue === "string") {
			return defaultValue
		} else if (defaultValue === null) {
			return null
		}

		throw new EnvironmentError(`Environment variable ${name} cannot be found and no default value provided`)
	}

	const getNumber = (name: string, defaultValue?: number): number => {
		const defaultValueString = defaultValue === undefined ? undefined : defaultValue.toString()
		const rawValue = getString(name, defaultValueString)
		const numberValue = Number(rawValue)
		if (isNaN(numberValue)) {
			throw new EnvironmentError(`Cannot convert ${rawValue} to number value`)
		}
		return numberValue
	}

	const getBoolean = (name: string, defaultValue?: boolean): boolean => {
		const defaultValueString = defaultValue === false ? "false" : (defaultValue && "true") || undefined
		const rawValue = getString(name, defaultValueString)

		return rawValue === "true"
	}

	const setVarAsRequired = (name: string): void => {
		_requiredEnvs.add(name)
	}

	const hasVariable = (name: string): boolean => {
		return process.env[name] !== undefined
	}

	return { load, getString, getNumber, getBoolean, setVarAsRequired, hasVariable }
}
