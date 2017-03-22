package com.acadgild.servletcookiesassignment;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloForm extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// Create cookies for first and last names.

		if (request.getParameter("first_name") != null
				&& !request.getParameter("first_name").trim().equals("")) {
			Cookie firstName = new Cookie("first_name",
					request.getParameter("first_name"));
			Cookie lastName = new Cookie("last_name",
					request.getParameter("last_name"));

			// Set expiry date after 24 Hrs for both the cookies.
			firstName.setMaxAge(60 * 60 * 24);
			lastName.setMaxAge(60 * 60 * 24);

			// Add both the cookies in the response header.
			response.addCookie(firstName);
			response.addCookie(lastName);
		}
		// Set response content type
		response.setContentType("text/html");

		Cookie[] cookies = request.getCookies();
		Cookie cookie = null;
		String firstName = "", lastName = "";

		if(cookies == null){
			firstName = request.getParameter("first_name");
			lastName = request.getParameter("last_name");
		} else {
			for (int i = 0; i < cookies.length; i++) {
				cookie = cookies[i];
				if(cookie.getName() != null && cookie.getName().trim().equals("first_name"))
					firstName = cookie.getValue();
				else 
					lastName = cookie.getValue();
			}
		}

		PrintWriter out = response.getWriter();
		String title = "Setting Cookies Example";
		String docType = "<!doctype html public \"-//w3c//dtd html 4.0 "
				+ "transitional//en\">\n";
		out.println(docType + "<html>\n" + "<head><title>" + title
				+ "</title></head>\n" + "<body bgcolor=\"#f0f0f0\">\n"
				+ "<h1 align=\"center\">" + title + "</h1>\n" + "<ul>\n"
				+ "  <li><b>First Name</b>: "
				+ firstName + "\n"
				+ "  <li><b>Last Name</b>: "
				+ lastName + "\n" + "</ul>\n"
				+ "</body></html>");

		out.print("<form action='ReadCookies'>");
		out.print("<input type='submit' value='ReadCookies'>");
		out.print("</form>");

		out.print("<form action='DeleteCookies'>");
		out.print("<input type='submit' value='DeleteCookies'>");
		out.print("</form>");
	}
}