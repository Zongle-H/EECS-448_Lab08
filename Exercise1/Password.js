function validate() {
    let str1 = document.getElementById("entry1").value
    let str2 = document.getElementById("entry2").value
    let feedback = document.getElementById("feedback")
    if(!(str1 === str2)) {
        
        feedback.style.color = 'red'
        feedback.innerHTML = "The passwords do not match."
    } else if(str1.length < 8) {
        feedback.style.color = 'red'
        feedback.innerHTML = "The passwords are not at least 8 characters long. Try again."
    } else {
        feedback.style.color = 'green'
        feedback.innerHTML = "The passwords are prefect."
    }  

}