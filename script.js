$('document').ready(function() {
  $('#searchButton').click(function() {
    var searchParam = $('#searchParam').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchParam + "&callback=?";
    $.getJSON(url, function(data) {
      // console.log(data);
      $('#results').html('');
      for(var i = 0; i < data[1].length; i++) {
        $('#results').prepend("<div class='well well-lg center-block'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div>");
        $('#results a').attr('target', '_blank');
      }
    });
    $('#searchParam').val('');
  });

  $('#searchParam').keypress(function(e) {
    if(e.which == 13){ // if the 'enter' or 'return' key is pressed
      $('#searchButton').click(); // this triggers the click event
    }
  });
});
