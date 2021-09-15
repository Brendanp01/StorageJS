"use strict";
/*
Copyright (c) 2021 Brendan Pittman
Full license available at https://github.com/brendanp01/StorageJS/LICENSE
*/
function save(permanant, data) {
    if (permanant) {
        localStorage.setItem(data.key, data.value);
        return (true);
    }
    else {
        sessionStorage.setItem(data.key, data.value);
        return (true);
    }
}
function load(permanant, key) {
    if (permanant) {
        return (localStorage.getItem(key));
    }
    else {
        return (sessionStorage.getItem(key));
    }
}
