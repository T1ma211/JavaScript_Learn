import drug1 from './drug.js';
const univer = {
    "Social": 5,
    "Phylosophia": 5,
    "Ethic": 5,
}
univer["Social"] = 3;
console.log(univer);
const unick = [5,5,5];
console.log(drug1('piece of pie'));

import {checkLS, ShowMess} from './cookies.js';
if (!checkLS()) console.log(ShowMess('problem here'));
document.querySelector('.box').onclick = () => console.log(ShowMess('problem'));

const rev = b => 'fix it now';
console.log(rev(ShowMess()));
const all = [ ...unick];
console.log(all);

const arr = {
    'Name': 'Alex',
    'LastName': 'Johns',
    'workplace': '3',
    'work': 'senior java dev',
}
const {Name, work, LastName } = arr;
console.log(Name,work,LastName); 