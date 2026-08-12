import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  if (!api.getCurrentUser()?.admin) {
    return;
  }

  api.addAdminPluginConfigurationNav("custom-splash-html-builder", [
    {
      label: "custom_splash_html_builder.editor_title",
      route: "adminPlugins.show.custom-splash-html-builder.editor",
      description: "custom_splash_html_builder.editor_description",
    },
  ]);
});
