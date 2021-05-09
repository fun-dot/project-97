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
  function adduser(){
   user_name =  document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
    
  }