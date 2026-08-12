import AceEditor from "discourse/components/ace-editor";
import DButton from "discourse/components/d-button";
import { i18n } from "discourse-i18n";

export default <template>
  <div class="admin-detail custom-splash-html-builder">
    <p class="custom-splash-html-builder__hint">
      {{i18n "custom_splash_html_builder.hint"}}
    </p>

    <label class="custom-splash-html-builder__label">
      {{i18n "custom_splash_html_builder.html_label"}}
    </label>
    <div class="custom-splash-html-builder__editor">
      <AceEditor
        @content={{@controller.html}}
        @onChange={{@controller.updateHtml}}
        @mode="html"
        @resizable={{true}}
      />
    </div>

    <label class="custom-splash-html-builder__label">
      {{i18n "custom_splash_html_builder.css_label"}}
    </label>
    <div class="custom-splash-html-builder__editor">
      <AceEditor
        @content={{@controller.css}}
        @onChange={{@controller.updateCss}}
        @mode="css"
        @resizable={{true}}
      />
    </div>

    <div class="custom-splash-html-builder__actions">
      <DButton
        @action={{@controller.save}}
        @translatedLabel={{@controller.saveLabel}}
        @disabled={{@controller.saving}}
        class="btn-primary custom-splash-html-builder__save-btn"
      />

      {{#if @controller.savedAt}}
        <span class="custom-splash-html-builder__saved">
          {{i18n "custom_splash_html_builder.saved"}}
        </span>
      {{/if}}
    </div>
  </div>
</template>
