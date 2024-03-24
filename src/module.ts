import {
  defineNuxtModule,
  addComponentsDir,
  createResolver,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'u'
   */
  prefix?: string;

  /**
   * @default false
   */
  global?: boolean;
}

export interface ModuleHooks {}

export interface ModuleRuntimeHooks {}

export interface ModuleRuntimeConfig {}

export interface ModulePublicRuntimeConfig {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
    compatibility: {
      nuxt: "^3.10.0",
    },
  },
  defaults: {
    prefix: "U",
  },
  // Default configuration options of the Nuxt module
  setup(options) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve("./runtime/plugin"));
    addComponentsDir({
      path: resolve(runtimeDir, "components"),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
  },
});
