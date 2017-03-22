package com.acadgild.javalearning;

public class MyTheadSample {
	
	
	public static void main(String[] args){
		MyThread thread1 = new MyThread("Thread1");
		MyThread thread2 = new MyThread("Thread2");
		thread1.start();
		thread2.start();
	}
	
}


class MyThread implements Runnable{
	private Thread t;
	private String threadName;
	
	
	MyThread(String name){
		this.threadName = name;
	}
	@Override
	public void run() {
		System.out.println("Starting thread" + this.threadName);
		// TODO Auto-generated method stub
		for(int i = 0; i <= 10; i++){
			System.out.println("Thread:" + i);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	
	public void start(){
		System.out.println("Starting thread" + this.threadName);
		t = new Thread(this, threadName);
		t.start();
	}
}

/*class MyThread2 extends Thread {
	public void run(){
		
	}
}*/
