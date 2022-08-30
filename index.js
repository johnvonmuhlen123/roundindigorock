$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#translate-es').addEventListener('click', translate);
})

function translate() {
    if (document.querySelector('#test-es').style.display === 'block' )
    {
            Array.from(document.getElementsByClassName('links-es')).forEach(element => {
            element.style.display = 'none';
           });
           Array.from(document.getElementsByClassName('links-en')).forEach(element => {
            element.style.display = 'block';
           });
    }
    else
    {
        Array.from(document.getElementsByClassName('links-es')).forEach(element => {
            element.style.display = 'block';
           });
           Array.from(document.getElementsByClassName('links-en')).forEach(element => {
            element.style.display = 'none';
           });
    }

}