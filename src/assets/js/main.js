const menuContainer = document.querySelector('.menu-items');
const liNav = document.getElementsByTagName("li");
const innWidt = window.innerWidth;
let generateMenu = '';
$(document).ready(function()
{
    $("tr:even").css("background-color", "#FFF");
});
if (innWidt <= 767) {
    generateMenu = `
        <div class="menu-mobile menu-mobile-column">
        ${liNav[0].innerHTML}
        ${liNav[3].innerHTML}
        ${liNav[4].innerHTML}

        </div>
        <div class="menu-mobile">
            ${liNav[2].innerHTML}
            ${liNav[1].innerHTML}
        </div>  
    `;
    menuContainer.innerHTML = generateMenu
}

$(window).resize(function() {
    if (window.innerWidth >= 767) {
        document.querySelector(".menu").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector(".closebtn").style.display = "none";
    } else {
        document.querySelector(".menu").style.display = "block";
    }

    if (window.innerWidth <= 767) {
        generateMenu = `
            <div class="menu-mobile menu-mobile-column">
                ${liNav[0].innerHTML}
                ${liNav[3].innerHTML}
                ${liNav[4].innerHTML}
            </div>
            <div class="menu-mobile">
                ${liNav[2].innerHTML}
                ${liNav[1].innerHTML}
            </div>  
        `;
        menuContainer.innerHTML = generateMenu

    } else { 
        generateMenu = `
            <li class=""><a href="#" class="nav-link px-2 buttons__color">Проверить статус операции</a></li>
            <li>
            <select class="form-select select-lang bg-transparent shadow-none" aria-label="Default select example">
                <option selected>RU</option>
                <option value="1">EN</option>
                <option value="2">UA</option>
                <option value="3">RU</option>
            </select>
            </li>
            <li>
            <a href="#" class="nav-link px-2 link-dark user-cabinet__outter">
                <div class="user-cabinet"></div>
            </a>
            </li>
            <li><a href="#" class="nav-link px-2 buttons__color-outline diplay-center-flex">Обмен валют</a></li>
        `;
        menuContainer.innerHTML = generateMenu
    }
  });


  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".closebtn").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".closebtn").style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.position = "unset";

  }