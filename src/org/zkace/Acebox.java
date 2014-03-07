/*
 * Copyright (c) 2014 Darren Scott - All Rights Reserved
 * 
 * This program is distributed under LGPL Version 2.1 in the hope that
 * it will be useful, but WITHOUT ANY WARRANTY.
 */
package org.zkace;

import java.io.IOException;

import org.zkoss.zk.ui.WrongValueException;
import org.zkoss.zk.ui.sys.ContentRenderer;
import org.zkoss.zul.Textbox;

public class Acebox extends Textbox {

	private static final long serialVersionUID = 1L;

	private boolean showgutter = false;
	
	private String mode;
	
	private String theme;
	
	public Acebox() {
		super();
		this.setRows(5);
	}

	@Override
	protected void renderProperties(ContentRenderer renderer) throws IOException {
		super.renderProperties(renderer);
		render(renderer, "mode", this.getMode()); 
		render(renderer, "theme", this.getTheme()); 
		render(renderer, "showgutter", this.getShowgutter()); 
	}

	@Override
	public void setRows(int rows) throws WrongValueException {
		super.setRows(rows);
		super.setHeight((rows * 15) + "px");
	}
	
	public void setMode(String mode) {
		this.mode = mode;
		this.smartUpdate("mode", mode, true);
	}
	
	public String getMode() {
		return mode;
	}

	public void setTheme(String theme) {
		this.theme = theme;
		this.smartUpdate("theme", theme, true);
	}
	
	public String getTheme() {
		return theme;
	}
	
	public void setShowgutter(boolean showgutter) {
		this.showgutter = showgutter;
		this.smartUpdate("showgutter", showgutter, true);
	}
	
	public boolean getShowgutter() {
		return showgutter;
	}

}
