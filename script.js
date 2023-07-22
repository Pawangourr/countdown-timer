var date = "22 july 2024 6:00 PM"
// let ndate = new Date();
// var date = new Date();
// // add a day
// date.setDate(date.getDate() + 1);





document.getElementById("end_date").innerText = date;
const inputs = document.querySelectorAll("input")

// function
let set = setInterval(() => {
const clock = () =>{
    let end = new Date(date);
    const nowdate = new Date();
    const diffenrce = (end - nowdate)/1000;
    
    if(diffenrce < 0) 
    {
        document.getElementById("end_date").innerText = "EXPIRED";
        return;
    }

    inputs[0].value = parseInt((diffenrce / 3600 / 24)); 
    inputs[1].value = parseInt((diffenrce / 3600) % 24); 
    inputs[2].value = parseInt((diffenrce / 60) % 60); 
    inputs[3].value = parseInt((diffenrce ) % 60); 
    
};

    clock()
}, 1000);

// let nw = setInterval(() => {
//     // add a day
//     date.setDate(date.getDate() + 1);
// },86400000);
// console.log(date)
