function hello() {
    alert("hello");
}

if (localStorage.getItem("counter1") == "undefined") {
    var i = 0;
} else {
    i = Number(localStorage.getItem("counter1"));
}

$(document).ready(function() {
    $("#line").click(function() {
        $(this).text("this is a test");
    });
    $(this).click(function() {
        i = i + 1;
        localStorage.setItem("counter1", i);
        //document.getElementById("counter").innerHTML = localStorage.counter1;
        console.log(i);
        $("#counter").text(i);
    });
    /*$("#line").hover(
        function () {
        alert("check it out ok");
        },
        function() {
        alert("it is stupifying");
    });*/
});