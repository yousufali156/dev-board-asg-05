// Linked in blog page
document.getElementById('newtoday').addEventListener('click', function () {

    window.location.href = 'blog.html'
})

// Change Background Color 
function changeBgColor() {

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.backgroundColor = randomColor;
}

// Auto Update Day & Date
function updateDate() {

    const today = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options).split(',');

    document.getElementById('day').innerText = formattedDate[0] + ",";
    document.getElementById('date').innerText = formattedDate[1] + formattedDate[2];
}
updateDate();

// Times Format AM & PM
function getFormattedTime() {

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amAndPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `at ${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${amAndPm}`;
}

// Disable Buttons
function disableButton(button) {

    button.disabled = true;
    button.classList.add("cursor-not-allowed", "bg-gray-400");
}

// Qromic Convert
function getTextValueById(id) {

    const textValue = document.getElementById(id).innerText;
    const convertedTextValue = parseInt(textValue);
    return convertedTextValue;
}

//  Inner Text 
function getTextById(id) {

    const onlyText = document.getElementById(id).innerText;
    return onlyText;
}

// Right Box Clear History 
function clearHistory() {

    document.getElementById("logContainer").innerHTML = "";
}

