"use strict"

var app = document.getElementById("app")
var vardas = document.getElementById("vardas")
var pavarde = document.getElementById("pavarde")
var amzius = document.getElementById("amzius")
var submit = document.getElementById("go")
var istrinkPirma = document.getElementById("deleteFirst")
var istrinkPaskutini = document.getElementById("deleteLast")


submit.addEventListener("click", function (e) {
    e.preventDefault()
    var newElement = document.createElement("tr")

    if (vardas.value == "" || !isNaN(vardas.value) || pavarde.value == "" || !isNaN(pavarde.value) || amzius.value <= 0) {

        alert("Būk geras, pasistenk viską įvesti teisingai")
    }
    else {
        newElement.innerHTML =
            `<td>${vardas.value}</td><td>${pavarde.value}</td><td>${amzius.value}</td>`
        app.append(newElement)

        vardas.value = ""
        pavarde.value = ""
        amzius.value = ""
    }


})

istrinkPirma.addEventListener("click", function (e) {
    e.preventDefault()
    var trs = document.querySelectorAll("tbody tr")
    if (trs.length) {
        trs[0].remove()
    }
    else {
        alert("Gi, nebėr ką trint")
    }

})

istrinkPaskutini.addEventListener("click", function (e) {
    e.preventDefault()
    var trs = document.querySelectorAll("tbody tr")
    if (trs.length) {
        trs[trs.length - 1].remove()
    }
    else {
        alert("Va, ir ištrynei viską")
    }
})
