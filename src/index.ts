
import {Options} from "./interfaces/interfaces";
import {deleteDirectory, deleteFile, formatTime, getDirectories, getFiles, isDirectory} from "./helpers/utils";
import * as path from "path";

    const removeFilesRecursive = async (
    pathString: string,
    options: Options = {}
): Promise<void>  => {
    const {
        preview = false,
        verbose = false,
        extensions = [],
        sizes = [],
        onEnd,
        cancelable = false,
        output,
        exportFormat,
    } = options;

    if (preview) {
        const files = getFiles(pathString);
        const directories = getDirectories(pathString);

        if (verbose) {
            console.log(
                "Les fichiers et répertoires suivants seront supprimés :"
            );
        }

        for (const file of files) {
            if (verbose) {
                console.log(file);
            }
        }

        for (const directory of directories) {
            if (verbose) {
                console.log(directory);
            }
        }

        return Promise.resolve();
    }

    const canceled = new Promise<void>((resolve, reject) => {
        let canceling = false
        const cancel = () => {
            canceling = true;
            resolve();
        };

        if (cancelable) {
            process.on("SIGINT", cancel);
            process.on("SIGTERM", cancel);
        }
    });

    let startedAt = Date.now();
    let filesDeleted = 0;
    let directoriesDeleted = 0;

    async function removeFilesRecursive(pathString: string) {
        if (canceled) {
            return;
        }

        const isDirectoryPath = isDirectory(pathString);

        if (isDirectoryPath) {
            const files = getFiles(pathString);
            const directories = getDirectories(pathString);

            for (const file of files) {
                await removeFilesRecursive(path.join(pathString, file));
            }

            for (const directory of directories) {
                await removeFilesRecursive(path.join(pathString, directory));
            }

            deleteDirectory(pathString);
        } else {
            deleteFile(pathString);
        }

        filesDeleted++;
        directoriesDeleted++;

        if (output) {
            output(pathString);
        }

        if (verbose) {
            console.log(`${pathString} supprimé`);
        }
    }

    await removeFilesRecursive(pathString);

    const endedAt = Date.now();
    const timeTaken = endedAt - startedAt;

    if (verbose) {
        console.log(
            `${filesDeleted} fichiers et ${directoriesDeleted} répertoires supprimés en ${formatTime(
                timeTaken
            )}`
        );
    }

    if (onEnd) {
        onEnd();
    }

    return canceled;
}
export { removeFilesRecursive };
