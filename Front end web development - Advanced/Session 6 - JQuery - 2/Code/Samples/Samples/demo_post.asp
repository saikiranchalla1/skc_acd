<html>
	<head>
	<title>My first ASP page</title>
	</head>
	<body>
		<%
		dim fname,city
		fname=Request.Form("name")
		city=Request.Form("city")
		Response.Write("Dear " & fname & ". ")
		Response.Write("Hope you live well in " & city & ".")
		%>

	</body>
	</html>