/**
 * ecrire une fonction qui permet de savoir si c'est un repertoire
 */
import * as fs from "fs";

export const isDirectory = (pathString:string) =>{
    return fs.lstatSync(pathString).isDirectory();
}

export const isFile  = (pathString:string) =>{
    return fs.lstatSync(pathString).isFile()
}


