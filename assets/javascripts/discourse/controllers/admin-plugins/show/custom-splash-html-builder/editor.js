import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { ajax } from "discourse/lib/ajax";
import { popupAjaxError } from "discourse/lib/ajax-error";
import { i18n } from "discourse-i18n";

export default class AdminPluginsCustomSplashHtmlBuilderController extends Controller {
  @tracked html = "";
  @tracked css = "";
  @tracked saving = false;
  @tracked savedAt = null;

  @action
  updateHtml(value) {
    this.html = value;
    this.savedAt = null;
  }

  @action
  updateCss(value) {
    this.css = value;
    this.savedAt = null;
  }

  @action
  async save() {
    this.saving = true;
    this.savedAt = null;

    try {
      await ajax("/admin/site_settings/splash_custom_html", {
        type: "PUT",
        data: { splash_custom_html: this.html },
      });
      await ajax("/admin/site_settings/splash_custom_css", {
        type: "PUT",
        data: { splash_custom_css: this.css },
      });
      this.savedAt = new Date();
    } catch (e) {
      popupAjaxError(e);
    } finally {
      this.saving = false;
    }
  }

  get saveLabel() {
    return this.saving
      ? i18n("custom_splash_html_builder.saving")
      : i18n("custom_splash_html_builder.save");
  }
}
