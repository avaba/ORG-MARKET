import IMask from 'imask';
import {
    Notyf
} from 'notyf';

const notyf = new Notyf({
    position: {
        x: "center",
        y: "top"
    },
    types: [{
        type: "error",
        icon: false
    }],
    duration: 2000
});

const tels = document.querySelectorAll("input[type='tel']");
var maskOptions = {
    mask: '+{7} (000) 000-00-00',
    lazy: true,
};
tels.forEach(function (tel) {
    const mask = new IMask(tel, maskOptions);
});