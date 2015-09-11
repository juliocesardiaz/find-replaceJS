var findReplace = function(phrase, findWord, replaceWord){
  return phrase.toLowerCase().replace(new RegExp(("\\b" + findWord + "\\b"), 'g'), replaceWord);
};

$(document).ready(function(){
  $("form#word_order").submit(function(event){
    var phrase = ($("input#phrase").val());
    var find = ($("input#find").val());
    var replace = ($("input#replace").val());
    var result = findReplace(phrase, find, replace);

    //$(".phrase").text(phrase);
    $(".answer").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
