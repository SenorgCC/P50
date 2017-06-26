$(document).ready(function () {
    var userBewertung=[];
    alert("test!");
    $.post('js/dbc/user_auswahl.php', function (data) {
        data = JSON.parse(data);

        $.each(data, function (index, data) {
            //if (value != 0) {
           $('#Userliste').append(
                '<div class="row" id="row">'
                    +'<div id="user" class="col-sm-2" style="background-color:yellow;">'
                        +'<label >'+data[1]+"#"+data[0]+'</label>'
                    +'</div>'
                    +'<div id="Rating" class="col-sm-10" style="background-color:pink;">'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="0">0</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="1">1</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="2">2</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="3">3</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="4">4</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="5">5</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="6">6</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="7">7</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="8">8</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="9">9</label>'
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="10">10</label>'
                    +'</div>'
                +'</div>'
                );
        });
    });


    $('#submit_shot').click(function () {
        //var bewertung=$('input[name = "optradio"]:checked').val();
        var userID=$('#USER_ID').val();
        var ShotName=$('#shotname').val();
        var Zutaten=$('#zutaten').val();

        var sendedata={name:ShotName, zutaten:Zutaten};
        //$.post('js/dbc/shot.php', sendedata, function (data) {
        //    data = JSON.parse(data);
        //    alert(data);
        //});

        //DANNACH SHOTBEWERTUNG ABGEBEN

        $('#Userliste > div > #user > label').each(function(){
                var usertag = $(this).text();
                var userarray=usertag.split('#');
                //userBewertung.push(userarray);
                var inputname="optradio"+userarray[1]
                inputname = JSON.stringify(inputname);
                var bewertung=$(this).children('input[name ='+inputname+']:checked').val();
                alert(bewertung);
            });
    });
});
