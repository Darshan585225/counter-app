let first_value=document.getElementById("count");
function increse(){
let current_value=parseInt(first_value.textContent);
current_value=current_value+1;
first_value.textContent=current_value;
}
function decresee(){
    let current_value=parseInt(first_value.textContent);
    current_value=current_value-1;
    first_value.textContent=current_value;
}
function rese(){
    first_value.textContent="0";
}