package com.acadgild.javalearning;

public class MyFirstClass {
	public static void main(String[] args) {
		/* System.out.println("Hello World!!!"); */
		String[] myArr = { "Preeti", "Divjot", "Tarang", "Piyush" };
		Integer[] myIntArr = new Integer[10];

		/*
		 * for(String str : myArr){ System.out.println(str + "  " +
		 * str.length()); System.out.println(str +" " + str.toLowerCase());
		 * System.out.println(str +" " + str.toUpperCase());
		 * 
		 * }
		 */
		String myStr = "        Pooja Gamta     ";
		System.out.println(myStr.trim());
		String myStr1 = "Kriti";

		System.out.println(myStr1.substring(3));
		/*System.out.println(myStr1.substring(2, myStr1.indexOf(myStr1.length() - 1)));*/
		System.out.println(myStr1.charAt(2));
		System.out.println(myStr1.indexOf(myStr1.charAt(2)));
		
		System.out.println("Acad ".concat(" Gild"));
		
		System.out.println("Testing".equals("testing"));
		System.out.println("Testing".equalsIgnoreCase("testing"));
		
		String myString = "Sugar is sweet. Sugarcane is not sugar. White Sugar is harmful to health. Brownsugar is also not sugar";
		
		String[] tempArr = myString.split(" ");
		int count = 0;
		for(String currentStr : tempArr){
			if(currentStr.contains("sugar") || currentStr.contains("Sugar")){
				count+= 1;
			}
		}
		System.out.println("Count =  " + count);
		System.out.println("Sukriti".startsWith("S"));
		System.out.println("Sukriti".endsWith("S"));
		/*
		 * for(String str : args){ System.out.println(str); } int aVar =
		 * Integer.valueOf(args[0]); int bVar = Integer.valueOf(args[1]);
		 * 
		 * 
		 * if(aVar == 10){ System.out.println("aVar is 10"); }else if(bVar ==
		 * 10){ System.out.println("bVar is 10"); }else{ System.out.println(
		 * "None is 10"); }
		 */
		Object newObj = new Object();
		System.out.println(newObj instanceof MyFirstClass);
		System.out.println(new MyImplClass() instanceof IMyMarker);
	}

	protected void myMethod() {
		System.out.println("From MyFirstClass");
	}
}
