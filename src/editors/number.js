JSONEditorSchema.defaults.editors.number = JSONEditorSchema.defaults.editors.string.extend({
  sanitize: function(value) {
    return (value+"").replace(/[^0-9\.\-eE]/g,'');
  },
  getNumColumns: function() {
    return 2;
  },
  getValue: function() {
    return this.value*1;
  }
});
