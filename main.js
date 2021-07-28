menu_list_array = ["Veg Margherita Pizza",
                   "Veg Supereme Pizza",
                   "Chiken  tandoori pizza",
                   "x-tra chicken cheese pizza"];
                    

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var 1=0;1<menu_list_array.length;1++){
htmldata=htmldata+'<li>' + menu_list_array[i] + </li>
}
htmldata=htmldata+"<ol>"
document.getElementById("display_menu").innerHTML = htmldata


function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="section class='cards'>"
for (var 1=0; menu_list_array.length;i++){    
    
htmldata=htmldata + '<div class="card">'
+'<img src="images/PizzaImg.png"/>'
+ menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerhtml = htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push (item);
add_item();
}