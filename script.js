let res = fetch ("https://jsonware.com/api/v1/json/5019db6b-ff5a-45bd-afc1-ae10a2d34401");

var btn = document.querySelector(".btn");
var qte = document.querySelector(".quote");

res.then((response) => {
    // console.log(response.status);
    // console.log(response.ok);
    return response.json();  
}).then((response) => {
    console.log(response.data);
   let count = 0;
   btn.addEventListener("click", () => {
    qte.textContent = response.data[count].quote;
    console.log("clicked");
    count++;

    if(count >= response.data.length) {
        qte.innerHTML = "Cheers!! You May Kindly Refresh The Page Now!";
        return true;
    }
   })

    // btn.addEventListener("click", () => {
        // console.log(response.data[1]);
        // e.preventDefault();
        // qte.innerHTML = JSON.stringify(response.data[9].quote);
        // (

        // response.data.forEach((quote) => {
        //     qte.innerHTML = JSON.stringify(quote);
        // });

        // for (let id of response.data) {
        //     qte.innerHTML = JSON.stringify(response.data[9].quote);
        // }
            
        //     for(let i = 0; i <= response.data.length - 1; i++){
        //         qte.innerHTML = JSON.stringify(response.data[i].quote);
        //     }
        // // )
    // })
    // console.log(response.data[0]);
    
})

// data.quote.innerHTML = response.data.quote;

// var btn = document.querySelector(".btn");
// var qte = document.querySelector(".quote");

// console.log(quote);

// btn.addEventListener("click", () => {
//     // e.preventDefault();
//     qte.innerHTML =  "Happy New Year 2023";
// })

// btn.onclick = () => {
//     quote.innerHTML = query();
// }