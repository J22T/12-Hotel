// what is the path to the JSON file?
const apiURL = ""

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
    
    
    
    
    
    
    
    
}); //end of "then" fat arrow function








let theImageTag = document.createElement("img");
theImageTag.src=myList[i].photo;
console.log(myList[i].photo);

let theHotelTag = document.createElement("figcaption");
theHotelTag.textContent = myList[i].name;
console.log(myList[i].name);

let theIconLetTag = document.createElement("i");
theIconLeftTag.className = "icon ion-md-car";

let theAddress1Tag = document.createElement("p");
theAddress1Tag.textContent = myList[i].address[0];
console.log(myList[i].address[0]);

let theAddress2Tag = document.createElement("p");
theAddress2Tag.textContent = myList[i].address[1];
console.log(myList[i].address[1]);

let theIconRightTag = document.createElement("i");
theIconRightTag.className = "icon ion-md-call";

let thePhoneTag = document.createElement("p");
thePhoneTag.textContent = myList[i].phone;
console.log(myList[i].phone);

let theSpanLeftTag = document.createElement("span");
theSpanLeftTag.appendChild(theIconLeftTag);
theSpanLeftTag.appendChild(theAddress1Tag);
theSpanLeftTag.appendChild(theAddress2Tag);

let theSpanRightTag = document.createElement("span");
theSpanRightTag.appendChild(theIconRightTag);
theSpanRightTag.appendChild(thePhoneTag);