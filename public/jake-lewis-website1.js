document.addEventListener('DOMContentLoaded', function () {
    
    createOverlay();
    scrollSpyInstances();
    toolTipInstances();
    sideNavInstances();
    AOS.init();

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

    let navBottom=document.getElementById("navBottom");


});

