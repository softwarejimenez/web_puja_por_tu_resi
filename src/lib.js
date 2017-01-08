/**
* @author antonio Jimenez (softwarejimenez)
* @version 0.1
*/

/**
* show the error in a div with is block in this moment
* @param {string}page of the view, 2 possibility profile or Welcome
* @param {string}the element of the error, such as: login, message, etc
* @param {message}message of error
* @returns {boolean} return true is the operation is success
*/
function showErrorMessagesPage(page,element,message,success){
    if (typeof(message) === 'string' && typeof(element) === 'string' && typeof(page) === 'string' &&
        (page=="Welcome" || page=="Student" || page=="College")){
        document.getElementById("showErrorMessage"+page+"Page").style.display="block";
        if(success){
            document.getElementById("showErrorMessage"+page+"Page").className ="alert alert-success";
        }
        else{
            document.getElementById("showErrorMessage"+page+"Page").className="alert alert-danger";
        }
        document.getElementById("errorMessage"+page+"Page").innerHTML=element+" : "+message;
		fade(document.getElementById("showErrorMessage"+page+"Page"),300);
        return true;
    }else{
        console.log("Incorrect input showErrorMessage.");
        return false;
    }

}


function fade(element, speed) {
var op = 1,
        timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, speed);
}


/**
* Check if the e-mail is valid
* @param {String} email
* @returns {boolean} if the e-mail is valid
*/
function validateEmail(email)  {
    if (typeof(email) === 'string'){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat))  {
            return true;
        }
    }else{
        return false;
    }
}




/**
* Check if the DNI is valid
* @param {String} DNI
* @returns {boolean} if the DNI is valid
*/
function validateDNI(dni){
    expresion_regular_dni = /^\d{8}[A-Z]$/;
    if(expresion_regular_dni.test (dni) == true){
        return true;
    }else{
        return false;
    }
}

/**
* Deleta all child of a node
* @param {element} father of the element will be deleted
*/
function deleteAllChildElement(node){
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}



/**
* display the location of the college on map
* @param {id} id of the div
* @param {latitude} latitude of the position
* @param {latitude} longitued of the position
*/
function init_map(id,latitude,longitued) {
    //get latitude,longitued from the college
    var uluru = {lat: latitude, lng: longitued};
    var map = new google.maps.Map(
        document.getElementById(id),
        {
            zoom: 10,
            center: uluru
        }
    );
    var marker = new google.maps.Marker(
        {
            position: uluru,
            map: map
        }
    );
}


// takes the form field value and returns true on valid number
function validateCreditCard(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

function validateCVV(cardNumber,cvv)
{
    // Get the first number of the credit card so we know how many digits to look for
    var $firstnumber = Number(cardNumber.substr(0, 1));
    if ($firstnumber === 3)
    {
        if (!cvv.match(/^\d{4}$/))
        {
            // The credit card is an American Express card but does not have a four digit CVV code
            return false;
        }
    }
    else if (!cvv.match(/^\d{3}$/))
    {
        // The credit card is a Visa, MasterCard, or Discover Card card but does not have a three digit CVV code
        return false;
    }
    return true;
}


function validateExpiryDate(expiry_month,expiry_year)
{
    expiry_year=parseInt(expiry_year);
    expiry_month=parseInt(expiry_month);
    var date = new Date ();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    if (year> expiry_year || (year === expiry_year && month >= expiry_month)){
        return false;
    }else{
        return true;
    }
}

    //http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without
function ValidURL(str) {
    var pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
    if(pattern.test(str)) {
        return true;
    } else {
        return false;
    }
}

function ValidatePhonenumber(tel){
    var phoneno1 = /^\d{9}$/; //XXXXXXXXX
    var phoneno2 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{9})$/; //+XX-XXXXXXXXX
    if(tel.match(phoneno1) || tel.match(phoneno2)){
        return true;
    }
    else{
        return false;
    }
 }


/*CIF
_   _ _ _ _ _ _ _   _
|_| |_|_|_|_|_|_|_| |_|
^   ^           ^   ^
|   |_ Números _|   |
|                   |
|               Dígito de control, un número ó letra:
|               {Aó1,Bó2,Có3,Dó4,Eó5,Fó6,Gó7,Hó8,Ió9,Jó0}
|
Letra de tipo de Organización, una de las siguientes:
{A,B,C,D,E,F,G,H,K,L,M,N,P,Q,S}
//http://www.microteching.com/javascript/clase-para-validar-cifs-y-nifs-por-javascript
*/
function validateCIF(cif) {
    var CIF_regExp = "^[a-zA-Z]{1}\\d{7}[a-jA-J0-9]{1}$";
    var v1 = new Array(0,2,4,6,8,1,3,5,7,9);
    var tempStr = cif.toUpperCase(); // pasar a mayúsculas
    var temp = 0;
    var temp1;
    var dc;

    // Comprueba el formato
    if (!tempStr.match(CIF_regExp)) return false;    // Valida el formato?
    if (!/^[ABCDEFGHKLMNPQS]/.test(tempStr)) return false;  // Es una letra de las admitidas ?

    for( i = 2; i <= 6; i += 2 ) {
            temp = temp + v1[ parseInt(cif.substr(i-1,1)) ];
            temp = temp + parseInt(cif.substr(i,1));
    };
    temp = temp + v1[ parseInt(cif.substr(7,1)) ];
    temp = (10 - ( temp % 10));
    if (temp==10) temp=0;
    dc  = cif.toUpperCase().charAt(8);
    return (dc==temp) || (temp==1 && dc=='A') || (temp==2 && dc=='B') || (temp==3 && dc=='C') || (temp==4 && dc=='D') || (temp==5 && dc=='E') || (temp==6 && dc=='F') || (temp==7 && dc=='G') || (temp==8 && dc=='H') || (temp==9 && dc=='I') || (temp==0 && dc=='J');
}
