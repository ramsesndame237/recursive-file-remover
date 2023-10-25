export type Options = {
    allowedExtensions?: string[];
    maxFileSize?: number;
    extensions?: string[];
    sizes?: number[];
    onEnd?: () => void;
    cancelable?: boolean;
    output?: (file: string) => string;
    exportFormat?: string;
    preview?: boolean;
    verbose?: boolean;
}
