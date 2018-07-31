document.addEventListener('DOMContentLoaded', function () {
    sideNavInstances();
    createOverlay();
    scrollSpyInstances();

    let button = document.getElementById('hamburgerButton');
    let sidebar = document.getElementById('sidebar');

    button.addEventListener('click', (e) => {

        if (sidebar.className == 'slideIn') {
            sidebar.className = 'slideOut';

        } else {
            sidebar.className = 'slideIn';
        }
    })


    function scrollSpyInstances() {
        let scrollSpyElements = document.querySelectorAll('.scrollspy');
        let scrollSpyOptions = {
            scrollOffset: 0
        };
        let scrollSpyInstances = M.ScrollSpy.init(scrollSpyElements, scrollSpyOptions);
    }

    function createOverlay() {
        document.getElementById("overlay").style.display = "block";
    }
    // instance.isFixed;

    function sideNavInstances() {
        // var instance = M.Sidenav.getInstance(elem);
        let sideNavElems = document.querySelectorAll('.sidenav');
        let sideNavOptions = {
            draggable: true
        };
        let sideNavInstances = M.Sidenav.init(sideNavElems, sideNavOptions);
    }
    let navBottom=document.getElementById("navBottom");
    // navBottom.addEventListener('click', function (e) {
    //     e.preventDefault();
    // });


});


// let boxContainer = document.getElementById('box-container');


// function createBox() {
//     for (let i = 0; i < 1000; i++) {
//         let square = document.createElement("div");
//         square.classList.add('box');
//         boxContainer.append(square); //adds sqaures to the "square" parents element

//     }

// }

// createBox();

// boxContainer.addEventListener('mouseover', mouseHover);

// function mouseHover() {
//     console.log('hover');
//     event.preventDefault();
//     transparency();
// }


// function transparency() {
//     event.target.style.backgroundColor= "rgb(0, 0, 0, .1)";

// }