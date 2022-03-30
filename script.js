var jobs = [
    "Quét nhà lần 1",
    "Lau nhà lần 1",
    "Quét nhà lần 2",
    "Lau nhà lần 2",
]

function renderJob() {
    let tbjob = document.querySelector('.table>tbody')
    let htmls = jobs.map(function (job, index) {
        return `
                <tr >
                    <td>${index + 1}</td>
                    <td><input type="text"  id="${index}" value="${job}" disabled></td>
                    <td>
                        <img src="./icon/done.png" onclick="getDoneJob(${index})" class="idDone">
                        <img src="./icon/edit.png" onclick="getEditJob(${index})" id="idEdit">
                        <img src="./icon/save.png" onclick="getSaveJob(${index})" id="idSave">
                        <img src="./icon/remove.png" onclick="getRemoveJob(${index})" id="idRemove">
                        <img src="./icon/restart.png" onclick="getUndoJob(${index})" id='Undo'>
                        
                    </td>
                </tr>
                `
    }) 
    tbjob.innerHTML = htmls.join("");
}


renderJob()

function getJob() {
    let jobName = document.getElementById('jobname').value;
    jobs.unshift(jobName)
    jobName = document.getElementById('jobname').value = ''
    renderJob()
}

function getDoneJob(index) {
    document.getElementById(index).style.textDecoration = 'line-through';
}

function getEditJob(index){
    document.getElementById(index).disabled = "";
}

function getSaveJob(index){
    document.getElementById(index).disabled = "true";
}
  
function getRemoveJob(index) {
    if(confirm(`Do you want remove job ${index + 1}?`)) {
        jobs.splice(index, 1)
    }
    renderJob()
}

function getUndoJob(index) {
    document.getElementById(index).style = 'none';
    renderJob()
}

const element = document.getElementById('profile_title')

// always checking if the element is clicked, if so, do alert('hello')
element.addEventListener("click", () => {
	alert('hello');
});






