

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -200; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.section');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
            section.classList.add('fade-in');
        };
    });
}


document.addEventListener("scroll", scanDocument);
