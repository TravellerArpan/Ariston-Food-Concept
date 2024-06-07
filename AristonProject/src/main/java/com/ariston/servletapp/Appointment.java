package com.ariston.servletapp;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/appoint")
public class Appointment extends HttpServlet{
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setContentType("text/html");
		
		String clientName = req.getParameter("name").trim() ; 
		String clientEmail = req.getParameter("email") ;
		String clientText = req.getParameter("text") ; 
		
//		if(cheakName(clientName) && cheakName(clientText)) {
			try {
				SendEmail.sendingEmail(clientName, clientEmail, clientText);
			}catch (Exception e) {
				System.out.println("hihihi");
				e.printStackTrace();
			}
//		}else{
//			System.out.println("Enter correct. details");
//		}
		PrintWriter out = resp.getWriter();
        out.println("<html><body>");
        out.println("<h1>Form Submitted Successfully!</h1>");
        out.println("</body></html>");
        
	}
	public boolean cheakName(String name ){
		if(!(name.length() <= 2)) {
			boolean flag = true ;  
			for(int i= 0 ; i < name.length() ; i++) {
				if((name.charAt(i) >= 97 && name.charAt(i) <= 122)||(name.charAt(i) >= 65 && name.charAt(i) <= 90)) {
					flag = true ; 
				}else {
					flag = false ;
				}
			}
			return flag ; 
		}
		return false;
	}
	public boolean cheakText(String text) {
		if(text.length() <= 200) {
			return true ; 
		}
		else {
			return false ; 
		}
	}
}
