import { Response, Request, NextFunction, Router } from "express"
import { IConfig } from "../config"
import { DocumentController } from "../controllers/documentController"

export const DocumentRouter = (config: IConfig) => {
	const router = Router()
	const documentController = DocumentController(config)

    const handleErrorAsync = (func: (req: Request, res: Response, next: NextFunction) => void) => async (req: Request, res: Response, next: NextFunction) => {
        try {
            await func(req, res, next);
        } catch (error) {
            next(error);
        }
    };
    

	/**
     * upload a file
     * By inserting the metadata of the document (title, class, etc..) you can upload a file into the platform 
     *
     * upFile File The file uploaded
     * university String The university where the document was crafted
     * course String define in what course the notes was taken
     * title String If specified will replace the filename as title (optional)
     * no response value expected for this operation
     **/
    router.post('/', handleErrorAsync(documentController.upload_pdf_file))

    /**
     * download the document id
     * download the document form the platform
     *
     * id String id of the document that are going to be downloaded
     * no response value expected for this operation
     **/
    router.get('/:id', handleErrorAsync(documentController.download_pdf_file))

    /**
     * retrive the document metadata
     * retrive the metadata of the document id
     *
     * id String id of the selected document for metadata
     * returns DocumentMetadata
     **/
    router.get('/:id/meta', handleErrorAsync(documentController.metadata_of_pdf_file))

    /**
     * retrive document that are linked to the search query
     * retrive a list of documents
     *
     * search Query  (optional)
     * returns QueryResponse
     **/
    router.get('/', handleErrorAsync(documentController.query_pdf_file))

    /**
     * delete a document
     * remove a document form the platform
     *
     * id String id of the document that are going to be deleted
     * no response value expected for this operation
     **/
    router.delete('/:id', handleErrorAsync(documentController.delete_pdf_file))


	return router
}
