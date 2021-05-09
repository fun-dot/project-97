
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
room_name = localStorage.getItem("room_name");


function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message: msg,
like:0
});
document.getElementById("msg").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
like = message_data['like'];
message = message_data['message'];

name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4> ";
message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_with_tag = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like :" +like+"</span> </button> <hr>";
row = name_with_tag + message_with_tag +like_with_tag +span_with_tag;
document.getElementById("output").innerHTML += row;




      } });  }); }
getData();
 function updateLike(message_id){
console.log("clicked on like button-" + message_id);
button_id = message_id;
likes=document.getElementById(button_id).value;
update_likes = Number(likes) +1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
      like : update_likes
});

 }
 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace ("index.html");
      }