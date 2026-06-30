function Winner() {
    document.getElementById(`BackButton`).style.visibility = "visible"
    document.getElementById("EndSubtitle").innerHTML = "Fast Fredbear approves 👍."
    document.getElementById("EndHeading").innerHTML = "You Win!"
}

function Loser() {
    document.getElementById(`BackButton`).style.visibility = "visible"
    document.getElementById("EndSubtitle").innerHTML = "FAST FREDBEAR WILL BE SEEING YOU LATER"
    document.getElementById("EndHeading").innerHTML = "YOU FAILED...."
}
function UpdateLetter(word, i, value) {
    
    if (value == "correctletter") {
        if (document.getElementById(word[i]).classList.contains("correctletter")){
            console.log("BAHHH")
        } else {
        if (document.getElementById(word[i]).classList.contains("includedletter")) {
            console.log("PARSED INCLUDED CORRECT")
            document.getElementById(word[i]).classList.remove("includedletter")
            document.getElementById(word[i]).classList.add("correctletter")
        } else {
            if (document.getElementById(word[i]).classList.contains("incorrectletter")) {
                console.log("NO")
            } else {
                console.log("PARSED CORRECT")
                document.getElementById(word[i]).classList.add("correctletter")
            }
        }
        }
    }

    if (value == "includedletter") {
        if (document.getElementById(word[i]).classList.contains("correctletter")){
            console.log("BAHHH")
        } else {
        if (document.getElementById(word[i]).classList.contains("includedletter")) {
            console.log("BAHHHHHHHH")
        } else {
            if (document.getElementById(word[i]).classList.contains("incorrectletter")) {
                console.log("NO")
            } else {
                console.log("PARSED INCLUDED")
                document.getElementById(word[i]).classList.add("includedletter")
            }
        }
        }
    }

    if (value == "incorrectletter") {
        if (document.getElementById(word[i]).classList.contains("correctletter")){
            console.log("BAHHH")
        } else {
        if (document.getElementById(word[i]).classList.contains("includedletter")) {
            console.log("BAHHHHHHHH")
        } else {
            if (document.getElementById(word[i]).classList.contains("incorrectletter")) {
                console.log("NO")
            } else {
                console.log("PARSED INCORRECT")
                document.getElementById(word[i]).classList.add("incorrectletter")
            }
        }
        }
    }
}

function GoBack() {
    window.location.href = "choice.html";
}