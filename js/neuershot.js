$document.ready(function () {
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
