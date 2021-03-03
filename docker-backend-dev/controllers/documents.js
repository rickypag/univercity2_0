
export const DocumentController = () => {

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
    const saveDocument = (req, res) => {
        return res.status(501).send('not implemented');
    }

    /**
     * download the document id
     * download the document form the platform
     *
     * id String id of the document that are going to be downloaded
     * no response value expected for this operation
     **/
    const getDocument = (req, res) => {
        var id = req.param('id');
        return res.status(501).send('not implemented');
    }

    /**
     * retrive the document metadata
     * retrive the metadata of the document id
     *
     * id String id of the selected document for metadata
     * returns DocumentMetadata
     **/
    const getDocumentMetadata = (req, res) => {
        var id = req.param('id');
        return res.status(501).send('not implemented');
    }

    /**
     * retrive document that are linked to the search query
     * retrive a list of documents
     *
     * search Query  (optional)
     * returns QueryResponse
     **/
    const searchDocuments = (req, res) => {
        if (!req.query.search){
            return res.status(400).send('Bad Request');
        }
        var searchString = req.query.search;
        return res.status(501).send('not implemented');
    }

    /**
     * delete a document
     * remove a document form the platform
     *
     * id String id of the document that are going to be deleted
     * no response value expected for this operation
     **/
    const deleteDocument = (req, res) => {
        var id = req.param('id');
        return res.status(501).send('not implemented');
    }

    return {
        getDocument,
        getDocumentMetadata,
        saveDocument,
        searchDocuments,
        deleteDocument
    }
}