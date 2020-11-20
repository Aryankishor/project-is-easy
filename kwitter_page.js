
//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    function send()
    {
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
     document.getElementById("msg").value="";    
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
