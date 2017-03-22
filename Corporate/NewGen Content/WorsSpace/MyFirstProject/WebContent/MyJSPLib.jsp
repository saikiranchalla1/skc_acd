<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.io.*, java.util.*, java.sql.*" %>
    <%@ page import="javax.servlet.http.*, javax.servlet.*" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/sql"  prefix="sql"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SELECT Operations on DB</title>
</head>
<body>
<sql:setDataSource var="myDs" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost/myschema" user="root" password="India@123"/>
<sql:update dataSource="${myDs}" var="updtResult">
INSERT INTO employees VALUES('10','Nikhilesh', 'HR');
</sql:update>

<c:set var="empId" value="3"/>

<%-- <sql:update dataSource="${myDs}" var="count">
	DELETE FROM employees WHERE id = ?
	<sql:param value="${empId}"></sql:param>
</sql:update> --%>


<sql:update dataSource="${myDs}" var="count">
	UPDATE employees SET dept = 'CSE' WHERE id = ?
	<sql:param value="${empId}"></sql:param>
</sql:update>


<sql:query var="result" dataSource="${myDs}">
	SELECT * FROM employees;
</sql:query>

<table border="1">
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Department</th>
		</tr>
	</thead>
	<tbody>
	<c:forEach var="row" items="${result.rows}">
		<tr>
			<td><c:out value="${row.id}"/></td>
			<td><c:out value="${row.name}"/></td>
			<td><c:out value="${row.dept}"/></td>
		</tr>
	</tbody>
	</c:forEach>
</table>
</body>
</html>