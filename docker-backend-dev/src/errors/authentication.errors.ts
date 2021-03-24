import { NextFunction } from "express"
import { VerificationError } from "../types/error.type"
import { ErrorHandler } from "./ErrorHandler"

/*
The error messages will be for:
 - Unsuccessful login
 - General error => in this case we print also the message in the console
*/


export const loginErrorHandler = (err: VerificationError, next: NextFunction) => {
    if(err.code){
        let msg = errorMessage(err.code)
        switch(err.code){
            case 'LOGIN_FAILED':
                return next(new ErrorHandler(401, err.code, msg))
            default:
                return next(new ErrorHandler(500, 'INTERNAL_ERROR', msg))
        }
    }
    else if(err.message){
        switch(err.message){
            case 'No contract was found':
                return next(new ErrorHandler(400, 'CONTRACT_NOT_FOUND', errorMessage('CONTRACT_NOT_FOUND')))
            default:
                return next(new ErrorHandler(500, 'INTERNAL_ERROR', errorMessage('INTERNAL_ERROR')))
        }
    }
    else{
        next(new ErrorHandler(500, 'INTERNAL_ERROR', errorMessage('INTERNAL_ERROR')))
    }
}

export const userinfoErrorHandler = (err: VerificationError, next: NextFunction) => {
    switch(err.toString()){
        case 'Error: NOT_FOUND':
            return next(new ErrorHandler(404, 'NOT_FOUND', errorMessage('NOT_FOUND')))
        default:
            return next(new ErrorHandler(500, 'INTERNAL_ERROR', errorMessage('INTERNAL_ERROR')))
    }
    
}

const errorMessage = (name: string) => {
    switch(name){
        case "LOGIN_FAILED":
            return 'The provided id or password were invalid'
        case "NOT_FOUND":
            return 'The user with the given id was not found'
        default:
             return 'A generic error occured, it was not possible to login.'
    }
}
