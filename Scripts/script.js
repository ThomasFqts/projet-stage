$add_day = document.getElementById('add-day');

$add_day.addEventListener('click', function () {
    var joursHeures = document.getElementById('jours-heures');
    var newDay = joursHeures.children[0].cloneNode(true);
    var newOpeningHour = joursHeures.children[1].cloneNode(true);
    var newClosingHour = joursHeures.children[2].cloneNode(true);

    newDay.querySelector('input').value = '';
    newOpeningHour.querySelector('input').value = '';
    newClosingHour.querySelector('input').value = '';

    joursHeures.appendChild(newDay);
    joursHeures.appendChild(newOpeningHour);
    joursHeures.appendChild(newClosingHour);
});

$cp = document.getElementById('code_postal');
$cp.addEventListener('change', function () {
    var newCodePostal = document.getElementById('new_code_postal');
    if (this.value === 'other') {
        newCodePostal.style.display = 'block';
    } else {
        newCodePostal.style.display = 'none';
    }
});

$ville = document.getElementById('ville');
$ville.addEventListener('change', function () {
    var newVille = document.getElementById('new_ville');
    if (this.value === 'other') {
        newVille.style.display = 'block';
    } else {
        newVille.style.display = 'none';
    }
});