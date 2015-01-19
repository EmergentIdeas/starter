package com.ei.util;

import java.util.ArrayList;
import java.util.List;

import com.emergentideas.entityclasstools.ClassDescription;
import com.emergentideas.entityclasstools.EntityGenerator;
import com.emergentideas.entityclasstools.GenerateClassDescriptions;
import com.emergentideas.entityclasstools.GenerateForm;
import com.emergentideas.entityclasstools.InputFieldDescription;

public class GenTemplatesForClass {

	public static void main(String[] args) {

		// Class to generate form for
		Class clazz = ArrayList.class;
		
		// Handler url prefix
		String handler = "/my-handler";
		
		// Object names
		String singularName = "My Object";
		String pluralName = "My Objects";
		

		GenerateForm fg = new GenerateForm();
		GenerateClassDescriptions gcd = new GenerateClassDescriptions();
		ClassDescription cd = gcd.generateClassDescription(clazz);
		List<InputFieldDescription> inputs = fg.convert(cd.getMemberDescriptions());
		
		EntityGenerator eg = new EntityGenerator();
		System.out.println(eg.writeCRUDFilesToString(singularName, pluralName, handler.substring(1)));
		System.out.println(fg.generateForm(inputs));
	}

}
