
 var firebaseConfig = {
  apiKey: "AIzaSyDIxIwA0FDOejMFNE-hC5LQRjiXAoM5-es",
  authDomain: "kwitter-7afab.firebaseapp.com",
  databaseURL: "https://kwitter-7afab-default-rtdb.firebaseio.com",
  projectId: "kwitter-7afab",
  storageBucket: "kwitter-7afab.appspot.com",
  messagingSenderId: "963846874023",
  appId: "1:963846874023:web:4c2911fe19471da1ad0c82"
};
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML= "welcome"+ user_name;

function add_room(){
room_name =document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({

  purpose : "adding room name "
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
 Room_names = childKey;
 console.log("Room Name-"+Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"</div> <hr> ";
 document.getElementById("output").innerHTML+=row;
});
});
}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}