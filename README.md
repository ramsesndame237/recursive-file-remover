# Démarrage rapide

La bibliothèque `remove-file-recursive` vous permet de supprimer des fichiers et des répertoires de manière récursive.

## Installation

Pour installer la bibliothèque, exécutez la commande suivante :
``npm install remove-file-recursive``

## Utilisation

Pour utiliser la bibliothèque, importez la fonction `removeFilesRecursive()` dans votre code :

```typescript
import { removeFilesRecursive } from "remove-file-recursive";


Ensuite, appelez la fonction `removeFilesRecursive()` avec le chemin du répertoire que vous souhaitez supprimer :

typescript
removeFilesRecursive("/path/to/directory");


Cette fonction supprimera tous les fichiers et répertoires de manière récursive à partir du chemin spécifié.

## Options

La fonction `removeFilesRecursive()` prend les options suivantes :

* **preview**: Si `true`, la fonction liste les fichiers et répertoires qui seront supprimés, mais ne les supprime pas réellement.
* **verbose**: Si `true`, la fonction imprime des informations détaillées sur le processus de suppression.
* **extensions**: Un tableau d'extensions de fichiers à supprimer.
* **sizes**: Un tableau de plages de tailles à supprimer.
* **onEnd**: Une fonction qui sera appelée lorsque le processus de suppression est terminé.
* **cancelable**: Si `true`, le processus de suppression peut être annulé en appelant la fonction `cancel()`.
* **output**: Une fonction qui sera appelée pour chaque fichier ou répertoire supprimé. La fonction recevra le chemin du fichier ou du répertoire.
* **exportFormat**: Le format à utiliser pour exporter les fichiers et répertoires supprimés.

## Exemples

Voici quelques exemples d'utilisation de la bibliothèque `remove-file-recursive`:

**Pour supprimer un répertoire et tous ses sous-répertoires et fichiers**

typescript
import { removeFilesRecursive } from "recursive-file-remover";

removeFilesRecursive("/path/to/directory");

**Pour supprimer un fichier spécifique **

import { removeFilesRecursive } from "remove-file-recursive";

removeFilesRecursive("/path/to/file");

## Tests

To run the tests, run the following command:


npm test


## Documentation

The documentation is available in the docs: docs directory.

## Support

If you have any questions or problems, please feel free to open an issue on GitHub.

## Contributing

Contributions are welcome! Please see the contributing: CONTRIBUTING.md guide for more information.


I hope this is helpful!


# delete-recursive

A library for recursively deleting files and directories.


```
<a href="https://www.buymeacoffee.com/njohndamevw" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
```


