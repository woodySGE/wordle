document.getElementById("submitbtn").onclick = makeCookie;

function makeCookie() {
    //word = document.cookie(value)
    var input = document.getElementsById("chosenword")[0];

    if (input) {
        document.cookie(input)
    }


}


    
    
 //       function makeCookie() {
   //         //word = document.cookie(value)
     //       var input = document.getElementsById("chosenword")[0];
//
 //           if (input) {
  //              //let thing = document.getElementsById("test")[0];
   //             //thing = input
    //            document.cookie(input)
     //       }
      //  }