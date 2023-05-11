window.addEventListener('load', function() {
    var elements = document.querySelectorAll('i.hdr');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = 'hidden';
        elements[i].addEventListener('mouseover', function() {
            this.style.visibility = 'visible';
        });
        elements[i].addEventListener('mouseout', function() {
            this.style.visibility = 'hidden';
        });
    }
});