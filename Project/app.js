function newFunction() {
    const firebaseConfig = {
        apiKey: "AIzaSyBHUwcN0_IqPBE56l0Z00Ny0hxN-Kp6aMA",
        authDomain: "project-awp.firebaseapp.com",
        databaseURL: "https://project-awp-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "project-awp",
        storageBucket: "project-awp.appspot.com",
        messagingSenderId: "388155660232",
        appId: "1:388155660232:web:7a12ecd8aa61202d0b12fd"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
  
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
  
      let FullName = document.getElementById('name').value;
      let Email = document.getElementById('email').value;
      let PhoneNumber = document.getElementById('phone').value;
      let Date = document.getElementById('date').value;
      let Message = document.getElementById('message').value;
  
      db.collection("FormData").add({
        FullName: FullName,
        Email: Email,
        PhoneNumber: PhoneNumber,
        Date: Date,
        Message: Message
      }).then((docRef) => {
        console.log("Data saved with ID: ", docRef.id);
      }).catch((error) => {
        console.log(error);
      });
    });
  }
  