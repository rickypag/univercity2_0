/**
 * upload a file
 * By inserting the metadata of the document (title, class, etc..) you can upload a file into the platform 
 **/
exports.upload_pdf_file = function(req, res) {
    return res.status(501).send('not implemented');
};

/**
 * download the document id
 * download the document form the platform
 **/
exports.download_pdf_file = function(req, res) {
    var id = req.param('id');
    return res.status(501).send('not implemented');
};

/**
 * retrive the document metadata
 * retrive the metadata of the document id
 **/
exports.metadata_of_pdf_file = function(req, res) {
    var id = req.param('id');
    return res.status(501).send('not implemented');
};

/**
 * retrive document that are linked to the search query
 * retrive a list of documents
 **/
exports.query_pdf_file = function(req, res) {
    if (!req.query.search){
        return res.status(400).send('Bad Request');
    }
    var searchString = req.query.search;
    return res.status(501).send('not implemented');
};

/**
 * delete a document
 * remove a document form the platform
 **/
exports.delete_pdf_file = function(req, res) {
    var id = req.param('id');
    return res.status(501).send('not implemented');
};
