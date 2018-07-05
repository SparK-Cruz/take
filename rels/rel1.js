// Resolução 1 por Spark

"use strict";

function getConnectionType(){ 
     
	 if(typeof navigator.connection != 'undefined')
	 return navigator.connection.type;
	
	 if(typeof  navigator.mozconnection != 'undefined')
	 return navigator.mozConnection.type;
	 
	 if(typeof navigator.webkitConnection.type != 'undefined')
	 return navigator.webkitConnection.type; 
	 
	 throw "Icompatible browsers";
	 }
	 
	 function displayWelcome(){ 
	 let isWifi = getConnectionType() == 'wifi';
	 
	 if(!isWifi)
	 throw "You must connect to a wifi network";
	 
	 return "Welcome";
	 }
	 
	 try{
	 alert(displayWelcome());
	 
	 } catch(e){
	    alert(e);
	 }
