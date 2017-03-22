package com.acadgild.javalearning;

public class MyException extends Exception{
	String message= "";
	public MyException(String msg){
		this.message = msg;
	}
}
