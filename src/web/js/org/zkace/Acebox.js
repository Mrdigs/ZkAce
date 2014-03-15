// Copyright (c) 2014 Darren Scott - All Rights Reserved
//
// This program is distributed under LGPL Version 2.1 in the hope that
// it will be useful, but WITHOUT ANY WARRANTY.
org.zkace.Acebox = zk.$extends(zul.inp.Textbox, {

	_editor : null,

	$define: {
		theme: null,
		mode: null,
		showgutter: null,
		maxrows: null,
		rowsSet: null
	},
  
	setValue: function(value, fromServer) {
		this.$supers('setValue', arguments);
		if (fromServer && this._editor) {
			this._editor.setValue(value);
		}
    },

	setHeight: function(value) {
		this.$supers('setHeight', arguments);
		if (this._editor) {
			this._editor.resize();
		}
	},

	setWidth: function(value) {
		this.$supers('setWidth', arguments);
		if (this._editor) {
			this._editor.resize();
		}
	},
	
	bind_: function() {
		this.$supers('bind_', arguments);
		var elem = this.$n(), widget = this, editor = ace.edit(this.uuid), session, base, lines, min, max;
		lines = editor.getSession().getDocument().getLength();
		base = zk.ajaxURI('/web/js/org/zkace/ace/',{au:true});
		ace.config.set('basePath', base);
		session = editor.getSession();
		this._editor = editor;
		if (this._theme) {
			editor.setTheme('ace/theme/' + this._theme);
		}
		if (this._mode) {
			session.setMode('ace/mode/' + this._mode);
		}
		editor.setReadOnly(this._readonly);
		editor.renderer.setShowGutter(this._showgutter);
		min = this.getRowsSet() ? this.getRows() : Math.min(lines, 1);
		max = this.getMaxrows() >= min ? this.getMaxrows() : min;
		editor.setOptions({minLines: min, maxLines: max});
		// TODO Make this a component property
		// editor.setBehavioursEnabled(true);
		session.setUseWrapMode(true);
		session.setWrapLimitRange();
		editor.on('blur', function(e) {
			widget.setValue(editor.getValue());
			widget.fireOnChange();
		});
		session.on("changeAnnotation", function(){
			var annot = session.getAnnotations();
			widget.smartUpdate('annotations', annot);
		});
	},

	redraw: function(out) {
		// out.push('<div', this.domAttrs_(), '>');
		out.push('<div', this.domAttrs_(), '>');
		if (this.getValue()) {
			out.push(this.getValue().replace(/&/g, '&amp').replace(/</g, '&lt;'));
		}
		out.push('</div>');
	}
        
});