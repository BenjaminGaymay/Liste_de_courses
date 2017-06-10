function ajouterDansLaListe($element) {
  if ($element.val() === "" || $element.val().length >= 35) {
    $element.css({
      borderColor: 'red'
    });
  }
  else {
    $element.css({
      borderColor: '#ccc'
    });
    $('#maListe').append("<li class='elem'><p>" + $element.val() + "</p><div class='supprimer'>❌<div/></li>");
  };
  $element.val('');
};

function afficherListe() {
  $('#maListe').slideToggle(400);
  return false;
};

function cacherListe() {
  $('#maListe').slideToggle(400);
  return true;
};

function afficherOuCacher($click) {
  var $afficher = 'Afficher la liste';
  var $cacher = 'Cacher la liste';

  $('.button').text($afficher);
  $('.button').on('click', function() {
    if ($click === false) {
      $(this).text($cacher);
      $click = cacherListe();
    }
    else {
      $(this).text($afficher);
      $click = afficherListe();
    };
  });
  return $click;
}

$(document).ready(function() {
  var $click = false;

  $("#maListe").hide();
  $click = afficherOuCacher($click);

  $("#valider").on('click', function(e) {
    e.preventDefault();
    ajouterDansLaListe($("#element"));
  });

  $('ul').on('dbclick', 'li', '.supprimer', function() {
    $(this).remove();
  });
});
