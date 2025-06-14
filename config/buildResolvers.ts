import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    mainFiles: ["index"],
    preferAbsolute: true,
    alias: {},
    modules: [options.paths.src, "node_modules"],
  };
}
