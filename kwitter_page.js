var firebaseConfig = {
    apiKey: "AIzaSyBoysLM1NVYxD8yxiX8BnuSHLP_q8V5XRQ",
    authDomain: "let-chat-be-web.firebaseapp.com",
    projectId: "let-chat-be-web",
    storageBucket: "let-chat-be-web.appspot.com",
    messagingSenderId: "455013901320",
    appId: "1:455013901320:web:ae9c57b10430177ef35dbd"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        room_name: room_name,
        like:0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}