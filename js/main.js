// Calendar app


// DOM variables
const cells = document.querySelectorAll('.calendar-cells td');
const month_display = document.getElementById('month');
const year_display = document.getElementById('year');

// Controls for toggling months and years
const month_back = document.getElementById('month-back');
const month_forward = document.getElementById('month-forward');
const year_back = document.getElementById('year-back');
const year_forward = document.getElementById('year-forward');


const month_dictionary = {
    0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July',
    7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'
};


//CURRENT YEAR & MONTH
let year = new Date().getFullYear();
let month = new Date().getMonth();




// populate the calendar with the details of the selected month and year
const populate_calendar = (year, month) => {
    const dates = generate_days(year, month);

    year_display.innerText = year;
    month_display.innerText = month_dictionary[month];

    for(let i = 0; i < cells.length; i++) {
        cells[i].innerText = "X";
        if(dates.length === 0) continue
        if(cells[i].cellIndex === dates[0][1]) {
            cells[i].innerText = dates[0][0];
            dates.shift();
        }
    }
};

// Generate a mapping of all days of the given month and year with their day-of-week
const generate_days = (year, month) => {
    let date_and_days = [];
    const lastday = new Date(year, month + 1, 0).getDate(); //last day of current month
    
    for(let i = 1; i <= lastday; i++) {
        date_and_days.push([i, new Date(year, month, i).getDay()]);
    }

    return date_and_days
};


// Change month
month_forward.onclick = () => {
    if(month === 11) {
        year = year + 1;
        month = 0;
    } else {
        month = month + 1;
    }
    populate_calendar(year, month);
}

month_back.onclick = () => {
    if(month === 0) {
        year = year - 1;
        month = 11;
    } else {
        month = month - 1;
    }
    populate_calendar(year, month);
}

// Change year
year_forward.onclick = () => {
    year = year + 1;
    populate_calendar(year, month);
}

year_back.onclick = () => {
    year = year - 1;
    populate_calendar(year, month);
}



// Display calendar when ready
document.addEventListener('DOMContentLoaded', () => {
    populate_calendar(year, month);
});




