package com.ariston.servletapp;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
public class SendEmail {
	public static void sendingEmail(String name , String clintEmail , String text) {
		
		Properties props = new Properties() ;    
		String user = "companydemo69@gmail.com" ; 
		String password = "Jaimaakali" ;
		
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587"); 
		props.put("mail.smtp.auth", "true");
		
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.tsl.trust", "smtp.gmail.com");
		
//		props.put("mail.smtp.tsl.trust", "smtp.gmail.com");
//	    props.put("mail.smtp.ssl.protocols", "TLSv1.2");
		

		
		Session session = Session.getInstance(props , new Authenticator() {
			public PasswordAuthentication getPasswordAuthentication(){
				return new PasswordAuthentication(user, password) ;
			}
		});
		
		
		
		try {
			
			MimeMessage msg = new MimeMessage(session) ; 
		
			msg.setFrom(new InternetAddress(user));
		
			msg.setRecipients(Message.RecipientType.TO ,  InternetAddress.parse("arpanroy606@gmail.com"));
			msg.setSubject("message from :-"+ name);
			msg.setSentDate(new Date()) ; 
			msg.setText("my mail-id is"+clintEmail+"\n my message is :-" +text);
		
			Transport.send(msg);
		
		}catch (Exception e) {
			System.out.println("handled1");
			e.printStackTrace();
		}
	}
}
