<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ page import="java.sql.*" %>
 <% Class.forName("com.mysql.jdbc.Driver"); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>JDBC Demo using JSP</title>
</head>
<body>
<br><br><br>
<h3>Database Demo for Employees DB</h3>
<%
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/myschema", "root", "India@123");
	Statement stmt = conn.createStatement();
	ResultSet rs = stmt.executeQuery("SELECT * FROM employees");
%>
<table border="1">
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Department</th>
		</tr>
	</thead>
	<tbody>
		<%
			while(rs.next()){ %>
			<tr>
				<td><%= rs.getString(1) %></td>
				<td><%= rs.getString(2) %></td>
				<td><%= rs.getString(3) %></td>
			</tr>
			
			<%} %>
		
	</tbody>
</table>
</body>
</html>