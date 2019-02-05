$(function() {
  $('#themed-button').button();
  $('#themed-tabs').tabs();

  var themeCssLink = $('#theme-style');
  var themeStyleSource = 'css/jquery-ui.theme.{value}.css'
  $('#theme').selectmenu().on('selectmenuselect', function (event, selected) {
    // Set the link reference to the chosen css file
    themeCssLink.attr('href', themeStyleSource.replace('{value}', selected.item.value));
  });
});
