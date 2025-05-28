import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { BuildEnv } from "./config/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
