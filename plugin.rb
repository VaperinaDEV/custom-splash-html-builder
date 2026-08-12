# frozen_string_literal: true

# name: custom-splash-html-builder
# about: Customizable splash screen via HTML/CSS fields
# version: 0.1
# authors: Don

enabled_site_setting :custom_splash_html_builder_enabled

register_asset "stylesheets/custom-splash-html-builder.scss"

add_admin_route "custom_splash_html_builder.title", "custom-splash-html-builder", use_new_show_route: true

after_initialize do
  ActionController::Base.prepend_view_path File.expand_path("../app/views", __FILE__)

  Discourse::Application.routes.append do
    get "/admin/plugins/custom-splash-html-builder" => "admin/plugins#index",
        constraints: StaffConstraint.new
  end
end
