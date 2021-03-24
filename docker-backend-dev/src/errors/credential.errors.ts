import { NextFunction } from "express"
import { CredentialError } from "../types/error.type"
import { ErrorHandler } from "./ErrorHandler"

/*
The error messages will be for:
 - Unsuccessful login
 - General error => in this case we print also the message in the console
*/


export const credentialErrorHandler = (err: CredentialError, next: NextFunction) => {
    if(err.code){
        let msg = errorMessage(err.code)
        switch(err.code){
            case "ECONNREFUSED":
                return next(new ErrorHandler(401, err.code, msg))
            default:
                return next(new ErrorHandler(500, 'INTERNAL_ERROR', msg))
        }
    }
    else if(err.response && err.response.data){
        const data = err.response.data
        console.log(data)
        if(data.status){
            switch(data.status){
                case 'error':
                    return next(new ErrorHandler(data.statusCode || 500, data.name || 'INTERRNAL_ERROR', data.message || errorMessage('INTERNAL_ERROR')))
                default:
                    return next(new ErrorHandler(500, 'INTERNAL_ERROR', errorMessage('INTERNAL_ERROR')))
            }
        }
        else if(data.error){
            switch(data.error){
                case 'Bad Parameters':
                    return next(new ErrorHandler(422, 'BAD_PARAMETERS', errorMessage('BAD_PARAMETERS')))
                default:
                    return next(new ErrorHandler(500, 'INTERNAL_ERROR', errorMessage('INTERNAL_ERROR')))
            }
        }
    }
    else{
        next(new ErrorHandler(500, 'INTERNAL_ERROR', errorMessage('INTERNAL_ERROR')))
    }
    

}

const errorMessage = (name: string) => {
    switch(name){
        case "ECONNREFUSED":
            return 'Impossible to connect to issuer-api. Did you start the api?'
        case "LOGIN_FAILED":
            return 'The provided id or password were invalid'
        case 'BAD_PARAMETERS':
            return 'One or more parameters in the request are missing or wrongly formatted. Impossible to process the request.'
        default:
             return 'A generic error occured, it was not possible to create a credential.'
    }
}
