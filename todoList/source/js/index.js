function addItem(name) {
  // Create a html dynamically
  var element = $('<div class="item"></div>');
  var checkbox = $('<div class="checkbox"></div>');
  var sp = $('<span class="itemName">' + name + '</span>');
  var removeButton = $('<button class="remove">x</button>');
  var clearButton = $('<button class="clear">Clear</button>')

  var checked = false;
  checkbox.click(function() {
    checked = !checked;
    if(checked) {
      checkbox.addClass('checked');
      sp.addClass('done');
    } else {
      checkbox.removeClass('checked');
      sp.removeClass('done');
    }
  });
  removeButton.click(function() {
    if (confirm('Are ye sure u want to delte this?')) {
      element.remove();
    }
  });
  // There are no loops in javascript, so this only checks once. So you have to constantly trigger the checking
  // if(('#itemList').has(div)) {
  //   clearButton.appendTo('#itemList');
  // }
  element.append(checkbox);
  element.append(sp);
  element.append(removeButton);
  element.prependTo('#itemList');
}
$('#add').click(function(){
  var name = $('#name').val();
  // checks if text is empty. When empty, do not add anything
  if (name == "") {
    return;
  }
  addItem(name);
  // clear input
  $('#name').val("");
});
