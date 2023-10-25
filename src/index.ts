import * as fs from 'fs-extra';
import * as path from 'path';
import {Options} from "./interfaces/interfaces";

async function removeFilesRecursive(baseDirectory: string, options?: Options): Promise<void> {
    try {
        const files: string[] = await fs.readdir(baseDirectory);

        for (const file of files) {
            const filePath: string = path.join(baseDirectory, file);
            const fileStats: fs.Stats = await fs.lstat(filePath);

            // Filtrer les fichiers en fonction des options fournies
            if (options?.allowedExtensions && !options.allowedExtensions.includes(path.extname(file)) ||
                options?.maxFileSize && fileStats.size > options.maxFileSize) {
                continue; // Ignorer le fichier et passer au suivant
            }

            if (fileStats.isFile()) {
                await fs.unlink(filePath); // Suppression du fichier
            } else if (fileStats.isDirectory()) {
                await removeFilesRecursive(filePath, options); // Appel récursif pour les sous-répertoires
            }
        }

        await fs.rmdir(baseDirectory); // Suppression du répertoire une fois tous les fichiers supprimés
    } catch (error) {
        console.error('Erreur lors de la suppression récursive des fichiers :', error);
    }
}

export { removeFilesRecursive };
