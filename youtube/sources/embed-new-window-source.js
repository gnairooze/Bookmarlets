javascript:
(
	function()
	{
		name = "v"; 
		url = window.location.href; 
		name = name.replace(/[\[\]]/g, "\\$&"); 
		prefix = "https://www.youtube.com/embed/"; 
		code = null; 
		
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url); 
		
		if (!results) 
		{
			code = null; 
		} 
		else if (!results[2]) 
		{
			code = '';
		} 
		else 
		{ 
			code = decodeURIComponent(results[2].replace(/\+/g, " ")); 
		} 
		
		window.open(prefix + code)
	}
)();