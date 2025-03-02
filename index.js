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
    newLog.innerText = `You completed a task at ${new Date()}` ;
    activityLog.appendChild(newLog);


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
    newLog.innerText = `You completed a task at ${new Date()}` ;
    activityLog.appendChild(newLog);

});
document.getElementById("button3").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed a task at ${new Date()}` ;
    activityLog.appendChild(newLog);

});
document.getElementById("button4").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed a task at ${new Date()}` ;
    activityLog.appendChild(newLog);

});
document.getElementById("button5").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed a task at ${new Date()}` ;
    activityLog.appendChild(newLog);

});
document.getElementById("button6").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;

    const newLog = document.createElement("li");
    newLog.innerText = `You completed a task at ${new Date()}` ;
    activityLog.appendChild(newLog);

});


    clearHistory.addEventListener("click", function () {
    activityLog.innerHTML = "";
});




const date = document.getElementById("date");





