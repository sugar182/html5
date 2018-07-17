function test(){
    var result = $.ajax({
      url: 'https://reservation.ald.smt.docomo.ne.jp/VIEW_RESERVATION/rif/ns/RI/Accepts'
    }).done(function(json) {
      for(var i=0; i<json.length; i++) {
        $('#test1_result').append(json[i].version + ' ' + json[i].codename + '<br>');
      }
    }).fail(function() {
      $('#test1_result').text('ERROR');
    });

}

