import { IConfig } from "../config";
import { Request, Response } from "express"

export const DocumentController = (config: IConfig) => {

    /**
     * upload a file
     * By inserting the metadata of the document (title, class, etc..) you can upload a file into the platform 
     **/
    const upload_pdf_file = (req: Request, res: Response) => {
        return res.status(501).send('not implemented');
    };

    /**
     * download the document id
     * download the document form the platform
     **/
    const download_pdf_file = (req: Request, res: Response) => {
        var id = req.param('id');
        return res.status(501).send('not implemented');
    };

    /**
     * retrive the document metadata
     * retrive the metadata of the document id
     **/
    const metadata_of_pdf_file = (req: Request, res: Response) => {
        var id = req.param('id');
        return res.status(501).send('not implemented');
    };

    /**
     * retrive document that are linked to the search query
     * retrive a list of documents
     **/
     const query_pdf_file = (req: Request, res: Response) => {
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
     const delete_pdf_file = (req: Request, res: Response) => {
        var id = req.param('id');
        return res.status(501).send('not implemented');
    };

    return {
        upload_pdf_file,
        download_pdf_file,
        metadata_of_pdf_file,
        query_pdf_file,
        delete_pdf_file
    }

}
