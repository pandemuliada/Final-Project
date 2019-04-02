$(document).ready(function () {
  $('#floatingBtn').click( function () {
      $('#messageForm').toggle();
      $(this).toggleClass('active');
  })

  $('#btnCloseSearch').click(function () {
    $('#searchContainer').hide();
  })
  $('#btnOpenSearch').click(function () {
    $('#searchContainer').show();
  })
})