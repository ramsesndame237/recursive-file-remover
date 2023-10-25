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
    return directories.filter((directory) => isDirectory(path.join(pathString,directory)))
}

export const getFiles = (pathString:string) =>{
    const files = fs.readdirSync(pathString);
    return files.filter((file) => isFile(path.join(pathString, file)));
}

export function deleteFile(pathString: string): void {
    fs.unlinkSync(pathString);
}

export function deleteDirectory(pathString: string): void {
    const files = getFiles(pathString);
    for (const file of files) {
        deleteFile(path.join(pathString, file));
    }
    fs.rmdirSync(pathString);
}

export function getSize(pathString: string): number {
    return fs.statSync(pathString).size;
}

export function getExtension(pathString: string): string {
    return pathString.split(".").pop();
}

export function stringifyDate(date: Date): string {
    return date.toLocaleString();
}

export function formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}m ${seconds}s`;
}

export function isCompressed(pathString: string): boolean {
    return pathString.endsWith(".zip") || pathString.endsWith(".tar") || pathString.endsWith(".gz");
}

export function isRemote(pathString: string): boolean {
    return pathString.startsWith("http://") || pathString.startsWith("https://");
}

export function isEncrypted(pathString: string): boolean {
    return pathString.startsWith("password:");
}

