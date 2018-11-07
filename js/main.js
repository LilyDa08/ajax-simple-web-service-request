 //Create the XHR Object
 let xhr = new XMLHttpRequest;
 let citation;
 //Call the open function, GET-type of request, url, true-asynchronous
 xhr.open('GET', 'https://thatsthespir.it/api', true)
 //call the onload 
 xhr.onload = function () {
     //check if the status is 200(means everything is okay)
     if (this.status === 200) {
         //return server response as an object with JSON.parse
         console.log(JSON.parse(this.responseText));
         citation = JSON.parse(this.responseText);
         document.querySelector('#quote').innerHTML = "'" + citation.quote + "'";
         document.querySelector('.author').innerHTML = "Author: " + citation.author;
         document.querySelector('.photo').src = citation.photo;
         
     } else if ( this.status === 404) {
         alert("Error")
     } else if ( this.status === 403) {
          alert("forbidden")
     }
 }
 //call send
 xhr.send();
 //Common Types of HTTP Statuses
 // 200: OK
 // 404: ERROR
 // 403: FORBIDDEN
