JSONEditorSchema.defaults.editors["null"] = JSONEditorSchema.AbstractEditor.extend({
  getValue: function() {
    return null;
  },
  setValue: function() {
    this.onChange();
  },
  getNumColumns: function() {
    return 2;
  }
});
