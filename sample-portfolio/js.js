let tablinks = document.getElementsByClassName("tab-links");
let tabcontents  = document.getElementsByClassName("tab-contents");


function opentab (tabname) {
  for( tablinks of tablinks){
    tablinks.classList.remove("active-link");
  }
  for( tab-contents of tab-contents){
    tab-contents.classList.remove("active-tab");

  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}