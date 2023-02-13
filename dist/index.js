import path from "path";
import { fileURLToPath } from "url";
import WindiCSS from "vite-plugin-windicss";
function windiIntegration() {
  return {
    name: "astro-windi",
    hooks: {
      "astro:config:setup": ({
        config,
        updateConfig,
        addWatchFile,
        injectScript
      }) => {
        updateConfig({
          vite: {
            plugins: [
              WindiCSS({
                root: ".",
                scan: {
                  include: [path.join(fileURLToPath(config.srcDir), `**`, `*.{astro,html,js,jsx,svelte,ts,tsx,vue}`)]
                }
              })
            ]
          }
        });
        addWatchFile(new URL("./windi.config.js", config.root));
        injectScript("page-ssr", `import 'virtual:windi.css';`);
      }
    }
  };
}
export {
  windiIntegration as default
};
