
//document.getElementById('submit').addEventListener('click', addDetails);



function getInputVal(id)
{
    return document.getElementById(id).value;
}


async function addDetails() {
    var name = getInputVal("name");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    console.log("i am here");
  

// const cityRef = doc(db, 'Details', 'BJ');
// setDoc(cityRef, { capital: true }, { merge: true });
// Add a new document in collection "cities"
db.collection("Details").doc(email).set({
    name: name,
    email: email,
    phone: phone,
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}