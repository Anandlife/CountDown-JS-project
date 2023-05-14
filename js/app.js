const endDate = "16 Jan 2023 10:18 AM"

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input");



// const clock =()=>{

// }


function clock() {

    const end = new Date(endDate);

    const now = new Date();

    const diff = (end - now) / 1000;

    if (diff < 0) {
        return;
    }

    // console.log(diff);

    // remaining days 

    inputs[0].value = Math.floor(diff / 3600 / 24);

    // console.log(Math.floor(diff / 3600) % 24);

    // remaining hours 

    inputs[1].value = Math.floor(diff / 3600) % 24;

    // remaining minuuts 

    inputs[2].value = Math.floor(diff / 60) % 60;

    // remaning Seconds 

    inputs[3].value = Math.floor(diff) % 60;


}

// clock();

setInterval(
    () => {

        clock();

    },
    1000
)

