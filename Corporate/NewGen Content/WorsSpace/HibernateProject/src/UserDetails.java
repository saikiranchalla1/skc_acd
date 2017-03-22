import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

@Entity
@Table (name="user")
public class UserDetails implements Serializable{
	private int userId;
	private int userId2;
	private String username;
	
	private Date joinedDate;
	private String description;
	/*private Address address;*/
	private Set<Address> setofAddresses = new HashSet();
	
	@Id @GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name="id")
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	/*@Transient*/
	@Column(name="user_name")
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Temporal(TemporalType.DATE)
	public Date getJoinedDate() {
		return joinedDate;
	}
	public void setJoinedDate(Date joinedDate) {
		this.joinedDate = joinedDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Id @GeneratedValue(strategy= GenerationType.TABLE)
	@Column(name="UserID2")
	public int getUserId2() {
		return userId2;
	}
	public void setUserId2(int userId2) {
		this.userId2 = userId2;
	}
	@ElementCollection
	@JoinTable(name="USER_ADDRESS", joinColumns={@JoinColumn(name="id"), @JoinColumn(name="UserID2")})
	public Set<Address> getSetofAddresses() {
		return setofAddresses;
	}
	public void setSetofAddresses(Set<Address> setofAddresses) {
		this.setofAddresses = setofAddresses;
	}
	
	/*@Embedded
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}*/
	
}
