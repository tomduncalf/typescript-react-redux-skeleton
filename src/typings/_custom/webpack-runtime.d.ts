/**
 * This file is copied from node_modules/awesome-typescript-loader/lib/runtime.d.ts
 * Putting it with the other typings makes require be defined even when awesome-typescript-loader
 * is not loaded - i.e. when invoking tsc from the command line - therefore allowing us to require
 * stylesheets without causing compiler errors.
 */

/**
 * Type declarations for Webpack runtime.
 */

interface WebpackRequireEnsureCallback {
    (req: WebpackRequire): void
}

interface WebpackRequire {
    (id: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure(ids: string[], callback: WebpackRequireEnsureCallback, chunkName?: string): void;
    context(directory: string, useSubDirectories?: boolean, regExp?: RegExp): WebpackContext;
}

interface WebpackContext extends WebpackRequire {
    keys(): string[];
}

declare var require: WebpackRequire;
