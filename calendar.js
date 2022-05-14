const date = new Date();

const renderCalendar = () => {
    date.setData(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(), // Obtiene el anio usando la fecha local.
        date.getMonth() + 1, // Obtiene el mes usando la fecha local.
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(), // Obtiene el anio usando la fecha local.
        date.getMonth(), // Obtiene el mes usando la fecha local.
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDay = 7 - lastDayIndex - 1;

    const month = [
        "January","February","March","April",
        "May","June","July","August",
        "September","October","November","Decembar",
    ];
    document.querySelector(".content h1").innerHTML = month[date.getMonth()];

    document.querySelector(".content p").innerHTML = new Date().toDateString();

    let days = "";

    for(let x = firstDayIndex; x > 0; x--){
        days += `<div class="previous-days">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        }   else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDay; j++) {
        days += `<div class="next-days">${j}</div>`;
        monthDays.innerHTML = days;        
    }
};

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});
renderCalendar;