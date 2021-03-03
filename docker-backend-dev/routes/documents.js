import { Router } from "express"
import { DocumentController } from "../controllers/documents.js"

export const DocumentRouter = () => {
	const router = Router()
	const documentController = DocumentController()

	router.get("/", documentController.searchDocuments)
    router.post("/", documentController.saveDocument)
	router.get("/:id", documentController.getDocument)
    router.delete("/:id", documentController.deleteDocument)
	router.get("/:id/meta", documentController.getDocumentMetadata)

	return router
}