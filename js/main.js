var replaceText;
replaceText = function () {
    var btn = document.getElementById("button1");
    /*var txt = div1.innerText;
     if (txt.contains('hahaha')) div1.innerText = div1.innerText.replace('hahaha','lol')
     else div1.innerText = div1.innerText.replace('lol','hahaha')
     */
    //alert(document.getElementById('inputValue').value);
    btn.innerHTML = document.getElementById('inputValue').value;
};

var createTableOfArhimed;
createTableOfArhimed = function () {
    var div = document.getElementById("tableContainer");

    //remove table if exist
    if (div.firstChild != null)  var table = div.removeChild(div.firstChild);

    //create table and insert into div
    var table = document.createElement('table')
    div.appendChild(table);

    for (var row = 1; row <= document.getElementById('tableRows').value; row++){

        var tr = document.createElement('tr');
        table.appendChild(tr);

        for (var column = 1; column <= document.getElementById('tableColumns').value; column++){
            var td = document.createElement('td');
            td.innerHTML = row*column;//'(' +row +';' + column+')';
            tr.appendChild(td);
            console.log('row= ' +row +' column= ' + column);
        }
    }

}

var changeBackground;

changeBackground = function() {
    var bodyBgr = document.getElementsByTagName("body")[0]
    if (bodyBgr.getAttribute("background") != "img/background-summer.jpg") bodyBgr.setAttribute("background","img/background-summer.jpg")
    else bodyBgr.setAttribute("background","img/background-wallpaper.jpg")
}

document.getElementsByTagName("body")[0].addEventListener('click', changeBackground, false);
