"use strict";
window.onload = function () {
    var form = document.getElementById('gen');
    var targets = document.querySelectorAll('h1 strong');
    form.onsubmit = function (e) {
        e.preventDefault();
        var inputs = form.querySelectorAll('input');
        var data = {};
        inputs.forEach(function (input) {
            data[input.getAttribute('id')] = input.value.toLowerCase();
            input.value = '';
        });
        targets.forEach(function (target) {
            target.innerText = data[target.dataset.type];
        });
    };
};
