function func1()
{
	var y = 0;
	setInterval(function()
	{
		$("#d1").fadeOut(1000, function()
		{
			$("#d1").css("background-position", "0 " + (-y) +"px");
			y = y + 251;
			if(y > 1506)
			{
				y = 0;
			}
			$("#d1").fadeIn(1000);
		});
	},1000);
}