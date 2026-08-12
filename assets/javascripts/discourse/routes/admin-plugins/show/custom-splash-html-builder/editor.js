import Route from "@ember/routing/route";
import { ajax } from "discourse/lib/ajax";

export default class AdminPluginsCustomSplashHtmlBuilderRoute extends Route {
  async model() {
    const { site_settings } = await ajax("/admin/site_settings.json");
    const byName = Object.fromEntries(
      site_settings.map((setting) => [setting.setting, setting])
    );

    return {
      html: byName.splash_custom_html?.value ?? "",
      css: byName.splash_custom_css?.value ?? "",
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.html = model.html;
    controller.css = model.css;
  }
}
