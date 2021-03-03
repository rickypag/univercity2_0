import { Server } from "./server.js"

const main = async () => {
	const server = Server()
	await server.start()

	const shutdown = async () => {
		console.log("\nshutdown...")
		await server.close()
	}
	process.once("SIGINT", shutdown)
}

main()
