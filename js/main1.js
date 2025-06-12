function changeClass1(element) {
    element.classList.add('col-md-12');
    element.classList.remove('col-md-6');

    var descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description-inline');
    descriptionElement.textContent = "The production of cloth for traditional Palestinian costumes and for export throughout the Arab world was a key industry of the destroyed village of Majdal. Malawi weaving, as the technique is known, is woven by a male weaver on a single treadle loom, using black and indigo cotton threads combined with fuchsia and turquoise silk threads.";
    
    var cardBody = element.querySelector('.card-body');
    cardBody.appendChild(descriptionElement);
}

function revertClass1(element) {
    element.classList.remove('col-md-12');
    element.classList.add('col-md-6');

    var descriptionElement = element.querySelector('.description-inline');
    if (descriptionElement) {
        descriptionElement.remove();
    }
}

function changeClass2(element) {
    element.classList.add('col-md-12');
    element.classList.remove('col-md-6');

    var descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description-inline');
    descriptionElement.textContent = "A key Hebron industry, glass has been produced in the city since the Roman rule in Palestine. As the quote says: If Hebron could boast of its glass bracelets, its big he-goat skins, and its fine grapes; if Gaza was still the granary of Palestine; if Lydda was reputed for its oil markets and mat industry; Nablus could point with pride to its soap manufactories.";
    
    var cardBody = element.querySelector('.card-body');
    cardBody.appendChild(descriptionElement);
}

function revertClass1(element) {
    element.classList.remove('col-md-12');
    element.classList.add('col-md-6');

    var descriptionElement = element.querySelector('.description-inline');
    if (descriptionElement) {
        descriptionElement.remove();
    }
}

function changeClass3(element) {
    element.classList.add('col-md-12');
    element.classList.remove('col-md-6');

    var descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description-inline');
    descriptionElement.textContent = "A Galilee craftsman who learned the art of straw weaving from his grandmother is showing an exhibit of tabaqs (woven trays) and other items at the Ein Dor Archaeological Museum, based on heirloom weaving techniques.";
    
    var cardBody = element.querySelector('.card-body');
    cardBody.appendChild(descriptionElement);
}

function revertClass1(element) {
    element.classList.remove('col-md-12');
    element.classList.add('col-md-6');

    var descriptionElement = element.querySelector('.description-inline');
    if (descriptionElement) {
        descriptionElement.remove();
    }
}

function changeClass4(element) {
    element.classList.add('col-md-12');
    element.classList.remove('col-md-6');

    var descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description-inline');
    descriptionElement.textContent = "Olive-wood is ideal for craft-making being resistant to decay and receptive to a number of surfacing treatments. The wood is usually carved using simple hand tools. Today, rough cutting is carried out using machines programmed with a design model, though fine work, such as work with facial structures, must be chiseled by hand.";
    
    var cardBody = element.querySelector('.card-body');
    cardBody.appendChild(descriptionElement);
}

function revertClass1(element) {
    element.classList.remove('col-md-12');
    element.classList.add('col-md-6');

    var descriptionElement = element.querySelector('.description-inline');
    if (descriptionElement) {
        descriptionElement.remove();
    }
}
