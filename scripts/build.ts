import path from "path";
import { build as esbuild, BuildOptions } from "esbuild";

const baseConfig: BuildOptions = {
  platform: "node",
  target: "es6",
  format: "cjs",
  nodePaths: [path.join(__dirname, "../src")],
  sourcemap: false,
  external: [],
  bundle: false,
};

async function main() {
  await esbuild({
    ...baseConfig,
    outdir: path.join(__dirname, "../build"),
    entryPoints: [path.join(__dirname, "../src/index.ts")],
  });
}

if (require.main === module) {
  main();
}
