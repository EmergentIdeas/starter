package com.emergentideas.base.confighandles;

import javax.ws.rs.Path;

import com.emergentideas.webhandle.output.Template;

public class Handle404 {

	@Path("/{page:.*}")
	@Template
	public Object notFound() {
		return "not-found";
	}
}
