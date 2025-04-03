const dropDown = document.getElementById("dropdown");
const dropdownContainer = document.getElementById("dropdown-container");
dropDown.addEventListener('click',()=>{
    dropdownContainer.style.display = "block";
    document.body.style.overflow = "hidden";
});
const dropDownCancel = document.getElementById("dropdown-cancel");
dropDownCancel.addEventListener('click',()=>{
    dropdownContainer.style.display = "none";
    document.body.style.overflow = "auto";
});