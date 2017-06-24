$document.ready(function () {
    $('#submit_shot').click(function () {
        var userID=$('#USER_ID').val();
        var Vorname=$('#vorname').val();
        var Nachname=$('#nachname').val();
        var Geschlecht=$('#input[name = "sexradio"]:checked').val(); //AB HIER WEISS ICH NICHT WEITER
        var sendedata={name:ShotName, zutaten:Zutaten};
        //ZUERST NEUEN SHOT HINZUFÜGEN!
        $.post('js/dbc/shot.php', sendedata, function (data) {
            data = JSON.parse(data);
        });

        //DANNACH SHOTBEWERTUNG ABGEBEN
    });
});
