import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class MyMainClass {
	public static void main(String[] args) {
		UserDetails user = new UserDetails();
		Address address1 = new Address();
		Address address2 = new Address();
		address1.setCity("Delhi");
		address1.setStreet("Street 1");
		address1.setState("New Delhi");
		address1.setPincode("110 001");
		
		address2.setCity("Delhi");
		address2.setStreet("Street 1");
		address2.setState("New Delhi");
		address2.setPincode("110 001");
		
		user.setUsername("Preeti");
		user.setJoinedDate(new Date());
		user.setDescription("some description");
		user.getSetofAddresses().add(address1);
		user.getSetofAddresses().add(address2);
		
		//Session Factory
		//Session from the SF
		//Session to save the objects
		
		SessionFactory sf = new Configuration().configure().buildSessionFactory();
		Session session = sf.openSession();

		session.beginTransaction();
		session.save(user);
		session.getTransaction().commit();
		session.close();
		
		//Retrieve the stored object
		/*user = null;
		session = sf.openSession();
		session.beginTransaction();
		user = session.get(UserDetails.class, 1);
		
		System.out.println("User Name:  " + user.getUsername());
		
		session.close();*/
	}
}
