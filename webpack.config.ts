import path from "path";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { Configuration } from "webpack";

const mode = "development";
const isDev = mode === "development";
const paths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
