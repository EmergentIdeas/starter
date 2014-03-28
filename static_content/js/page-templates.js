$.get('/templates/page.templates', function(data) {
	Tripartite.parseTemplateScript(data);
	if(Tripartite.onTemplatesLoaded) {
		Tripartite.onTemplatesLoaded();
		Tripartite.onTemplatesLoaded = null;
	}
	
});
