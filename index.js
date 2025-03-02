const taskAssigned = document.getElementById("taskAssigned");
let taskAssignedCount = parseInt(taskAssigned.innerText);

const checkBox = document.getElementById("checkBox");
let checkBoxCount = parseInt(checkBox.innerText);

const activityLog = document.getElementById("activityLog");

const clearHistory = document.getElementById("clearHistory");


document.getElementById("button1").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;



    const newLog = document.createElement("li");
    newLog.innerText = `You completed the task Fix Mobile Button Issue at ${new Date()}` ;
    activityLog.appendChild(newLog);


    button1.setAttribute('disabled', '');


   // clearHistory.addEventListener("click", function () {
      //  activityLog.innerHTML = "";
   // });
});




document.getElementById("button2").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed the task Add Dark Mode at ${new Date()}` ;
    activityLog.appendChild(newLog);

    button2.setAttribute('disabled', '');

});
document.getElementById("button3").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed the task Optimize Home Page at ${new Date()}` ;
    activityLog.appendChild(newLog);

    button3.setAttribute('disabled', '');

});
document.getElementById("button4").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed the task Add new emoji 🤲 at ${new Date()}` ;
    activityLog.appendChild(newLog);

    button4.setAttribute('disabled', '');

});
document.getElementById("button5").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed the task Integrate OpenAI API at ${new Date()}` ;
    activityLog.appendChild(newLog);

    button5.setAttribute('disabled', '');

});
document.getElementById("button6").addEventListener("click", function () {
    alert("Board updated succesfully");
    alert("Congratulation!!! You have completed at the current task");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed the task Improve Job Searching at ${new Date()}` ;
    
    activityLog.appendChild(newLog);

    button6.setAttribute('disabled', '');

});


    clearHistory.addEventListener("click", function () {
    activityLog.innerHTML = "";
});




const date = document.getElementById("date");


function updateDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    document.getElementById("currentDate").textContent = formattedDate;
}