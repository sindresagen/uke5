//controller
function register() {
    persons.push(personName);
    updateView();
}

function deletePerson(index) {
    persons.splice(index, 1);
    updateView();
}