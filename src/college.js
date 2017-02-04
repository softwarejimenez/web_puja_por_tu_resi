/**
* @author antonio Jimenez (softwarejimenez)
* @version 0.1
*/
//////////////////////////////////////////////////////////////////////////////
/*
*create new room
*/
//////////////////////////////////////////////////////////////////////////////
/**
*Create a room by the form
*Validate the input
*/
function create_new_room(){
    var equipment=get_equipment_selected("college_equipment_new_room");
    var room = {
      'name': document.getElementById("college_name_new_room").value,
      'price':document.getElementById("college_price_new_room").value.replace("€",""),
      'floor':document.getElementById("college_floor_new_room").value,
      'size': document.getElementById("college_size_new_room").value.replace("m2",""),
      'date_start_school': document.getElementById("college_date_start_school_new_room").value,
      'date_end_school': document.getElementById("college_date_end_school_new_room").value,
      'date_start_bid': document.getElementById("college_date_start_bid_new_room").value,
      'date_end_bid': document.getElementById("college_date_end_bid_new_room").value,
    };
    var picture={
        'picture1': document.getElementById("college_picture1_new_room"),
        'picture2': document.getElementById("college_picture2_new_room"),
        'picture3': document.getElementById("college_picture3_new_room"),
    }
    if ('files' in picture.picture1 && picture.picture1.files.length>=1){
        picture.picture1=picture.picture1.files[0];
        if ('name' in picture.picture1 && 'size' in picture.picture1) {
            if (!validate_file(picture.picture1.name,picture.picture1.size)){
                showErrorMessagesPage("College","Upload file","error validation pciture1.",false);
                return;
            }
        }else{
            showErrorMessagesPage("College","Upload file"," picture1 error.",false);
            return;
        }
    }else{
        showErrorMessagesPage("College","Upload file","No hay picture1.",false);
        console.log(picture);
        return;
    }
    if ('files' in picture.picture2 && picture.picture2.files.length>=1){
        picture.picture2=picture.picture2.files[0];
        if ('name' in picture.picture2 && 'size' in picture.picture2) {
            if (!validate_file(picture.picture2.name,picture.picture2.size)){
                showErrorMessagesPage("College","Upload file","error validation pciture1.",false);
                return;
            }
        }else{
            showErrorMessagesPage("College","Upload file"," picture2 error.",false);
            return;
        }
    }else{
        showErrorMessagesPage("College","Upload file","No hay picture2.",false);
        console.log(picture);
        return;
    }
    if ('files' in picture.picture3 && picture.picture3.files.length>=1){
        picture.picture3=picture.picture3.files[0];
        if ('name' in picture.picture3 && 'size' in picture.picture3) {
            if (!validate_file(picture.picture3.name,picture.picture3.size)){
                showErrorMessagesPage("College","Upload file","error validation pciture1.",false);
                return;
            }
        }else{
            showErrorMessagesPage("College","Upload file"," picture3 error.",false);
            return;
        }
    }else{
        showErrorMessagesPage("College","Upload file","No hay picture3.",false);
        console.log(picture);
        return;
    }

    if (room.name=="" ||  room.floor=="" ||  room.size=="" ||  room.price==""){
        showErrorMessagesPage("College","Input room","Valores de entrada incorrectos (Habitacion-general).",false);
        console.log(room)
        return;
    }
    if (room.date_start_school=="" ||  room.date_end_school=="" ||  room.date_start_bid=="" ||  room.date_start_bid==""){
        showErrorMessagesPage("College","Input room","Valores de entrada incorrectos (Fechas).",false);
        console.log(room)
        return;
    }
    var xmlHttp =new XMLHttpRequest();
    var url=window.location.protocol+"//"+window.location.host+port+"/Room/create/";
    xmlHttp.onreadystatechange = function() {
        if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
            var output= JSON.parse(xmlHttp.responseText);
            console.log(output);
            showErrorMessagesPage("College","create new room",output.message,output.success);
        }
    }
    xmlHttp.open("POST", url, true );
    xmlHttp.withCredentials = true;

    var data = new FormData();
    data.append("name", room.name);
    data.append("price", room.price);
    data.append("floor",room.floor);
    data.append("size", room.size);
    data.append("date_start_school", room.date_start_school);
    data.append("date_end_school", room.date_end_school);
    data.append("date_start_bid", room.date_start_bid);
    data.append("date_end_bid", room.date_end_bid);
    data.append("picture1", picture.picture1);
    data.append("picture2", picture.picture2);
    data.append("picture3", picture.picture3);
    data.append("tv", equipment.college_icon_tv_new_room);
    data.append("desk", equipment.college_icon_desk_new_room);
    data.append("bath", equipment.college_icon_bath_new_room);
    data.append("wardrove", equipment.college_icon_wardrove_new_room);
    xmlHttp.send(data);
}

//////////////////////////////////////////////////////////////////////////////
/*
*COLLGE LIST ROOMS , SHOW table with all the rooms
*/
//////////////////////////////////////////////////////////////////////////////
/**
*Get every room and display as a row in the table. nombre,inicio academico,fin academico,inicio puja,fin puja,tamaño,planta,tv, bath, desk, wardrove
*@return tr element (row)
*/
function college_create_row_room(data){
    var tr = document.createElement('tr');
    tr.id="college_list_room_id"+data.id.toString();
    //nombre
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.name))
        tr.appendChild(td)
    //inicio academico
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.date_start_school.date.replace(" 00:00:00", "")));
        tr.appendChild(td)
    //fin academico
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.date_end_school.date.replace(" 00:00:00", "")));
        tr.appendChild(td)
    //inicio puja
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.date_start_bid.date.replace(" 00:00:00", "")));
        tr.appendChild(td)
    //fin puja
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.date_end_bid.date.replace(" 00:00:00", "")));
        tr.appendChild(td)
    //tamaño
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.size))
        tr.appendChild(td)
    //planta
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.floor))
        tr.appendChild(td)
    //cliente
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("nombre cliente"))
        tr.appendChild(td)

    //tv
        var td = document.createElement('td');
        if(data.tv){
            var icon_check_tv= document.createElement('i');
            icon_check_tv.className+="icon fa fa-check-circle"       //<i class="fa fa-check-circle" aria-hidden="true"></i>
            icon_check_tv.setAttribute("aria-hidden","true")
            td.appendChild(icon_check_tv)
        }else{
            var icon_failed_tv= document.createElement('i');
            icon_failed_tv.className+="icon fa fa-ban"       //<i class="fa fa-ban" aria-hidden="true"></i>
            icon_failed_tv.setAttribute("aria-hidden","true")
            td.appendChild(icon_failed_tv)
        }
        tr.appendChild(td)
    // bath
        var td = document.createElement('td');
        if(data.bath){
            var icon_check_bath= document.createElement('i');
            icon_check_bath.className+="icon fa fa-check-circle"       //<i class="fa fa-check-circle" aria-hidden="true"></i>
            icon_check_bath.setAttribute("aria-hidden","true")
            td.appendChild(icon_check_bath)
        }else{
            var icon_failed_bath= document.createElement('i');
            icon_failed_bath.className+="icon fa fa-ban"       //<i class="fa fa-ban" aria-hidden="true"></i>
            icon_failed_bath.setAttribute("aria-hidden","true")
            td.appendChild(icon_failed_bath)
        }
        tr.appendChild(td)
    //desk
        var td = document.createElement('td');
        if(data.desk){
            var icon_check_desk= document.createElement('i');
            icon_check_desk.className+="icon fa fa-check-circle"       //<i class="fa fa-check-circle" aria-hidden="true"></i>
            icon_check_desk.setAttribute("aria-hidden","true")
            td.appendChild(icon_check_desk)
        }else{
            var icon_failed_desk= document.createElement('i');
            icon_failed_desk.className+="icon fa fa-ban"       //<i class="fa fa-ban" aria-hidden="true"></i>
            icon_failed_desk.setAttribute("aria-hidden","true")
            td.appendChild(icon_failed_desk)
        }
        tr.appendChild(td)
    //wardrove
       var td = document.createElement('td');
       if(data.wardrove){
           var icon_check_wardrove= document.createElement('i');
           icon_check_wardrove.className+="icon fa fa-check-circle"       //<i class="fa fa-check-circle" aria-hidden="true"></i>
           icon_check_wardrove.setAttribute("aria-hidden","true")
           td.appendChild(icon_check_wardrove)
       }else{
           var icon_failed_wardrove= document.createElement('i');
           icon_failed_wardrove.className+="icon fa fa-ban"       //<i class="fa fa-ban" aria-hidden="true"></i>
           icon_failed_wardrove.setAttribute("aria-hidden","true")
           td.appendChild(icon_failed_wardrove)
       }
       tr.appendChild(td)
     //buttom remove
        var td = document.createElement('td');
        remove_buttom=document.createElement('button');
        remove_buttom.className+=" btn btn-link"
        var icon_failed_desk= document.createElement('i');
        icon_failed_desk.className+="icon fa fa-times"       //<i class="fa fa-times" aria-hidden="true"></i>
        icon_failed_desk.setAttribute("aria-hidden","true")
        remove_buttom.appendChild(icon_failed_desk)
        remove_buttom.onclick = function() {
            remove_room(data.id);
            collegeGetAllRooms();
            tr.onclick = function() {/*empty*/ };

        };
        td.appendChild(remove_buttom)
        tr.appendChild(td)

    tr.onmouseover = function() {
        college_selected_outselected_row_table(tr.id)
    };
    tr.onmouseout = function() {
        college_selected_outselected_row_table(tr.id)
    };

    tr.onclick = function() {
        college_display_specifiy_room(data);
    };
    return tr;
}

/**
*Display all the room of the college in the college_element_table_list_rooms
*/
function college_display_table_list_rooms(data){
    var father = document.getElementById("college_element_table_list_rooms");
    deleteAllChildElement(father)
    for (i = 0; i < data.length; i++) {
        father.appendChild( college_create_row_room(data[i]));
    }
}


/**
*Select a row in a table of the search room (red background-color)
* out select a row in a table of the search
*@param: id_element
*/
function college_selected_outselected_row_table(id_element){
    class_name=document.getElementById(id_element).className;
    if (class_name.includes(" selected_row_table")){
        class_name=class_name.replace("selected_row_table","");
        document.getElementById(id_element).className=class_name;
    }else{
        document.getElementById(id_element).className+= " selected_row_table";
    }
}


/**
*Get all the rooms of the college and display in the table
*/
function collegeGetAllRooms(){
    var xmlHttp =new XMLHttpRequest();
	var url=window.location.protocol+"//"+window.location.host+port+"/Room/getAll/";
	xmlHttp.open("GET", url, true );
    xmlHttp.withCredentials = true;
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
    	if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
    		var output= JSON.parse(xmlHttp.responseText);
            console.log(output)
    		if(output.success){
                college_display_table_list_rooms(output.data)
    		}else{
    			showErrorMessagesPage("College","showdata",output.message,output.success);
    		}
    	}
    }
}




/**
*remove a room (id)
*@param id of the room
*@return bool (true if it is deleted)
*/
function remove_room(id){
	var xmlHttp =new XMLHttpRequest();
	var url=window.location.protocol+"//"+window.location.host+port+"/Room/remove/"+id;
	xmlHttp.open("POST", url, true );
    xmlHttp.withCredentials = true;
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
    	if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
    		var output= JSON.parse(xmlHttp.responseText);
            console.log(output)
    		if(!output.success){
    			showErrorMessagesPage("College","remove_roome",output.message,output.success);
                return false;
    		}else{
                return true;
            }
    	}
    }
}

/**
*Dispaly data of a specific student
*@param: tab
*@param: data_student
*/
function display_specific_student(tab,data_student){
   document.getElementById(tab+"_room_specific_agreement_student_name").innerHTML="   "+data_student.name;
   document.getElementById(tab+"_room_specific_agreement_student_username").innerHTML="   "+data_student.username;
   document.getElementById(tab+"_room_specific_agreement_student_email").innerHTML="   "+data_student.email;
}


/**
*display the view of a specific room.
* Verify if display agreement or bids
* @param data_room
*/
function college_display_specifiy_room(data_room){
    document.getElementById("college_table_list_rooms").style.display="none";
    document.getElementById("college_room_specific").style.display="block";

    display_specific_room("college",data_room);

    var xmlHttp =new XMLHttpRequest();
    var url=window.location.protocol+"//"+window.location.host+port+"/Agreement/roomVerifyUnsigned/"+data_room.id;
    xmlHttp.open("GET", url, true );
    xmlHttp.withCredentials = true;
    xmlHttp.send();
    xmlHttp.onreadystatechange = function() {
        if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
            var output= JSON.parse(xmlHttp.responseText);
            console.log(output)
            if(output.success){//choose if display agreemtn or bid or anything according to the dates
                if(output.data.agreement_signed){
                    document.getElementById("college_room_specific_agreement").style.display="block";
                    //display data agreement
                    display_specific_agreement("college",output.data.agreement);
                    document.getElementById("college_room_specific_agreement_student").style.display="block";
                    //display data agreement student
                     display_specific_student("college",output.data.student);

                }else{
                    document.getElementById("college_room_specific_bids").style.display="block";
                    //get data of bids and display
                    get_display_bids(data_room.id,"college_room_specific_ul");
                }
            }else{
                document.getElementById("college_room_specific_bids").style.display="block";
                //get data of bids and display
                get_display_bids(data_room.id,"college_room_specific_ul");
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////
/*
*Routing College
*/
//////////////////////////////////////////////////////////////////////////////
/**
* Dispaly the College_list_rooms view
*/
function displayCollege_list_rooms(){
    if("collegeview"===globa_view ){
        console.log("display college_list_rooms");
    	document.getElementById("college_list_rooms").style.display="block";
        document.getElementById('college_create_room').style.display="none";
        document.getElementById('college_messages').style.display="none";


        document.getElementById("college_table_list_rooms").style.display="block";
        document.getElementById("college_room_specific").style.display="none";
        document.getElementById('college_create_room').style.display="none";
        collegeGetAllRooms();// display table list rooms
    }
}
/**
* Dispaly the college_create_room view
*/
function displayCollege_create_room(){
    if("collegeview"===globa_view ){
        console.log("display college_list_rooms");
        document.getElementById('college_create_room').style.display="block";
    	document.getElementById("college_list_rooms").style.display="none";
        document.getElementById('college_messages').style.display="none";

    }
}


/**
* Dispaly the college_create_room view
*/
function displayCollege_messages(){
    if("collegeview"===globa_view ){
        console.log("display college_list_rooms");
        document.getElementById('college_create_room').style.display="none";
    	document.getElementById("college_list_rooms").style.display="none";
        document.getElementById('college_messages').style.display="block";

    }
}
/**
* Display list rooms of the college
*/
page('/college_create_room', function(){
 	displayCollege_create_room();
});
/**
* Display list rooms of the college
*/
page('/college_list_rooms', function(){
 	displayCollege_list_rooms();
});

/**
* Display list rooms of the college
*/
page('/college_messages', function(){
 	displayCollege_messages();
});
