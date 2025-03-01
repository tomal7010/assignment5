const taskAssigned = document.getElementById("taskAssigned");
let taskAssignedCount = parseInt(taskAssigned.innerText);

const checkBox = document.getElementById("checkBox");
let checkBoxCount = parseInt(checkBox.innerText);

document.getElementById("button1").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;
});

document.getElementById("button2").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;
});
document.getElementById("button3").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;
});
document.getElementById("button4").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;
});
document.getElementById("button5").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;
});
document.getElementById("button6").addEventListener("click", function () {
    alert("Board updated succesfully");
    taskAssignedCount -= 1;
    taskAssigned.innerText = taskAssignedCount;
    checkBoxCount +=1;
    checkBox.innerText = checkBoxCount;
});
