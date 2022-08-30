$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.getElementsByClassName('postcard__img')
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var span = document.getElementsByClassName("close")[0];

    Array.from(images).forEach(element => {
        element.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        })
    });

    span.onclick = function() {
        modal.style.display = "none";
    }
})