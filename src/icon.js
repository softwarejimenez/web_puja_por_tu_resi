/**
 * Generate a icon check
 * @return icon_check
 */
function icon_check(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-check-circle";
    icon.setAttribute("aria-hidden", "true");
    icon.title = "si existe";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon failed
 * @return icon_failed
 */
function icon_failed(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-ban";
    icon.setAttribute("aria-hidden", "true");
    icon.title = "no existe";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon delete
 * @return icon_trash
 */
function icon_delete(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-trash";
    icon.setAttribute("aria-hidden", "true");
    icon.title = "eliminar";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon cross
 * @return icon_cross
 */
function icon_cross(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-times";
    icon.setAttribute("aria-hidden", "true");
    icon.title = "eliminar";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon tv
 * @return icon_tv
 */
function icon_tv(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-television"
    icon.setAttribute("aria-hidden", "true")
    icon.title = "television";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}

/**
 * Generate a icon pay
 * @return icon_pay
 */
function icon_pay(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-money"
    icon.setAttribute("aria-hidden", "true")
    icon.title = "pagar";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon bath
 * @return icon_bath
 */
function icon_bath(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-bath"
    icon.setAttribute("aria-hidden", "true")
    icon.title = "baño";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon desk
 * @return icon_desk
 */
function icon_desk(new_id) {
    var icon = document.createElement('img');
    icon.className += "icon_img";
    icon.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyOTUuMjQgMjk1LjI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTUuMjQgMjk1LjI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0yMzMuMzM1LDIxNC4yODd2LTkuNTI0aDQ3LjYxN3YwYzcuODc2LDAsMTQuMjg2LTYuNDEsMTQuMjg2LTE0LjI4NnYtNzYuMTljMC03Ljg3Ni02LjQxLTE0LjI4Ni0xNC4yODYtMTQuMjg2SDE0Ny42MTkgICAgIGMtNy44NzYsMC0xNC4yODYsNi40MS0xNC4yODYsMTQuMjg2djc2LjE5YzAsNy44NzYsNi40MSwxNC4yODYsMTQuMjg2LDE0LjI4Nmg0Ny42MTl2OS41MjRoLTgwLjk1MnYtNC43NjIgICAgIGMwLTcuODc2LTYuNjg2LTE0LjI4Ni0xNC41NjItMTQuMjg2aC0xNi4xMWwtNDguOTI4LTc5LjY0OGMyLjEzOC0zLjA4MSwzLjQxLTYuODA1LDMuNDEtMTAuODI5YzAtMS4xNzEtMC4xNDMtMi4zMDUtMC4zNDgtMy40MTkgICAgIGwxOS45MzMtMzYuNTQyYzEuODM4LDkuMDUyLDYuODc2LDE3LjEzOCwxNC41MTksMjIuODUybDMuMTEsMi4zMjRsMTEuNzU3LTEwLjQ1MmMyLjU3NiwwLjkzMyw1LjIxNCwxLjQyOSw3Ljg5NSwxLjQyOSAgICAgYzEzLjEyOSwwLDIzLjgxLTEwLjY4MSwyMy44MS0yMy44MWMwLTEuNzI5LTAuMjcxLTMuNDY3LTAuNjc2LTUuMTk1bDExLjc4MS0xMC40NzFsLTEuOTQzLTMuMzY3ICAgICBjLTYuODA1LTExLjc1Ny0xOS40MzgtMTkuMDYyLTMyLjk3MS0xOS4wNjJjLTAuODk1LDAtMS43NzYsMC4wNzEtMi42NTcsMC4xMzNsLTE2LjEtMTYuMUw0MC44MiwzMi41NzJsNi41NTcsOC43NDNMMTYuMDg3LDg2LjAyICAgICBDNi45OSw4Ny40NTMsMCw5NS4yNzcsMCwxMDQuNzYzYzAsNy4xNDMsMy45OTUsMTMuMzA1LDkuODI5LDE2LjU2MmwzOS4zODEsNzMuOTE0SDMzLjA1N2MtNy44NzYsMC0xNC4wMSw2LjQxLTE0LjAxLDE0LjI4NiAgICAgdjQuNzYySDB2MjguNTcxaDE0LjI4NnY1Mi4zODFoOS41MjR2LTUyLjM4MWg5LjUyNHY1Mi4zODFoOS41MjR2LTUyLjM4MWgyMDkuNTI0djUyLjM4MWg5LjUyNHYtNTIuMzgxaDkuNTI0djUyLjM4MWg5LjUyNCAgICAgdi01Mi4zODFoMTQuMjg2di0yOC41NzFIMjMzLjMzNXogTTE0Mi44NTcsMTE0LjI4N2MwLTIuNjI0LDIuMTM4LTQuNzYyLDQuNzYyLTQuNzYyaDEzMy4zMzNjMi42MjQsMCw0Ljc2MiwyLjEzOCw0Ljc2Miw0Ljc2MiAgICAgdjYxLjkwNUgxNDIuODU3VjExNC4yODd6IE0xOTUuMjM4LDE5NS4yMzloLTQ3LjYxOWMtMi42MjQsMC00Ljc2Mi0yLjEzOC00Ljc2Mi00Ljc2MnYtNC43NjJoMTQyLjg1N3Y0Ljc2MiAgICAgYzAsMi42MjQtMi4xMzgsNC43NjItNC43NjIsNC43NjJoLTQ3LjYxOUgxOTUuMjM4eiBNMjIzLjgxLDIwNC43NjN2OS41MjRoLTE5LjA0OHYtOS41MjRIMjIzLjgxeiBNOTYuMjQzLDcxLjM3MmwxMi43LTExLjI5ICAgICBDMTA3LjY3MSw2Ni4xNDksMTAyLjUzOCw3MC44MTEsOTYuMjQzLDcxLjM3MnogTTk0Ljk2NywyOC41NzNjOC44NTctMC4wMDEsMTcuMjA0LDQuMTgsMjIuNTgxLDExLjExOEw3NC45ODYsNzcuNTI1ICAgICBjLTUuNS01LjM1Mi04LjU5LTEyLjYtOC41OS0yMC4zODFDNjYuMzk2LDQxLjM4Nyw3OS4yMSwyOC41NzMsOTQuOTY3LDI4LjU3M3ogTTc1LjYxOSwxNS45NjhsNS42NjIsNS42NjIgICAgIEM3MS43LDI1LjMzNCw2My45NjcsMzIuNzcyLDU5LjkyOSw0Mi4xODdsLTYuMDYyLTguMDlMNzUuNjE5LDE1Ljk2OHogTTUzLjM4NSw0OS4zMjlsMS4wOTEsMS40NTNMMzIuNDE5LDkxLjIyNSAgICAgYy0xLjYyOS0xLjYxLTMuNTQ4LTIuOTA1LTUuNjY3LTMuODQ4TDUzLjM4NSw0OS4zMjl6IE05LjUyNCwxMDQuNzYzYzAtNS4yNTIsNC4yNzEtOS41MjQsOS41MjQtOS41MjQgICAgIGM1LjI1MiwwLDkuNTI0LDQuMjcxLDkuNTI0LDkuNTI0YzAsNS4yNTItNC4yNzEsOS41MjQtOS41MjQsOS41MjRDMTMuNzk1LDExNC4yODcsOS41MjQsMTEwLjAxNiw5LjUyNCwxMDQuNzYzeiBNMjEuNzk1LDEyMy41MzQgICAgIGMxLjk2Ny0wLjI4NiwzLjgyNC0wLjg2Miw1LjU0OC0xLjcwNWw0NS4wOTUsNzMuNDFINjBMMjEuNzk1LDEyMy41MzR6IE0zMy4wNTcsMjA0Ljc2M2g2Ni42NjdjMi42MjQsMCw1LjAzOCwyLjEzOCw1LjAzOCw0Ljc2MiAgICAgdjQuNzYyaC03Ni4xOXYtNC43NjJoLTAuMDAxQzI4LjU3MSwyMDYuOTAxLDMwLjQzMywyMDQuNzYzLDMzLjA1NywyMDQuNzYzeiBNMjg1LjcxNCwyMzMuMzM1aC00Ljc2MmgtMjguNTcxSDQyLjg1N0gxNC4yODYgICAgIEg5LjUyNHYtOS41MjRoOS4yNDhoOTUuMjM4aDgxLjIyOWgzOC4wOTVoNTIuMzhWMjMzLjMzNXoiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHJlY3QgeD0iMTM4LjA5NSIgeT0iODAuOTUzIiB3aWR0aD0iMTUyLjM4MSIgaGVpZ2h0PSI5LjUyNCIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMjA0Ljc2MiwwLjAwMWgtMzguMDk1djc2LjE5aDM4LjA5NVYwLjAwMXogTTE5NS4yMzgsNjYuNjY4SDE3Ni4xOVY0Ny42MmgxOS4wNDhWNjYuNjY4eiBNMTk1LjIzOCwzOC4wOTZIMTc2LjE5VjkuNTI1ICAgICBoMTkuMDQ4VjM4LjA5NnoiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPGNpcmNsZSBjeD0iMTg1LjcxNCIgY3k9IjU3LjE0NCIgcj0iNC43NjIiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTI0Ny42MTksMC4wMDFoLTM4LjA5NXY3Ni4xOWgzOC4wOTVWMC4wMDF6IE0yMTkuMDQ3LDkuNTI1aDE5LjA0OHYyOC41NzFoLTE5LjA0OFY5LjUyNXogTTIzOC4wOTYsNjYuNjY4aC0xOS4wNDhWNDcuNjIgICAgIGgxOS4wNDhWNjYuNjY4eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8Y2lyY2xlIGN4PSIyMjguNTcxIiBjeT0iNTcuMTQ0IiByPSI0Ljc2MiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMjkwLjQ3NiwwLjAwMWgtMzguMDk1djc2LjE5aDM4LjA5NVYwLjAwMXogTTI2MS45MDQsOS41MjVoMTkuMDQ4djI4LjU3MWgtMTkuMDQ4VjkuNTI1eiBNMjgwLjk1Myw2Ni42NjhoLTE5LjA0OFY0Ny42MiAgICAgaDE5LjA0OFY2Ni42Njh6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxjaXJjbGUgY3g9IjI3MS40MjkiIGN5PSI1Ny4xNDQiIHI9IjQuNzYyIiBmaWxsPSIjMDAwMDAwIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";
    icon.title = "escritorio";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}

/**
 * Generate a icon wardrove
 * @return icon_wardrove
 */
function icon_wardrove(new_id) {
    var icon = document.createElement('img');
    icon.className += "icon_img";
    icon.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik05LDUzaDE5VjNIOVY1M3ogTTExLDVoMTV2NDZIMTFWNXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMTUsMTFoN2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMWgtN2MtMC41NTIsMC0xLDAuNDQ4LTEsMVMxNC40NDgsMTEsMTUsMTF6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTE1LDE0aDdjMC41NTIsMCwxLTAuNDQ4LDEtMXMtMC40NDgtMS0xLTFoLTdjLTAuNTUyLDAtMSwwLjQ0OC0xLDFTMTQuNDQ4LDE0LDE1LDE0eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0yMywxNmMwLTAuNTUyLTAuNDQ4LTEtMS0xaC03Yy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDdDMjIuNTUyLDE3LDIzLDE2LjU1MiwyMywxNnoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMjMsMjhjLTAuNTUyLDAtMSwwLjQ0OC0xLDF2NWMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xdi01QzI0LDI4LjQ0OCwyMy41NTIsMjgsMjMsMjh6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTU0LDBIMzFoLTJINnY1NmgydjRoNC42MThsMi00aDguNzY0bDIsNEgzMHYtNGgxdjRoNC42MThsMi00aDguNzY0bDIsNEg1M3YtNGgxVjB6IE0xMS4zODIsNThIMTB2LTJoMi4zODJMMTEuMzgyLDU4eiAgICAgTTE1LjYxOCw1NEg4VjJoMjF2NTJoLTYuNjE4SDE1LjYxOHogTTI4LDU4aC0xLjM4MmwtMS0ySDI4VjU4eiBNMzQuMzgyLDU4SDMzdi0yaDIuMzgyTDM0LjM4Miw1OHogTTM4LjYxOCw1NEgzMVYyaDIxdjUyaC02LjYxOCAgICBIMzguNjE4eiBNNTEsNThoLTEuMzgybC0xLTJINTFWNTh6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTMyLDUzaDE5VjNIMzJWNTN6IE0zNCw1aDE1djQ2SDM0VjV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM4LDExaDdjMC41NTIsMCwxLTAuNDQ4LDEtMXMtMC40NDgtMS0xLTFoLTdjLTAuNTUyLDAtMSwwLjQ0OC0xLDFTMzcuNDQ4LDExLDM4LDExeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0zOCwxNGg3YzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xaC03Yy0wLjU1MiwwLTEsMC40NDgtMSwxUzM3LjQ0OCwxNCwzOCwxNHoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNDYsMTZjMC0wLjU1Mi0wLjQ0OC0xLTEtMWgtN2MtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWg3QzQ1LjU1MiwxNyw0NiwxNi41NTIsNDYsMTZ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQ2LDI4Yy0wLjU1MiwwLTEsMC40NDgtMSwxdjVjMCwwLjU1MiwwLjQ0OCwxLDEsMXMxLTAuNDQ4LDEtMXYtNUM0NywyOC40NDgsNDYuNTUyLDI4LDQ2LDI4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
    icon.title = "Armario";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon study_room
 * @return icon_study_room
 */
function icon_study_room(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon material-icons";
    icon.title = "habitacion estudio";
    icon.appendChild(document.createTextNode("school"))
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon gym
 * @return icon_gym
 */
function icon_gym(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon material-icons";
    icon.title = "gym";
    icon.appendChild(document.createTextNode("fitness_center"))
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon canteen
 * @return icon_canteen
 */
function icon_canteen(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon material-icons";
    icon.title = "cantina";
    icon.appendChild(document.createTextNode("restaurant_menu"))
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon wifi
 * @return icon_wifi
 */
function icon_wifi(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-wifi";
    icon.title = "wifi";
    icon.setAttribute("aria-hidden", "true");
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon laundry
 * @return icon_laundry
 */
function icon_laundry(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon material-icons";
    icon.title = "lavanderia ";
    icon.appendChild(document.createTextNode("local_laundry_service"))
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon heating
 * @return icon_heating
 */
function icon_heating(new_id) {
    var icon = document.createElement('i');
    icon.className += "icon fa fa-thermometer-full";
    icon.title = "calefaccion";
    icon.setAttribute("aria-hidden", "true");
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon elevator
 * @return icon_elevator
 */
function icon_elevator(new_id) {
    var icon = document.createElement('img');
    icon.className += "icon_img";
    icon.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDMuNjA3IDUwMy42MDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwMy42MDcgNTAzLjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNNDc3LjQyNi0xSDI0LjE4QzkuOTExLTEtMSw5LjkxMS0xLDI0LjE4djQ1My4yNDZjMCwxNC4yNjksMTAuOTExLDI1LjE4LDI1LjE4LDI1LjE4aDgzLjkzNGgxNDIuNjg5aDE0Mi42ODloODMuOTM0ICAgICBjMTQuMjY5LDAsMjUuMTgtMTAuOTExLDI1LjE4LTI1LjE4VjI0LjE4QzUwMi42MDcsOS45MTEsNDkxLjY5NS0xLDQ3Ny40MjYtMXogTTI0Mi40MSw0ODUuODJIMTE2LjUwOFYxMjQuOTAyICAgICBjMC01LjAzNiwzLjM1Ny04LjM5Myw4LjM5My04LjM5M0gyNDIuNDFWNDg1LjgyeiBNMjU5LjE5Nyw0ODUuODJWMTE2LjUwOGgxMTcuNTA4YzUuMDM2LDAsOC4zOTMsMy4zNTcsOC4zOTMsOC4zOTNWNDg1LjgyICAgICBIMjU5LjE5N3ogTTQ4NS44Miw0NzcuNDI2YzAsNS4wMzYtMy4zNTcsOC4zOTMtOC4zOTMsOC4zOTNoLTc1LjU0MVYxMjQuOTAyYzAtMTQuMjY5LTEwLjkxMS0yNS4xOC0yNS4xOC0yNS4xOEgyNTAuODAzSDEyNC45MDIgICAgIGMtMTQuMjY5LDAtMjUuMTgsMTAuOTExLTI1LjE4LDI1LjE4VjQ4NS44MkgyNC4xOGMtNS4wMzYsMC04LjM5My0zLjM1Ny04LjM5My04LjM5M1YyNC4xOGMwLTUuMDM2LDQuMTk3LTguMzkzLDguMzkzLTguMzkzICAgICBoNDUzLjI0NmM1LjAzNiwwLDguMzkzLDMuMzU3LDguMzkzLDguMzkzVjQ3Ny40MjZ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik00NjAuNjM5LDI1OS4xOTdoLTMzLjU3NGMtNS4wMzYsMC04LjM5MywzLjM1Ny04LjM5Myw4LjM5M3YzMy41NzR2MzMuNTc0YzAsNS4wMzYsMy4zNTcsOC4zOTMsOC4zOTMsOC4zOTNoMzMuNTc0ICAgICBjNS4wMzYsMCw4LjM5My0zLjM1Nyw4LjM5My04LjM5M3YtMzMuNTc0VjI2Ny41OUM0NjkuMDMzLDI2Mi41NTQsNDY1LjY3NSwyNTkuMTk3LDQ2MC42MzksMjU5LjE5N3ogTTQzNS40NTksMjc1Ljk4NGgxNi43ODcgICAgIHYxNi43ODdoLTE2Ljc4N1YyNzUuOTg0eiBNNDUyLjI0NiwzMjYuMzQ0aC0xNi43ODd2LTE2Ljc4N2gxNi43ODdWMzI2LjM0NHoiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTMwOS41NTcsMzIuNTc0SDE5Mi4wNDljLTUuMDM2LDAtOC4zOTMsMy4zNTctOC4zOTMsOC4zOTN2MzMuNTc0YzAsNS4wMzYsMy4zNTcsOC4zOTMsOC4zOTMsOC4zOTNoMTE3LjUwOCAgICAgYzUuMDM2LDAsOC4zOTMtMy4zNTcsOC4zOTMtOC4zOTNWNDAuOTY3QzMxNy45NTEsMzUuOTMxLDMxNC41OTMsMzIuNTc0LDMwOS41NTcsMzIuNTc0eiBNMzAxLjE2NCw2Ni4xNDhIMjAwLjQ0M1Y0OS4zNjFoMTAwLjcyMSAgICAgVjY2LjE0OHoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
    icon.title = "ascensor";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}


/**
 * Generate a icon hours24
 * @return icon_hours24
 */
function icon_hours24(new_id) {
    var icon = document.createElement('img');
    icon.className += "icon_img";
    icon.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5OC45NDYsMjk0Ljk1OWMtNS41MjEtMS4xMTYtMTAuOTAyLDIuNDU1LTEyLjAxOCw3Ljk3N0M0NjQuODM0LDQxMi4yNTYsMzY3LjcxNSw0OTEuNjAyLDI1Niw0OTEuNjAyICAgIGMtMTI5LjkxMSwwLTIzNS42MDItMTA1LjY5LTIzNS42MDItMjM1LjYwMlMxMjYuMDg5LDIwLjM5OCwyNTYsMjAuMzk4YzYxLjI4NywwLDEyMC4wNDEsMjMuOTcsMTYzLjgxOCw2Ni4yOTVoLTI2LjM2MSAgICBjLTUuNjMzLDAtMTAuMTk5LDQuNTY2LTEwLjE5OSwxMC4xOTljMCw1LjYzMyw0LjU2NiwxMC4xOTksMTAuMTk5LDEwLjE5OWg1MS4yMjljNS42MzMsMCwxMC4xOTktNC41NjYsMTAuMTk5LTEwLjE5OVY0NS42NjQgICAgYzAtNS42MzMtNC41NjYtMTAuMTk5LTEwLjE5OS0xMC4xOTljLTUuNjMzLDAtMTAuMTk5LDQuNTY2LTEwLjE5OSwxMC4xOTl2MjYuODQ4QzM4Ni44NywyNi4yMjgsMzIyLjgyMywwLDI1NiwwICAgIEMxODcuNjIsMCwxMjMuMzMzLDI2LjYyOCw3NC45OCw3NC45OEMyNi42MjgsMTIzLjMzMywwLDE4Ny42MiwwLDI1NnMyNi42MjgsMTMyLjY2Nyw3NC45OCwxODEuMDIgICAgQzEyMy4zMzMsNDg1LjM3MiwxODcuNjIsNTEyLDI1Niw1MTJjNTkuNDM4LDAsMTE3LjM1Mi0yMC44MywxNjMuMDc0LTU4LjY1MmM0NS4xMTYtMzcuMzIxLDc2LjMxNS04OS4zMDQsODcuODQ5LTE0Ni4zNzIgICAgQzUwOC4wMzksMzAxLjQ1NSw1MDQuNDY3LDI5Ni4wNzUsNDk4Ljk0NiwyOTQuOTU5eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwMS44MDEsMjQ1LjgwMWMtNS42MzMsMC0xMC4xOTksNC41NjYtMTAuMTk5LDEwLjE5OWMwLDIuMjgxLTAuMDMzLDQuNTg1LTAuMDk4LDYuODQ4ICAgIGMtMC4xNjEsNS42MzEsNC4yNzMsMTAuMzI2LDkuOTAzLDEwLjQ4N2MwLjEsMC4wMDIsMC4xOTgsMC4wMDQsMC4yOTcsMC4wMDRjNS40OTcsMCwxMC4wMzEtNC4zNzYsMTAuMTktOS45MDcgICAgYzAuMDctMi40NTcsMC4xMDYtNC45NTcsMC4xMDYtNy40M0M1MTIsMjUwLjM2Nyw1MDcuNDM0LDI0NS44MDEsNTAxLjgwMSwyNDUuODAxeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0OC44NTgsMzUwLjQxNkgxNDUuMjM0di0yMC4xNGMwLTQzLjIwNCwxMDkuMTQ3LTY1LjI5MywxMDkuMTQ3LTEzNS4xMzRjMC0zNS4wODItMjcuMjg2LTYyLjM2OS02NC42NDQtNjIuMzY5ICAgIGMtMzQuNDM0LDAtNjEuMDcsMjIuNzM5LTYxLjA3LDUzLjkyNGMwLDkuNzQ1LDMuMjQ4LDEzLjMxOSw5Ljc0NSwxMy4zMTljNy40NzEsMCwxMS4zNjktNC41NDgsMTEuMzY5LTguNzcxICAgIGMwLTI1LjY2MiwxNi44OTItMzguMzMyLDM5LjMwNi0zOC4zMzJjMjkuODg2LDAsNDMuODU0LDIyLjQxNCw0My44NTQsNDIuODhjMCw1Ni44NDYtMTA5Ljc5Nyw4MC41Ni0xMDkuNzk3LDEzNC40ODR2MzEuNTEgICAgYzAsNS4xOTgsNS44NDcsOC40NDYsMTAuMDcsOC40NDZoMTE1LjY0NGM0LjIyMywwLDcuNzk2LTQuODcyLDcuNzk2LTEwLjA3MUMyNTYuNjU0LDM1NC45NjQsMjUzLjA4MSwzNTAuNDE2LDI0OC44NTgsMzUwLjQxNnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODguNTM4LDI5My44OTNoLTE3Ljg2NnYtNjIuNjk1YzAtNS41MjMtNS41MjMtOC4xMjEtMTAuNzItOC4xMjFjLTUuNTIzLDAtMTAuNzE5LDIuNTk5LTEwLjcxOSw4LjEyMXY2Mi42OTVoLTYzLjY2OSAgICBsNzUuMDM5LTE0OC4xMjdjMC42NS0xLjYyNSwwLjk3NS0yLjkyNCwwLjk3NS00LjIyM2MwLTUuMTk4LTYuMTczLTguNzcxLTEwLjM5NS04Ljc3MWMtMy44OTgsMC03Ljc5NiwxLjk0OS0xMC4wNzEsNi40OTcgICAgbC04MS41MzUsMTYwLjc5N2MtMC45NzQsMS42MjUtMS4yOTksMy41NzMtMS4yOTksNS41MjNjMCw0Ljg3MiwyLjkyNCw4Ljc3MSw4LjQ0Niw4Ljc3MWg4Mi41MXY0Ny40MjYgICAgYzAsNS41MjIsNS4xOTgsOC40NDYsMTAuNzE5LDguNDQ2YzUuMTk4LDAsMTAuNzItMi45MjQsMTAuNzItOC40NDZ2LTQ3LjQyNmgxNy44NjZjNC44NzIsMCw4LjEyMS01LjE5OCw4LjEyMS0xMC4zOTUgICAgQzM5Ni42NTgsMjk5LjA5MSwzOTQuMDU5LDI5My44OTMsMzg4LjUzOCwyOTMuODkzeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
    icon.title = "recepcion 24 horas";
    if (new_id) {
        icon.id = new_id;
    }
    return icon;
}
