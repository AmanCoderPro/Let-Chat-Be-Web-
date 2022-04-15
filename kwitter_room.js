var firebaseConfig = {
    apiKey: "AIzaSyBoysLM1NVYxD8yxiX8BnuSHLP_q8V5XRQ",
    authDomain: "let-chat-be-web.firebaseapp.com",
    projectId: "let-chat-be-web",
    storageBucket: "let-chat-be-web.appspot.com",
    messagingSenderId: "455013901320",
    appId: "1:455013901320:web:ae9c57b10430177ef35dbd"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding the room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}