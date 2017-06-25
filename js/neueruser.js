$document.ready(function () {
    $('#submit_tester').click(function () {

        var Vorname = $('#vorname').val();
        var Nachname = $('#nachname').val();
        var Kuerzel=$('#kuerzel').val();
        var Geschlecht=$('input[name = "sexradio"]:checked').val();
        var Aktiv=$('#usr_aktiv').is(":checked");
        alert(Vorname, Nachname, Kuerzel, Geschlecht, Aktiv);
        var sendedata={name:ShotName, zutaten:Zutaten};
        //ZUERST NEUEN SHOT HINZUFÜGEN!
        $.post('js/dbc/shot.php', sendedata, function (data) {
            data = JSON.parse(data);
            alert(data);
        });

        //DANNACH SHOTBEWERTUNG ABGEBEN
    });
});
