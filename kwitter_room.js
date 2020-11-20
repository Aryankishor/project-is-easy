
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBj27bEpGqTBpJKzMbO5WrEfP7--4OgWcc",
      authDomain: "kwitter-a32dc.firebaseapp.com",
      databaseURL: "https://kwitter-a32dc.firebaseio.com",
      projectId: "kwitter-a32dc",
      storageBucket: "kwitter-a32dc.appspot.com",
      messagingSenderId: "277408266970",
      appId: "1:277408266970:web:7da3bc1b4f7909000bc3e3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";


function addRoom() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
} 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room-name-" + Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirecToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}