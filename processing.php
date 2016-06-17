<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" href="ticketStyle.css"> <!-- link to css stylesheet -->
</head>

<body>

<fieldset>
<br><br>
<h1>Form was submitted!</h1>
<br><br>
<a href="http://nrutzman.comlu.com/index.html">Submit another ticket</a>
<br><br>
</fieldset>

<?php

	$fileName = "ticket.xml";
	$XMLDoc = new DOMDocument("1.0", "utf-8");
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		
		// load in file if it exists
		if(file_exists($fileName)) {
			$XMLDoc->load($fileName);
		}
		else {
			
			$XMLDoc->loadXml("<tickets></tickets>");
		}
		
		// get tickets element (root node)
		$ticketsElem = $XMLDoc->getElementsByTagName("tickets")->item(0);
		
		// create & append ticket node
		$ticketElem = $XMLDoc->createElement("ticket");
		$ticketsElem->appendChild($ticketElem);
		
		// create & append contact element
		$contactElem = $XMLDoc->createElement("contactInfo");
		$ticketElem->appendChild($contactElem);
		
		// create & append ticketInfo node
		$ticketInfoElem = $XMLDoc->createElement("ticketInfo");
		$ticketElem->appendChild($ticketInfoElem);
		
		// read inputs from form, insert to XML nodes
		$contactElem->appendChild($XMLDoc->createElement("id", $_POST["id"]));
		$contactElem->appendChild($XMLDoc->createElement("firstName", $_POST["firstName"]));
		$contactElem->appendChild($XMLDoc->createElement("lastName", $_POST["lastName"]));
		$contactElem->appendChild($XMLDoc->createElement("email", $_POST["email"]));
		$contactElem->appendChild($XMLDoc->createElement("dayPhone", $_POST["dayPhone"]));
		$contactElem->appendChild($XMLDoc->createElement("eveningPhone", $_POST["eveningPhone"]));
		$ticketInfoElem->appendChild($XMLDoc->createElement("startDate", $_POST["startDate"]));
		$ticketInfoElem->appendChild($XMLDoc->createElement("description", $_POST["description"]));
		$ticketInfoElem->appendChild($XMLDoc->createElement("ip", $_POST["ip"]));
		$ticketInfoElem->appendChild($XMLDoc->createElement("criticality", $_POST["criticality"]));
		
			
		$XMLDoc->formatOutput = true;
		$XMLDoc->save($fileName);
		
	}
		
		
?>

</body>
</html>