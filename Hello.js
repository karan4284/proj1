function clickme(){
    var h1 = document.getElementById('heading');
    if(h1.style.display === 'none'){
        h1.style.display = 'block';
    } else {
        h1.style.display = 'none';
    }
}