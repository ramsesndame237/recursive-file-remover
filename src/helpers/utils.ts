/**
 * ecrire une fonction qui permet de savoir si c'est un repertoire
 */
import * as fs from "fs";

export const isDirectory(path:string) =>{
    return fs.lstatSync(path).isDirectory();
}


