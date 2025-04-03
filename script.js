let footer=document.querySelector('#footer')
let n=0;
console.log(footer);
function change()
{
    n=n===0?1:0;
    if(n){
    footer.textContent="this is new text"}
    else{
        footer.textContent="click to change"}
    
}
