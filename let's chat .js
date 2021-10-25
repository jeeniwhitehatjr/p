
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD2OyF9m8XTQ9ul2Zo_g2FxehFeksCxcHI",
      authDomain: "let-s-chat-d2073.firebaseapp.com",
      projectId: "let-s-chat-d2073",
      storageBucket: "let-s-chat-d2073.appspot.com",
      messagingSenderId: "502162951107",
      appId: "1:502162951107:web:ace4fde5d6eb0bc27c4b76"
    };
    
    // Initialize Firebase
    const app=initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    console.log(user_name);
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

    function addroom()
    {
          room_name=document.getElementById("room name").value;
          firebase.database().ref("/").child("room_name").update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kiwtter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names)
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);window.location
"let's chat page.html"
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("let's chat.html");
}