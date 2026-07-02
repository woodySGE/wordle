function easteregg(result) {
    result = result.toUpperCase()
    if (E.includes(result)) {
        document.getElementById(`Eaudio`).play();
    }
    if (CHEESE.includes(result)) {
        document.getElementById(`CHEESEaudio`).play();
    }
    if (FASTFREDBEAR.includes(result)) {
        document.getElementById(`backgroundIMAGE`).classList.add("backgroundFF")
    }
    if (SUS.includes(result)) {
        document.getElementById(`backgroundIMAGE`).classList.add("backgroundSUS")
    }

}

