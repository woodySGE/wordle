function mainevent(event, Row, Column, Completed, Failed) {
            console.log(Row)
            console.log(Column)
            if (event.key.match(/^[A-Za-z]$/)) {
                if (Column == 0) {
                    if (document.getElementById(`R${Row}C1`).innerHTML != '') {
                        document.getElementById(`R${Row}C${Column + 1}`).innerHTML = `${event.key.toUpperCase()}`;
                    }
                }

                if (Column != 5) {
                    console.log("added")
                    Column += 1
                    console.log(Row)
                    console.log(Column)
                    console.log("_____")
                }

                if (Column != 5) {
                    if (document.getElementById(`R${Row}C${Column}`).innerHTML.length !== 1) {
                        document.getElementById(`R${Row}C${Column}`).innerHTML = `${event.key.toUpperCase()}`;
                    }
                } else {
                    if (document.getElementById(`R${Row}C${Column}`).innerHTML.length !== 1) {
                        document.getElementById(`R${Row}C${Column}`).innerHTML = `${event.key.toUpperCase()}`;
                    }
                }
            }

            if (event.key === "Backspace") {
                event.preventDefault();
                if (Column != 0) {
                    if (Column == 5) {
                        document.getElementById(`R${Row}C${Column}`).innerHTML = ``
                        Column--;
                    } else if (Column != 0) {
                        document.getElementById(`R${Row}C${Column }`).innerHTML = ``
                        Column -= 1
                    } else if (Column != 5) {
                        document.getElementById(`R${Row}C${Column}`).innerHTML = ``
                    }
                }
                console.log(Row)
                console.log(Column)
                console.log("_____")
            }
            
            if (event.key === "Enter") {
                console.log(Row)
                console.log(Column)
                console.log("_____")
                
                var one = document.getElementById(`R${Row}C1`).innerHTML
                var two = document.getElementById(`R${Row}C2`).innerHTML
                var three = document.getElementById(`R${Row}C3`).innerHTML
                var four = document.getElementById(`R${Row}C4`).innerHTML
                var five = document.getElementById(`R${Row}C5`).innerHTML

                var word = (one + two + three + four + five)
                const result = validwordslist.includes(word)
                console.log(word)
                console.log(cword)
                if (word == cword) {
                    document.querySelectorAll(`#R${Row} .box`).forEach(box => {
                        box.classList.add("correctletter")
                    });
                    for (let i = 0; i < 5; i++) {
                        document.getElementById(word[i]).classList.add("correctletter")
                    }
                    Completed = true;
                } else if (validwordslist.includes(word)) {
                
                    
                let list = [];

                let seenletters = [];
                let duplicates = new Object()
                for (let i = 0; i < 5; i++) {
                    seenletters.push(word[i])
                    if (i in seenletters) {
                        if (duplicates[word[i]]) {
                            duplicates[word[i]] = duplicates[word[i]] + 1
                        } else {
                            duplicates[word[i]] = 1
                        }
                    }
                }

                console.log(duplicates)

                let lettercheck = new Object()

                for (let i = 0; i < 5; i++) {
                    if (word[i] === cword[i]){
                        document.getElementById(`R${Row}C${i + 1}`).classList.add("correctletter")
                        UpdateLetter(word, i, "correctletter")
                        list.push(word[i])
                    } else if (cword.includes(word[i])) {
                        if (list.includes(word[i])) {
                            document.getElementById(`R${Row}C${i + 1}`).classList.add("incorrectletter")
                            UpdateLetter(word, i, "incorrectletter")
                        } else {
                            console.log("-_-_-_-")
                            console.log(duplicates[word[i]])
                            if (duplicates[word[i]] != 1) {
                                if (Number.isInteger(lettercheck[word[i]])) {
                                    if (lettercheck[word[i]] <= duplicates[word[i]]) {
                                        document.getElementById(`R${Row}C${i + 1}`).classList.add("incorrectletter")
                                        UpdateLetter(word, i, "incorrectletter")
                                    } else {
                                        lettercheck[word[i]] = lettercheck[word[i]] + 1
                                        document.getElementById(`R${Row}C${i + 1}`).classList.add("includedletter")
                                        UpdateLetter(word, i, "includedletter")
                                    }
                                } else {
                                    document.getElementById(`R${Row}C${i + 1}`).classList.add("includedletter")
                                    UpdateLetter(word, i, "includedletter")
                                    lettercheck[word[i]] = 1
                                }
                            } else {
                                document.getElementById(`R${Row}C${i + 1}`).classList.add("includedletter")
                                UpdateLetter(word, i, "includedletter")
                            }
                        }
                    } else {
                        document.getElementById(`R${Row}C${i + 1}`).classList.add("incorrectletter")
                        UpdateLetter(word, i, "incorrectletter")
                    }
                }

                 if (Column == 5) {
                    if (document.getElementById(`R${Row}C5`).innerHTML != '') {
                        if (Row != 6) {
                            console.log("done")
                            Row++;
                            Column = 0
                            console.log(Row)
                            console.log(Column)
                            console.log("_____")
                        } else {
                            let checkvalue = 0;
                            for (let i = 1; i < 6; i++) {
                                if (document.getElementById(`R6C${i}`).classList.contains("correctletter")) {
                                    checkvalue++;
                                }
                            }
                            if (checkvalue != 5) {
                                Failed = true;
                            }
                        }
                    }
                }
        } else {
            if (document.getElementById(`wordinvalid`).style.visibility != "visible") {
                if (word.length != 5) {
                        document.getElementById(`wordinvalid`).innerHTML = 'Not Enough Letters'
                        document.getElementById(`wordinvalid`).style.visibility = "visible"
                        setTimeout(() => {
                            if (document.getElementById(`wordinvalid`).innerHTML != `${cword}`) {
                                document.getElementById(`wordinvalid`).style.visibility = "hidden"
                                document.getElementById(`wordinvalid`).innerHTML = ''
                            }
                        }, 2500);
                    } else {
                        document.getElementById(`wordinvalid`).innerHTML = 'Not A Valid Word.'
                        document.getElementById(`wordinvalid`).style.visibility = "visible"
                        setTimeout(() => {
                            if (document.getElementById(`wordinvalid`).innerHTML != `${cword}`) {
                                document.getElementById(`wordinvalid`).style.visibility = "hidden"
                                document.getElementById(`wordinvalid`).innerHTML = ''
                            }
                        }, 2500);
                    }
            }
        }
        }
        return [Row, Column, Completed, Failed]
        }