document.addEventListener('DOMContentLoaded', function () {

    createOverlay();
    scrollSpyInstances();
    toolTipInstances();
    sideNavInstances();
    // openNav();

    AOS.init();

    let button = document.getElementById('hamburgerButton');
    let sidebar = document.getElementById('sidebar');
    let main = document.querySelector('main');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        

        if (sidebar.className == 'slideIn') {
            sidebar.className = 'slideOut';
            console.log('click');

            main.addEventListener('click', (e) => {
                sidebar.className = 'slideIn';
            })
        }
    });


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


    function sideNavInstances() {
        // var instance = M.Sidenav.getInstance(elem);
        let sideNavElems = document.querySelectorAll('.sidenav');
        let sideNavOptions = {
            draggable: true
        };
        let sideNavInstances = M.Sidenav.init(sideNavElems, sideNavOptions);
    }

    function toolTipInstances() {
        let toolTipElems = document.querySelectorAll('.tooltipped');
        let toolTipOptions = {
            position: 'top',

        };
        let toolTipInstances = M.Tooltip.init(toolTipElems, toolTipOptions);
    }

    let navBottom = document.getElementById("navBottom");

    // button.addEventListener('click', (e) => {
    //     document.getElementById("sidebar").style.width = "250px";
    //     document.main.style.backgroundColor = "rgba(0,0,0,0.4)";
    //     console.log('click');
    // });

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    // function openNav() {
    //     document.getElementById("sidebar").style.width = "250px";
    //     document.getElementById("main").style.marginLeft = "250px";
    //     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    // function closeNav() {
    //     document.getElementById("sidebar").style.width = "0";
    //     document.getElementById("main").style.marginLeft = "0";
    //     document.body.style.backgroundColor = "white";
    // }


});