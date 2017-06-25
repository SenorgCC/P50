$(document).ready(function () {

    $.post('js/dbc/user_auswahl.php', function (data) {
        data = JSON.parse(data);

        $.each(data, function (index, data) {
            //if (value != 0) {
           $('#Userliste').append(
                '<div class="row">'
                    +'<div class="col-sm-2" style="background-color:yellow;">'
                        +'<label id="user">'+data[1]+"#"+data[0]+'</label>'
                    +'</div>'
                    +'<div class="col-sm-10" style="background-color:pink;">'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="0">0</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="1">1</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="2">2</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="3">3</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="4">4</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="5">5</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="6">6</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="7">7</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="8">8</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="9">9</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio" value="10">10</label>'
                    +'</div>'
                +'</div>'

                );
          
        });
    });

    $('#submit_shot').click(function () {
        var bewertung=$('input[name = "optradio"]:checked').val();
        var userID=$('#USER_ID').val();
        var ShotName=$('#shotname').val();
        var Zutaten=$('#zutaten').val();
        var sendedata={name:ShotName, zutaten:Zutaten};
        //ZUERST NEUEN SHOT HINZUFÜGEN!
        $.post('js/dbc/shot.php', sendedata, function (data) {
            data = JSON.parse(data);
            alert(data);
        });

        //DANNACH SHOTBEWERTUNG ABGEBEN
    });
});
