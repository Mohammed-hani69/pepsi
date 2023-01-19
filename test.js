//how to stock data in local storage?



var content = document.getElementById('content'),
    save    = document.getElementById('save'),
    output  = '<ul>',
    animals = [{
      name: 'bob',
      type: 'dog'
    }, {
      name: 'fred',
      type: 'lizard'
    }];

// set on load for testing
localStorage.setItem('animals', JSON.stringify(animals));

// grab localStorage data on click and create a list
save.addEventListener('click', function() {
    var ls = JSON.parse(localStorage.getItem('animals'));  
    for (var i = 0; i < ls.length; i++) {
      output += '<li>' + ls[i].name + ', ' + ls[i].type + '</li>';
    }

  output += '</ul>';
  content.innerHTML = output;
});



