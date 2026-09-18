function Winner() {
    document.getElementById(`BackButton`).style.visibility = "visible"
    document.getElementById("EndSubtitle").innerHTML = "Boots approves 👍."
    document.getElementById("EndHeading").innerHTML = "You Win!"
}

function Loser() {
    document.getElementById(`BackButton`).style.visibility = "visible"
    document.getElementById("EndSubtitle").innerHTML = "BOOTS WILL BE SEEING YOU LATER"
    document.getElementById("EndHeading").innerHTML = "YOU FAILED...."
}
function UpdateLetter(word, i, value) {
    
    if (value == "correctletter") {
        if (document.getElementById(word[i]).classList.contains("correctletter")){
            console.warn("BAHHH")
        } else {
        if (document.getElementById(word[i]).classList.contains("includedletter")) {
            console.warn("PARSED INCLUDED CORRECT")
            document.getElementById(word[i]).classList.remove("includedletter")
            document.getElementById(word[i]).classList.add("correctletter")
        } else {
            if (document.getElementById(word[i]).classList.contains("incorrectletter")) {
                console.warn("NO")
            } else {
                console.warn("PARSED CORRECT")
                document.getElementById(word[i]).classList.add("correctletter")
            }
        }
        }
    }

    if (value == "includedletter") {
        if (document.getElementById(word[i]).classList.contains("correctletter")){
            console.warn("BAHHH")
        } else {
        if (document.getElementById(word[i]).classList.contains("includedletter")) {
            console.warn("BAHHHHHHHH")
        } else {
            if (document.getElementById(word[i]).classList.contains("incorrectletter")) {
                console.warn("NO")
            } else {
                console.warn("PARSED INCLUDED")
                document.getElementById(word[i]).classList.add("includedletter")
            }
        }
        }
    }

    if (value == "incorrectletter") {
        if (document.getElementById(word[i]).classList.contains("correctletter")){
            console.warn("BAHHH")
        } else {
        if (document.getElementById(word[i]).classList.contains("includedletter")) {
            console.warn("BAHHHHHHHH")
        } else {
            if (document.getElementById(word[i]).classList.contains("incorrectletter")) {
                console.warn("NO")
            } else {
                console.warn("PARSED INCORRECT")
                document.getElementById(word[i]).classList.add("incorrectletter")
            }
        }
        }
    }
}

function GoBack() {
    if (confirm("Are you sure you want to restart?")) {
        window.location.href = "choice.html";
    }
    

}