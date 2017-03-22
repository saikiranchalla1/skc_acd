<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%! int dayVar = 3; %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%-- Today' Date: <%= (new java.util.Date()).toString() %><br>

IP Address is: <%= request.getRemoteAddr() %> --%>
<input type="text" id="myInp">
<script type="text/javascript">
	//DOM Method to fetch the value of myInp
	<%
		//Value to be set on dayVar
	%>
</script>
<%
	if(dayVar == 1 | dayVar == 7){ %>
		<p>Today is a weekend</p>
<%} else { %>
	<p>Today is not a weekend
<%}
%>
</body>
</html>