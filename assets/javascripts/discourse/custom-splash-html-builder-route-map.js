export default {
  resource: "admin.adminPlugins.show",
  path: "/plugins",
  map() {
    this.route("custom-splash-html-builder", { path: "custom-splash-html-builder" }, function () {
      this.route("editor");
    });
  },
};
