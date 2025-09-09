var cardsData = [
    {
        image: "images/logo-console-plus.svg",
        checked: false,
        note: 'Enhanced developer console with advanced filtering and logging.',
        name: 'ConsolePlus',
    },
    {
        image: "images/logo-devlens.svg",
        checked: true,
        note: 'Quickly inspect page layouts and visualize element boundaries.',
        name: 'DevLens',
    },
    {
        image: "images/logo-dom-snapshot.svg",
        checked: true,
        note: 'Capture and export DOM structures quickly.',
        name: 'DOM Snapshot',
    },
    {
        image: "images/logo-grid-guides.svg",
        checked: true,
        note: 'Overlay customizable grids and alignment guides on any webpage.',
        name: 'GridGuides',
    },
    {
        image: "images/logo-json-wizard.svg",
        checked: false,
        note: 'Formats, validates, and prettifies JSON responses in-browser.',
        name: 'JSONWizard',
    },
    {
        image: "images/logo-link-checker.svg",
        checked: false,
        note: 'Scans and highlights broken links on any page.',
        name: 'LinkChecker',
    },
    {
        image: "images/logo-markup-notes.svg",
        checked: true,
        note: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
        name: 'Markup Notes',
    },
    {
        image: "images/logo-palette-picker.svg",
        checked: false,
        note: 'Instantly extracts color palettes from any webpage.',
        name: 'Palette Picker',
    },
    {
        image: "images/logo-speed-boost.svg",
        checked: true,
        note: 'Optimizes browser resource usage to accelerate page loading.',
        name: 'SpeedBoost',
    },
    {
        image: "images/logo-style-spy.svg",
        checked: true,
        note: 'Instantly analyze and copy CSS from any webpage element.',
        name: 'StyleSpy',
    },
    {
        image: "images/logo-tab-master-pro.svg",
        checked: true,
        note: 'Organizes browser tabs into groups and sessions.',
        name: 'TabMaster Pro',
    },
    {
        image: "images/logo-viewport-buddy.svg",
        checked: false,
        note: 'Simulates various screen resolutions directly within the browser.',
        name: 'ViewportBuddy',
    },
];

function addCardsToHtml() {
    // generate html
    var html = "";

    for (var i = 0; i < cardsData.length; i++) {
        var checkedHtml = '';
        if (cardsData[i].checked) {
            checkedHtml += 'checked="true"';
        }
        html += '<div class="card">\n' +
            '                    <div class="top-part">\n' +
            '                        <img src="' + cardsData[i].image + '">\n' +
            '                        <div class="card-text">\n' +
            '                            <h3>\ '+ cardsData[i].name +' </h3>\n' +
            '                            <p>\n' +
            '                                '+cardsData[i].note +'\n' +
            '                            </p>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="bottom-part">\n' +
            '                        <div class="remove-button" onclick="removeButton(this)">\n' +
            '                            <p>remove</p>\n' +
            '                        </div>\n' +
            '                        <div>\n' +
            '                            <label class="toggle">\n' +
            '                                <input class="toggle-checkbox" type="checkbox" '+ checkedHtml + ' >\n' +
            '                                <div class="toggle-switch"></div>\n' +
            '                            </label>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>';
    }

    // add html to page
    document.getElementsByClassName("card-container")[0].innerHTML = html;
}

addCardsToHtml();

function themeChange(el) {
    var theme = document.getElementById("theme");
    if(theme.classList.contains("day"))  {
        el.children[0].src = "images/icon-sun.svg";
        theme.classList.remove("day");
    } else {
        theme.classList.add("day");
        el.children[0].src = "images/icon-moon.svg";
    }
}

function removeButton (el) {
   el.parentElement.parentElement.remove();
}

function filterCards(el, filterValue) {
    var filterButtons = document.getElementsByClassName('button-active');
    for (i = 0; i < filterButtons.length; i++) {
        filterButtons[i].classList.remove('button-active')
    }
    el.classList.add('button-active');

    var check = document.getElementsByClassName('toggle-checkbox');
    switch (filterValue) {
        case 'all':
            var all = document.getElementsByClassName('card');
            for (i = 0; i < all.length; i++) {
                all[i].classList.remove("d-none");
            }
            break;
        case 'active':
            for (i = 0; i < check.length; i++) {
                if (check[i].checked === true) {
                    check[i].parentElement.parentElement.parentElement.parentElement.classList.remove("d-none");
                } else {
                    check[i].parentElement.parentElement.parentElement.parentElement.classList.add("d-none");
                }
            }
            break;
        case 'inactive':
            for (i = 0; i < check.length; i++) {
                if (check[i].checked === false) {
                    check[i].parentElement.parentElement.parentElement.parentElement.classList.remove("d-none");
                } else {
                    check[i].parentElement.parentElement.parentElement.parentElement.classList.add("d-none");
                }
            }
            break;
    }
}