// =========================================================================================
// The 1. in the filename is needed to ensure that this is the first plugin loaded by nuxt
// and thus available to other plugins in the project.
// See: https://nuxt.com/docs/guide/directory-structure/plugins#plugin-registration-order
// =========================================================================================
import { DiscoveryConfig } from 'config/discoveryConfig';
const discoveryConfig : DiscoveryConfig = require('config/discoveryConfig.json');


export default defineNuxtPlugin(() => {

  return {
    provide: {
      discoveryConfig: discoveryConfig
    }
  };
});

declare module '#app' {
  interface NuxtApp {
    $discoveryConfig : DiscoveryConfig
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $discoveryConfig: DiscoveryConfig
  }
}
export { };
