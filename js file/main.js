// Card-1 (Fix Mobile Button Issue) 
document.querySelector('.btn-fixissue').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;

    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;

    alert('Board Updated Successfully');

    const mobileText = getTextById('mobile-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
    `<div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${mobileText} ${getFormattedTime()}</p> 
    </div>`;
    newHistory.appendChild(newDiv);

})

// Card-2 (Add Dark Mode) 
document.querySelector('.btn-darkmode').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;

    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;

    alert('Board Updated Successfully');

    const darkText = getTextById('dark-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = 
    `<div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${darkText} ${getFormattedTime()}</p> 
    </div>`;
    newHistory.appendChild(newDiv);
})


// Card-3 (Optimize Home page)
document.querySelector('.btn-homepage').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;

    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;

    alert('Board Updated Successfully');

    const optimizeText = getTextById('optimize-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
    `<div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${optimizeText} ${getFormattedTime()}</p> 
    </div>`;
    newHistory.appendChild(newDiv);
})


// Card-4 (Add new reaction 🤲) 
document.querySelector('.btn-reaction').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;

    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;

    alert('Board Updated Successfully');

    const emojiText = getTextById('emoji-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
    `<div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${emojiText} ${getFormattedTime()}</p> 
    </div>`;
    newHistory.appendChild(newDiv);
})

// Card-5 (Integrate OpenAI API) 
document.querySelector('.btn-openapi').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;

    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;

    alert('Board Updated Successfully');

    const aiText = getTextById('ai-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
    `<div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${aiText} ${getFormattedTime()}</p> 
    </div>`;
    newHistory.appendChild(newDiv);
})

// Card-6 (Improve Job Seeking) 
document.querySelector('.btn-jobseeking').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;

    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;

    alert('Board Updated Successfully');

    const jobText = getTextById('job-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
    `<div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${jobText} ${getFormattedTime()}</p> 
    </div>`;
    newHistory.appendChild(newDiv);

})

// Task Alert 
document.querySelector('.btn-fixissue').addEventListener('click', taskCompleted);
document.querySelector('.btn-darkmode').addEventListener('click', taskCompleted);
document.querySelector('.btn-homepage').addEventListener('click', taskCompleted);
document.querySelector('.btn-reaction').addEventListener('click', taskCompleted);
document.querySelector('.btn-openapi').addEventListener('click', taskCompleted);
document.querySelector('.btn-jobseeking').addEventListener('click', taskCompleted);

let taskCount = 0;
function taskCompleted() {
    taskCount++;
    if (taskCount === 6) {
        alert('Congratulations!! You have completed all the current tasks.');
    }
}