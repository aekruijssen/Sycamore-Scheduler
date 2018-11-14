package driver;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.Map;

public class JDBCDriver {
  private static Connection conn = null;
  private static ResultSet rs = null;
  private static PreparedStatement ps = null;
  private static final String CONNECTION_PATH = ""; // TODO Determine the connection path
  
  /**
   * Connects to the database.
   */
  private static void connect() {
    try {
    	Class.forName("com.mysql.jdbc.Driver");
    	conn = DriverManager.getConnection(CONNECTION_PATH);
    } catch (ClassNotFoundException cnfe) {
    	cnfe.printStackTrace();
    } catch (SQLException sqle) {
    	sqle.printStackTrace();
    }
  }
  
  /**
   * Closes the database connection.
   */
  private static void close() {
	  try {
		  if (rs != null) {
			  rs.close();
			  rs = null;
		  }
		  if (conn != null) {
			  conn.close();
			  conn = null;
		  }
		  if (ps != null) {
			  ps = null;
		  }
	  } catch (SQLException sqle) {
		  System.out.println("connection close error");
		  sqle.printStackTrace();
	  }
  }
  
  /**
   * Adds a user trying to register to the database.
   * @param email the user's email
   * @param fName the user's first name
   * @param lName the user's last name
   * @param password the user's password
   * @param academicPrograms the list of the the user's academic programs
   * @return false if user is unable to be added to the database
   */
  public static boolean addUser(String email, String fName, String lName, String password, ArrayList<String> academicPrograms) {
	  // Problem: where to return true/false?
	  
	  // Assume:
	  // 0th index represents degreeID (aka major) - we always assume that this exists
	  // 1st index represents degree2ID (aka major 2) - an empty string "" represents no major2
	  // 2nd index represents minorID (aka minor) - an empty string "" represents no minor
	  // 3rd index represents minor2ID (aka minor 2) - an empty string "" represents no minor2
	  connect();
	  boolean hasMajor2 = true;
	  boolean hasMinor = true;
	  boolean hasMinor2 = true;
	  if (academicPrograms.get(1) == "") {
		  hasMajor2 = false;
	  }
	  if (academicPrograms.get(2) == "") {
		  hasMinor = false;
	  }
	  if (academicPrograms.get(3) == "") {
		  hasMinor2 = false;
	  } 
	  
	  int majorDegreeID = -1;
	  int major2DegreeID = -1;
	  int minorDegreeID = -1;
	  int minor2DegreeID = -1;
	  try {
		  // Getting the degreeID associated with the user's major (i.e. academicPrograms.get(0))
		  ps = conn.prepareStatement("SELECT degreeID FROM DegreeProgram WHERE degreeName=?");
		  ps.setString(1, academicPrograms.get(0));
		  rs = ps.executeQuery();
		  if (rs.next()) {
			  majorDegreeID = rs.getInt("degreeID");
		  }
		  // Getting the degreeID associated with the user's major2 (i.e. academicPrograms.get(1))
		  if (hasMajor2 == true) {
			  ps = conn.prepareStatement("SELECT degreeID FROM DegreeProgram WHERE degreeName=?");
			  ps.setString(1, academicPrograms.get(1));
			  rs = ps.executeQuery();
			  if (rs.next()) {
				  major2DegreeID = rs.getInt("degreeID");
			  }
		  }
		  // Getting the degreeID associated with the user's minor (i.e. academicPrograms.get(2))
		  if (hasMinor == true) {
			  ps = conn.prepareStatement("SELECT degreeID FROM DegreeProgram WHERE degreeName=?");
			  ps.setString(1, academicPrograms.get(2));
			  rs = ps.executeQuery();
			  if (rs.next()) {
				  minorDegreeID = rs.getInt("degreeID");
			  }
		  }
		  // Getting the degreeID associated with the user's minor2 (i.e. academicPrograms.get(2))
		  if (hasMinor2 == true) {
			  ps = conn.prepareStatement("SELECT degreeID FROM DegreeProgram WHERE degreeName=?");
			  ps.setString(1, academicPrograms.get(3));
			  rs = ps.executeQuery();
			  if (rs.next()) {
				  minor2DegreeID = rs.getInt("degreeID");
			  }
		  }
		  
		  
		  ps = conn.prepareStatement("INSERT INTO Users(email, fname, lname, pass, degreeID, degree2ID, minorID, minor2ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);");
		  ps.setString(1, email);
		  ps.setString(2, fName);
		  ps.setString(3, lName);
		  ps.setString(4, password);
		  ps.setInt(5, majorDegreeID);
		  if (hasMajor2 == true) {
			  ps.setInt(6, major2DegreeID);
		  }
		  else {
			  ps.setNull(6, Types.INTEGER);
		  }
		  if (hasMinor == true) {
			  ps.setInt(7, minorDegreeID);
		  }
		  else {
			  ps.setNull(7, Types.INTEGER);
		  }
		  if (hasMinor2 == true) {
			  ps.setInt(6, minor2DegreeID);
		  }
		  else {
			  ps.setNull(6, Types.INTEGER);
		  }
		  ps.executeUpdate();
		  return true;
		  
	  } catch (SQLException sqle) {
		  System.out.println("SQLException in function addUser()");
		  sqle.printStackTrace();
	  } finally {
		  close();
	  }
	  return false;
  }
  
  /**
   * Verifies if a user trying to login is registered in the database.
   * @param email the user's email
   * @param password the user's password
   * @return false if the user is not authenticated against the database
   */
  public static boolean isUserRegistered(String email, String password) {
	  // Problem: case sensitivity?
	  connect();
	  try {
		  ps = conn.prepareStatement("SELECT pass FROM Users WHERE email=?");
		  ps.setString(1, email);
		  rs = ps.executeQuery();
		  if (rs.next()) {
			  if (password.equals(rs.getString("pass"))) {
				  return true;
			  }
		  }
	  } catch (SQLException sqle) {
		  System.out.println("SQLException in function isUserRegistered()");
		  sqle.printStackTrace();
	  } finally {
		  close();
	  }
	  return false;
  }
  
  /**
   * Returns the user's registered information on the database and requested schedule
   * @param email the user's email
   * @param degreeProgramName the degree program name for which to get the schedule
   * @return null if the specified user information or the requested schedule cannot be found
   */
  public static ArrayList<ArrayList<String>> getUserInformation(String email, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Returns the primary major for the specified user.
   * @param email the user's email
   * @return null if the user does not have a registered major
   */
  public static String getPrimaryMajor(String email) {
	  connect();
	  try {
		  ps = conn.prepareStatement("SELECT degreeName FROM Users u, DegreeProgram dp WHERE email=? AND u.degreeID=dp.degreeID");
		  ps.setString(1, email);
		  rs = ps.executeQuery();
		  if (rs.next()) {
			  return rs.getString("degreeName");
		  }
	  } catch (SQLException sqle) {
		  System.out.println("SQLException in function getPrimaryMajor()");
		  sqle.printStackTrace();
	  } finally {
		  close();
	  }
	  return null;
  }
  
  /**
   * Updates the user's information on the database.
   * @param email the user's email
   * @param updates the key-value pairs of the user's information to update
   * @return false if the user's information is unable to be updated in the database
   */
  public static boolean updateUser(String email, Map<String, String> updates) {
    //TODO may not be necessary
  }
  
  /**
   * Updates the user's specified degree program.
   * @param email the user's email
   * @param degreeProgramName the name of the degree program to be changed to
   * @param category the type of degree program: primary/secondary major/minor
   * @return false if the user's specified degree program is unable to be updated in the database
   */
  public static boolean updateDegreeProgram(String email, String degreeProgramName, String category) {
	  connect();
	  try {
		  int newDegreeID = -1;
		  // Getting the degreeID associated with the degreeProgramName
		  ps = conn.prepareStatement("SELECT degreeID FROM DegreeProgram WHERE degreeName=?");
		  ps.setString(1, degreeProgramName);
		  rs = ps.executeQuery();
		  if (rs.next()) {
			  newDegreeID = rs.getInt("degreeID");
		  }
		  if (category == "primary major") {
			  ps = conn.prepareStatement("UPDATE Users SET degreeID=? WHERE email=?");
			  ps.setInt(1, newDegreeID);
			  ps.setString(2,  email);
			  return true;
		  }
		  else if (category == "secondary major") {
			  ps = conn.prepareStatement("UPDATE Users SET degree2ID=? WHERE email=?");
			  ps.setInt(1, newDegreeID);
			  ps.setString(2,  email);
			  return true;
		  }
		  else if (category == "primary minor") {
			  ps = conn.prepareStatement("UPDATE Users SET minorID=? WHERE email=?");
			  ps.setInt(1, newDegreeID);
			  ps.setString(2,  email);
			  return true;
		  }
		  else if (category == "secondary minor") {
			  ps = conn.prepareStatement("UPDATE Users SET minor2ID=? WHERE email=?");
			  ps.setInt(1, newDegreeID);
			  ps.setString(2,  email);
			  return true;
		  }
	  } catch (SQLException sqle) {
		  System.out.println("SQLException in function updateDegreeProgram()");
		  sqle.printStackTrace();
	  } finally {
		  close();
	  }
	  return false;
  }
  
  /**
   * Remove the user's specified degree program if and only if it is not the primary major.
   * @param email the user's email
   * @param degreeProgramName the name of the degree program to be removed
   * @param category the type of degree program: primary/secondary major/minor
   * @return false if the user's specified degree program is unable to be removed from the database
   */
  public static boolean removeDegreeProgram(String email, String degreeProgramName, String category) {
	  connect();
	  try {
		  if (category == "secondary major") {
			  ps = conn.prepareStatement("UPDATE Users SET degree2ID=? WHERE email=?");
			  ps.setNull(1, Types.INTEGER);
			  ps.setString(2,  email);
			  return true;
		  }
		  else if (category == "primary minor") {
			  ps = conn.prepareStatement("UPDATE Users SET minorID=? WHERE email=?");
			  ps.setNull(1, Types.INTEGER);
			  ps.setString(2,  email);
			  return true;
		  }
		  else if (category == "secondary minor") {
			  ps = conn.prepareStatement("UPDATE Users SET minor2ID=? WHERE email=?");
			  ps.setNull(1, Types.INTEGER);
			  ps.setString(2,  email);
			  return true;
		  }
	  } catch (SQLException sqle) {
		  System.out.println("SQLException in function removeDegreeProgram()");
		  sqle.printStackTrace();
	  } finally {
		  close();
	  }
	  return false;
  }
  
  /**
   * Updates the user's password if and only if it is a new password. 
   * @param email the user's email
   * @param oldPassword the user's old password used to authenticate the request
   * @param newPassword the user's new password
   * @return false if unable to update the user's password
   */
  public static boolean updatePassword(String email, String oldPassword, String newPassword) {
    connect();
    try {
    	ps = conn.prepareStatement("SELECT pass FROM Users WHERE email=?");
    	ps.setString(1, email);
    	rs = ps.executeQuery();
    	if (rs.next()) {
    		if (oldPassword.equals(rs.getString("pass"))) {
    			ps = conn.prepareStatement("UPDATE Users SET pass=? WHERE email=?");
    			ps.setString(1, newPassword);
    			ps.setString(2, email);
    			return true;
    		}
    	}
    } catch (SQLException sqle) {
    	System.out.println("SQLException in function updatePassword()");
    	sqle.printStackTrace();
    } finally {
    	close();
    }
    return false;
  }
  
  /**
   * Returns the user's schedule for the requested degree program.
   * @param email the user's schedule
   * @param degreeProgramName the degree program name for which to get the schedule
   * @return null if unable to get the user's schedule
   */
  public static ArrayList<ArrayList<String>> getSchedule(String email, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Updates the user's schedule on the database.
   * @param email the user's email
   * @param degreeProgramName the degree program name for which to update the schedule
   * @param updates the key-value pairs of the user's schedule information to update
   * @return false if the user's schedule is unable to be updated in the database
   */
  public static boolean updateSchedule(String email, String degreeProgramName, Map<String, String> updates) {
    //TODO may not be necessary
  }
  
  /**
   * Deletes the user's schedule on the database.
   * @param email the user's email
   * @param degreeProgramName the degree program name for which to update the schedule
   * @return false if the user's schedule is unable to be deleted from the database
   */
  public static boolean deleteSchedule(String email, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Adds a class to the specified degree program for the specified user.
   * @param email the user's email
   * @param className the name of the class to be added
   * @param degreeProgramName the degree program name for which to add the class to
   * @return false if the class is unable to be added
   */
  public static boolean addClassToSchedule(String email, String className, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Removes a class from the specified degree program for the specified user.
   * @param email the user's email
   * @param className the name of the class to be removed
   * @param degreeProgramName the degree program name from which to remove the class from
   * @return false if the class is unable to be removed
   */
  public static boolean removeClassFromSchedule(String email, String className, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Returns the classes for the specified degree program.
   * @param degreeProgramName the degree program name for which to get classes for
   * @return null if unable to get classes from the database for the specified degree program name
   */
  public static ArrayList<ArrayList<String>> getClasses(String degreeProgramName) {
    //TODO
  }
  
}
