import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  name: "mini-vue",
  entries: ["src/index"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
