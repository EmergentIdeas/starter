package com.emergentideas.base.confighandles;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Path;

import com.emergentideas.webhandle.output.Template;

public class Handle404 {

	@Path("/{page:.*}")
	@Template
	public Object notFound(HttpServletResponse response) {
		response.setStatus(404);
		return "not-found";
	}
}
