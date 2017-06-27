$(document).ready(function () {
    var UserBewertungen=[];
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
                        +'<label class="radio-inline"><input type="radio" name="optradio'+data[0]+'" value="11"><i>Lappen</i></label>'
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
        // TODO: Wieder aktivieren, sobald usershotbewertung funktioniert
        //$.post('js/dbc/shot.php', sendedata, function (data) {
        //    data = JSON.parse(data);
        //    alert(data);
        //});
        //NEUER Ansatz fürs einfügen von neuen Daten!
        /*$.ajax({
            type:'POST',
            url:'js/dbc/shot.php',
            data:sendedata,
            success:function(data){},
            async:false
        });*/

        //Datenerfassung: User-Shotbewertung
        $('#Userliste > #row').each(function(){
                var usertag = $(this).find('#user>label').text();

                var userarray=usertag.split('#');
                //userBewertung.push(userarray);
                var inputname="optradio"+userarray[1];
                inputname = JSON.stringify(inputname);
                var Bewertung=$(this).find('input[name ='+inputname+']:checked').val();
                var Nutzerbewertung={UserKuerzel:userarray[0],
                                 UserID:userarray[1],
                                 Bewertung:Bewertung};
                UserBewertungen.push(Nutzerbewertung);
        });

        //Weitergabe der Daten an die Verarbeitung der Userbewertungen
        FilterUserRating(UserBewertungen);

        // Hier kommt die weitere logik zum eintragen der Userbewertung!

    });
});

var FilterUserRating=function(UserObjectArray){
    var ShotName=$('#shotname').val();
    $.when(
        $.ajax({
            type:'POST',
            url:'js/dbc/getShotID.php',
            data:{name:ShotName},
            success:function(data){
                data = JSON.parse(data);
                var shotID = data;
                return shotID;
            },
            async:false
        })
        ).then(function(ShotID){
            UserObjectArray.forEach(function(UserObject){
                if(UserObject.Bewertung!=11){
                    insertIntoDB(UserObject.UserID, ShotID,UserObject.Bewertung);
                }
            });
        });
};

var insertIntoDB = function(UserID, ShotID, UserRating){
    //Erstmal Checken, ob Es schon eine Bewertung zu dem Shot gibt, wenn ja: Update, sonst Insert!
    var sendedata={ userid:UserID,
                    shotid:ShotID,
                    UserRating:UserRating};
    $.ajax({
        type:'POST',
        url:'js/dbc/rateNewShot.php',
        data:sendedata,
        success:function(data){},
        async:false
    });
    //Banner Anzeigen: Shot wurde bewertet
};

//Shot muss noch irgendwie Bestimmt werden!
//Ansatz zum bestimmen der ShotID
var getShotID = function(ShotName){
    //$.ajaxSetup({async: false});
    var sendedata={name:ShotName};

    $.ajax({
        type:'POST',
        url:'js/dbc/getShotID.php',
        data:sendedata,
        success:function(data){
            data = JSON.parse(data);
            var shotID = data;
            return shotID;
        },
        async:false
    });
};
