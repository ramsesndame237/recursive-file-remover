/**
 * ecrire une fonction qui permet de savoir si c'est un repertoire
 */
import * as fs from "fs";
import * as path from "path";

export const isDirectory = (pathString:string) =>{
    return fs.lstatSync(pathString).isDirectory();
}

export const isFile  = (pathString:string) =>{
    return fs.lstatSync(pathString).isFile()
}

export const getDirectories = (pathString:string) =>{
    const directories = fs.readdirSync(pathString)
    return directories.filter((directory) => isDirectory(path.join(pathString,directory))
}

export const getFiles = (pathString:string) =>{
    const files = fs.readdirSync(pathString);
    return files.filter((file) => isFile(path.join(pathString, file)));
}


