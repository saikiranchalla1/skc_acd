package com.acadgild.javalearning;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.InvalidClassException;

public class Exceptions {

	static {
		System.out.println("hello");
	}

	public static void main(String[] args) throws FileNotFoundException {
		File file = new File("D:\testing.txt");
		try{
			throw new NumberFormatException();
		}catch(ArrayIndexOutOfBoundsException e){
			System.out.println(e.getMessage());
		}catch(NumberFormatException e){
			System.out.println(e.getMessage());
			e.printStackTrace();
		}finally {
			System.out.println("Clean up");
		}
		
		/*FileReader fr = new FileReader(file);
		String[] arr = { "Divjot" };
		
		System.out.println(arr[2]);*/
	}

	static {
		System.out.println("hello!!!");
	}
}
