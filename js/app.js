function ageInDays() {
    var birthYear = prompt('What year were u born dude ?');
    var ageDays = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textResult = document.createTextNode('You are ' + ageDays + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textResult);
    document.getElementById('result-text').appendChild(h1);
};

function reset() {
    document.getElementById('ageInDays').remove();
};

function lightTheme() {
    document.getElementById('body').style.backgroundColor = "white";
    document.getElementById('result').style.color = "black";
    document.getElementById('project-text').style.color = "black";
    document.getElementById('project-text').style.border = "2px solid black";
    document.getElementById('buttons').style.border = "2px solid black";
};

function darkTheme() {
    document.getElementById('body').style.backgroundColor = "black";
    document.getElementById('result').style.color = "white";
    document.getElementById('project-text').style.color = "white";
    document.getElementById('project-text').style.border = "2px solid white";
    document.getElementById('buttons').style.border = "2px solid white";
}