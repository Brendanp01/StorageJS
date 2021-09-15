/*
Copyright (c) 2021 Brendan Pittman
Full license available at https://github.com/brendanp01/StorageJS/LICENSE
*/


interface Data {
  key: string
  value: string
}
function save(permanant: Boolean, data: Data): Boolean {
  if (permanant) {
    localStorage.setItem(data.key, data.value);
    return(true);
  } else {
    sessionStorage.setItem(data.key, data.value);
    return(true);
  }
}
function load(permanant: Boolean, key: string): any {
  if (permanant) {
    return(localStorage.getItem(key));
  } else {
    return(sessionStorage.getItem(key));
  }
}
