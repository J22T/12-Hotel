// what is the path to the JSON file?
const apiURL = "../hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);



    console.log(myList.length);
    for (i = 0; i < myList.length; i++) {




    
    
    let theImageTag = document.createElement("img");
    theImageTag.src = myList[i].photo;

    let theCaptionTag = document.createElement("figcaption");
    theCaptionTag.textContent = myList[i].name;

    let theFigureTag = document.createElement("figure");
    theFigureTag.appendChild(theImageTag);
    theFigureTag.appendChild(theCaptionTag);













    document.getElementById('myCards').appendChild(theFigureTag);

  }
    
}); //end of "then" fat arrow function








let theImageTag = document.createElement("img");
theImageTag.src=theList[i].photo;
theImageTag.src=theList[i].name;
console.log(myList[i].photo);

let theHotelTag = document.createElement("figcaption");
theHotelTag.textContent = theList[i].name;
console.log(theList[i].name);

let theIconLeftTag = document.createElement("i");
theIconLeftTag.className = "icon ion-md-car";

let theAddress1Tag = document.createElement("p");
theAddress1Tag.textContent = theList[i].address[0];
console.log(theList[i].address[0]);

let theAddress2Tag = document.createElement("p");
theAddress2Tag.textContent = theList[i].address[1];
console.log(theList[i].address[1]);

let theIconRightTag = document.createElement("i");
theIconRightTag.className = "icon ion-md-call";

let thePhoneTag = document.createElement("p");
thePhoneTag.textContent = theList[i].phone;
console.log(theList[i].phone);

let theSpanLeftTag = document.createElement("span");
theSpanLeftTag.appendChild(theIconLeftTag);
theSpanLeftTag.appendChild(theAddress1Tag);
theSpanLeftTag.appendChild(theAddress2Tag);

let theSpanRightTag = document.createElement("span");
theSpanRightTag.appendChild(theIconRightTag);
theSpanRightTag.appendChild(thePhoneTag);