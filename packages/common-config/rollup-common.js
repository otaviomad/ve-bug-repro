import resolve from "@rollup/plugin-node-resolve";
import swc from "@rollup/plugin-swc";
import dts from "rollup-plugin-dts";

/**
 * @param {string} entry
 * @returns {import('rollup').RollupOptions[]}
 */
export const createConfig = (entry = "src/index.ts") => [
  {
    input: entry,
    output: {
      dir: "dist",
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [
      resolve({
        extensions: [".ts", ".js", ".tsx"],
      }),
      swc({
        swc: {
          jsc: {
            parser: { syntax: "typescript", tsx: true },
            transform: {
              react: {
                runtime: "automatic",
              },
            },
          },
        },
      }),
    ],
    external: (id) => !/^[./]/.test(id),
  },
  {
    input: entry,
    output: {
      dir: "dist",
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].d.ts",
    },
    plugins: [
      resolve({
        extensions: [".ts", ".js", ".tsx"],
      }),
      dts(),
    ],
    external: (id) => !/^[./]/.test(id),
  },
];
