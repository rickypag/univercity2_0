const express = require('express');

const handleErrorAsync = func => async (req, res, next) => {
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
const router = express.Router();
router.post('/documents', handleErrorAsync(documents_controller.upload_pdf_file))

/**
 * download the document id
 * download the document form the platform
 *
 * id String id of the document that are going to be downloaded
 * no response value expected for this operation
 **/
router.get('/documents/:id', handleErrorAsync(documents_controller.download_pdf_file))

/**
 * retrive the document metadata
 * retrive the metadata of the document id
 *
 * id String id of the selected document for metadata
 * returns DocumentMetadata
 **/
router.get('/documents/:id/meta', handleErrorAsync(documents_controller.metadata_of_pdf_file))

/**
 * retrive document that are linked to the search query
 * retrive a list of documents
 *
 * search Query  (optional)
 * returns QueryResponse
 **/
router.get('/documents', handleErrorAsync(documents_controller.query_pdf_file))

/**
 * delete a document
 * remove a document form the platform
 *
 * id String id of the document that are going to be deleted
 * no response value expected for this operation
 **/
router.delete('/documents/:id', handleErrorAsync(documents_controller.delete_pdf_file))

module.exports = router;