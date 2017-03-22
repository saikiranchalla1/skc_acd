package com.mycompany.servletspkg;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.Enumeration;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String msg = "";

    /**
     * Default constructor. 
     */
    public MyServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		msg = "Hello World!!!";
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		/*out.println("<h1>" + request.getParameter("firstName") + "</h1>");
		out.println("<h1>" + request.getParameter("lastName") + "</h1>");*/
		/*Enumeration<String> headerNames = request.getHeaderNames();
		while(headerNames.hasMoreElements()){
			String param = headerNames.nextElement();
			System.out.println( param + "   " + request.getHeader(param));
		}*/
		
		/*out.println("<h1>" + request.getParameter("firstName") + "</h1>");
		out.println("<h1>" + request.getParameter("lastName") + "</h1>");
		
		Cookie firstName = new Cookie("firstName", request.getParameter("firstName"));
		Cookie lastName = new Cookie("lastName", request.getParameter("lastName"));
		
		firstName.setMaxAge(10);
		lastName.setMaxAge(60*60*24);
		
		response.addCookie(firstName);
		response.addCookie(lastName);
		
		
		Cookie[] cookies = null;
		cookies = request.getCookies();
		
		if(null != cookies && cookies.length > 0){
			for(int i= 0; i < cookies.length; i++){
				System.out.println("Cookie Name: " + cookies[i].getName() + "   , Cookie Value : " + cookies[i].getValue());
			}
		}
		
		firstName.setMaxAge(0);
		lastName.setMaxAge(0);
		
		response.addCookie(firstName);
		response.addCookie(lastName);
		
		cookies = request.getCookies();
		
		if(null != cookies && cookies.length > 0){
			for(int i= 0; i < cookies.length; i++){
				System.out.println("Cookie Name: " + cookies[i].getName() + "   , Cookie Value : " + cookies[i].getValue());
			}
		}*/
		/*HttpSession session = request.getSession(true);
		Date createTime = new Date(session.getCreationTime());
		Date lastAccessTime = new Date(session.getLastAccessedTime());
		
		String title = "Welcome Back!!";
		int visitCount = 0;
		String visitCountKey = "visitCount";
		String userIDKey = "user ID";
		String userid = "abcd";
		
		if(session.isNew()){
			title = "Welcome to my Web Page!!";
			session.setAttribute(userIDKey, userid);
			
		}else{
			visitCount = (int) session.getAttribute(visitCountKey);
			visitCount += 1;
			userid = (String)session.getAttribute("userID");
		}
		
		session.setAttribute("visitCount", visitCount);
		
		out.println("Session ID: " + session.getId() + "\n");
		out.println("Title: " + title + "\n");
		out.println("Visit Count: " + visitCount + "\n");
		out.println("Last Access Time: " + lastAccessTime + "\n");
		out.println("User ID: " + userid + "\n");*/
		/*session.invalidate();*/
		
		response.setContentType("text/html");
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		
		
		if("user1".equalsIgnoreCase(userName) && "password".equalsIgnoreCase(password)){
			RequestDispatcher rd = request.getRequestDispatcher("WelcomeServlet");
			rd.forward(request, response);
			
		}else{
			RequestDispatcher rd = request.getRequestDispatcher("/index.html");
			rd.include(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
