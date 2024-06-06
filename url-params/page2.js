const params =window.location.search;
const urlParams = new URLSearchParams(params);
const fullname = urlParams.get('fullname');
const age = urlParams.get('age');
console.log('fullname',fullname);
console.log('age',age);
