package com.emergentideas.base.confighandles;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Path;

import com.emergentideas.page.editor.handles.EmailContactHandle;
import com.emergentideas.webhandle.Location;
import com.emergentideas.webhandle.WebAppLocation;
import com.emergentideas.webhandle.assumptions.oak.ParmManipulator;
import com.emergentideas.webhandle.assumptions.oak.RequestMessages;
import com.emergentideas.webhandle.output.Show;
import com.emergentideas.webhandle.templates.TemplateSource;

public class ContactHandle extends EmailContactHandle {
	public ContactHandle() {
		super();
		
		emailTo = new String[] { "dan@emergentideas.com" };
	}
	
	@Path("/contact")
	public Object contactFormPost(Location location, HttpServletRequest request, RequestMessages messages, ParmManipulator manip, String vrf) {
		Location loc = addParameterObjects(request);
		manip.addRequestParameters(loc);
		loc.put("formName", "Contact Submission from the Website");
		
		TemplateSource ts = new WebAppLocation(location).getServiceByType(TemplateSource.class);
		emailForm(loc, ts, getContactEmailTemplate());
		
		return new Show("/thanks.html");
	}
	
}
