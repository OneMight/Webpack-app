import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
type Mode = "development" | "production";
interface Env {
  mode?: Mode;
  port?: number;
}
export default (env: Env) => {
  const isDev = env.mode === "development";
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: "./src/index.tsx",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
      publicPath: "/",
    },
    optimization: {
      runtimeChunk: "multiple",
    },
    devtool: isDev && "inline-source-map",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/[name][hash][ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
          historyApiFallback: true,
        }
      : undefined,

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
  };
  return config;
};
