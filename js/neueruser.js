$(document).ready(function () {
    $('#submit_tester').click(function () {
        var Vorname = $('#vorname').val();
        var Nachname = $('#nachname').val();
        var Kuerzel=$('#kuerzel').val();
        var Geschlecht=$('input[name = "sexradio"]:checked').val();
        var Aktiv=$('#usr_aktiv').is(":checked")? 1:0;

        var sendedata= {vorname:Vorname,
                        nachname: Nachname,
                        kuerzel: Kuerzel,
                        geschlecht: Geschlecht,
                        aktiv: Aktiv};
        //ZUERST NEUEN SHOT HINZUFÜGEN!
        $.post('js/dbc/new_user.php', sendedata, function (data) {
            data = JSON.parse(data);
            alert(data);
        });

        //DANNACH SHOTBEWERTUNG ABGEBEN
    });
});
