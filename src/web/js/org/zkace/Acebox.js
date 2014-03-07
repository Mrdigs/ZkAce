// Copyright (c) 2014 Darren Scott - All Rights Reserved
//
// This program is distributed under LGPL Version 2.1 in the hope that
// it will be useful, but WITHOUT ANY WARRANTY.
org.zkace.Acebox = zk.$extends(zul.inp.Textbox, {

	_editor : null,

	$define: {
		theme: null,
		mode: null,
		showgutter: null
	},
  
	setValue: function(value, fromServer) {
		this.$supers('setValue', arguments);
		if (fromServer && this._editor) {
			this._editor.setValue(value);
		}
    },

	bind_: function() {
		this.$supers('bind_', arguments);
		var elem = this.$n(), widget = this, editor = ace.edit(widget.uuid), session, base;
		base = zk.ajaxURI('/web/js/org/zkace/ace/',{au:true});
		ace.config.set('basePath', base);
		session = editor.getSession();
		widget._editor = editor;
		if (widget._theme) {
			editor.setTheme('ace/theme/' + widget._theme);
		}
		if (widget._mode) {
			session.setMode('ace/mode/' + widget._mode);
		}
		editor.setReadOnly(widget._readonly);
		editor.renderer.setShowGutter(widget._showgutter);
		session.setUseWrapMode(true);
		session.setWrapLimitRange();
		editor.on('blur', function(e) {
			widget.setValue(editor.getValue());
			widget.fireOnChange();
		});
	},

	redraw: function(out) {
		out.push('<div', this.domAttrs_(), '>');
		if (this.getValue()) {
			out.push(this.getValue());
		}
		out.push('</div>');
	}
        
});