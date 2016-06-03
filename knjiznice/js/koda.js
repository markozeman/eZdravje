
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";



/**
 * Prijava v sistem z privzetim uporabnikom za predmet OIS in pridobitev
 * enolične ID številke za dostop do funkcionalnosti
 * @return enolični identifikator seje za dostop do funkcionalnosti
 */
function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}


/**
 * Generator podatkov za novega pacienta, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati novega pacienta z
 * določenimi osebnimi podatki (ime, priimek in datum rojstva) ter za njega
 * shraniti nekaj podatkov o vitalnih znakih.
 * @param stPacienta zaporedna številka pacienta (1, 2 ali 3)
 * @return ehrId generiranega pacienta
 */
function generirajPodatke(stPacienta) {
  ehrId = "";

  // TODO: Potrebno implementirati
  
  var sessionId = getSessionId();
  
  var id = [-1,-1,-1];
  
  
  var pacient = {
      ime: "",
      priimek: "",
      datum_rojstva: ""
  };
  var casi_meritev = [];
  var visine = [];
  var teze = [];
  var temperature = [];
  var krvni_tlak_zgornji = [];
  var krvni_tlak_spodnji = [];
  var kisik_v_krvi = [];
  
  if (stPacienta == 1) {
      casi_meritev = ["2015-09-01T11:40Z", "2015-10-01T11:30Z", "2015-11-01T11:40Z", "2015-12-01T11:40Z", "2016-01-01T11:40Z", "2016-02-01T11:40Z", "2016-09-03T14:40Z", "2016-04-01T17:40Z", "2016-05-01T11:40Z", "2016-06-01T19:40Z"];
      visine = [50.0, 52.1, 54.5, 56.7, 59.9, 63.2, 65.6, 69.9, 71.3, 72.8];
      teze = [3100, 4250, 4999, 5775, 6240, 6969, 7555, 8324, 8846, 9119];
      temperature = [36.4, 36.8, 37.0, 35.9, 35,7, 36,2, 36.5, 36.5, 35.8, 36.0];
      krvni_tlak_zgornji = [87, 101, 106, 106, 105, 106, 107, 108, 105, 104];
      krvni_tlak_spodnji = [68, 65, 63, 63, 65, 66, 67, 67, 68, 69];
      kisik_v_krvi = [99, 98, 98, 97, 98, 96, 95, 97, 96, 97];
      
      pacient = {
          ime: "Janez",
          priimek: "Novak",
          datum_rojstva: "1. 9. 2015", 
          datumi_meritev: casi_meritev,
          ehrID: id[0],
          visina: visine,
          teza: teze,
          temperatura: temperature,
          tlak_zgornji: krvni_tlak_zgornji,
          tlak_spodnji: krvni_tlak_spodnji,
          kisik: kisik_v_krvi
      };
  }
  
  else if (stPacienta == 2) {
      casi_meritev = ["2015-07-25T11:00Z", "2015-08-25T10:40Z", "2015-09-25T11:40Z", "2015-10-25T17:37Z", "2015-11-25T15:40Z", "2015-12-25T17:40Z", "2016-01-25T11:21Z", "2016-02-25T13:30Z", "2016-03-25T12:50Z", "2016-04-25T11:40Z", "2016-05-25T11:22Z", ];
      visine = [48.3, 51.1, 53.5, 56.7, 59.9, 63.2, 65.6, 69.9, 71.3, 72.8, 75.1];
      teze = [2751, 3070, 3950, 4789, 5765, 6240, 6779, 7535, 8124, 8746, 9009];
      temperature = [36.3, 36.2, 37.0, 35.9, 35,8, 36,4, 36.3, 36.5, 36.0, 36,0, 36.2];
      krvni_tlak_zgornji = [79, 99, 101, 104, 105, 106, 106, 107, 105, 104, 105];
      krvni_tlak_spodnji = [68, 65, 64, 63, 65, 66, 66, 67, 68, 67, 67];
      kisik_v_krvi = [99, 98, 98, 99, 98, 96, 95, 97, 96, 97, 98];
      
      pacient = {
          ime: "Ana",
          priimek: "Horvat",
          datum_rojstva: "25. 7. 2015",
          datumi_meritev: casi_meritev,
          ehrID: id[1],
          visina: visine,
          teza: teze,
          temperatura: temperature,
          tlak_zgornji: krvni_tlak_zgornji,
          tlak_spodnji: krvni_tlak_spodnji,
          kisik: kisik_v_krvi
      };
  }
  
  else {
      casi_meritev = ["2016-03-07T15:30Z", "2016-04-07T17:33Z", "2016-05-07T19:59Z"];
      visine = [51.0, 56.4, 63.0];
      teze = [3771, 4697, 5501];
      temperature = [36.0, 36.0, 36.7];
      krvni_tlak_zgornji = [88, 100, 105];
      krvni_tlak_spodnji = [68, 65, 62];
      kisik_v_krvi = [99, 98, 98];
      
      pacient = {
          ime: "Luka",
          priimek: "Zupančič",
          datum_rojstva: "7. 3. 2016",
          datumi_meritev: casi_meritev,
          ehrID: id[2],
          visina: visine,
          teza: teze,
          temperatura: temperature,
          tlak_zgornji: krvni_tlak_zgornji,
          tlak_spodnji: krvni_tlak_spodnji,
          kisik: kisik_v_krvi
      };
  }
  
  
  $.ajaxSetup({
	  headers: {"Ehr-Session": sessionId}
	});
	$.ajax({
	    url: baseUrl + "/ehr",
	    type: 'POST',
	    success: function (data) {
	        var ehrId = data.ehrId;
	        var partyData = {
	            firstNames: pacient.ime,
	            lastNames: pacient.priimek,
	            dateOfBirth: pacient.datumRojstva,
	            
	            
	            
	            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
	        };
	        $.ajax({
	            url: baseUrl + "/demographics/party",
	            type: 'POST',
	            contentType: 'application/json',
	            data: JSON.stringify(partyData),
	            success: function (party) {
	                if (party.action == 'CREATE') {
	                    /*
	                    $("#kreirajSporocilo").html("<span class='obvestilo " +
                      "label label-success fade-in'>Uspešno kreiran EHR '" +
                      ehrId + "'.</span>");
                      */
                      if (stPacienta == 1) {
                        $("#kreirajSporocilo1").text(ehrId);
                      }
                      else if (stPacienta == 2) {
                        $("#kreirajSporocilo2").text(ehrId);
                      }
                      else {
                        $("#kreirajSporocilo3").text(ehrId);
                      }
                      
                      id[stPacienta-1] = ehrId;
	                }
	            },
	            error: function(err) {
	            	$("#kreirajSporocilo1").html("<span class='obvestilo label " +
                "label-danger fade-in'>Napaka '" +
                JSON.parse(err.responseText).userMessage + "'!");
	            }
	        });
	    }
	});
  
  return id[stPacienta-1];
}


var EHR = [];
var zgenerirani_podatki = false;

function generirajTriPaciente() {
    EHR[0] = generirajPodatke(1);
    EHR[1] = generirajPodatke(2);
    EHR[2] = generirajPodatke(3);
    zgenerirani_podatki = true;
}


var napacen_pacient = false;


$(document).ready(function() {
    var prikaz = document.getElementById("prikaz_podatkov");
    if (prikaz) {
      if (napacen_pacient) {
        prikaz.addEventListener('click', prikazi_obvestilo_o_napaki, false);
      }  
      else {
        prikaz.addEventListener('click', prikazi_podatke, false);
      }
      
    }
    
    var meritev = document.getElementById("nova_meritev");
    if (meritev) {
      meritev.addEventListener('click', prikazi_polja_za_vnos, false);
    }
    
    console.log(zgenerirani_podatki);
    console.log($('#ehr_ID').empty());
    ///////////////////////////////////////////////////////////////////////////////// zakaj ne dela?
    if (!($('#ehr_ID').empty()) || zgenerirani_podatki) {
      $('#prikaz_podatkov').prop('disabled', false);
    }
    /////////////////////////////////////////////////////////////////////////////////
    
});



function prikazi_obvestilo_o_napaki(e) {
  $('#opozorilo_o_napaki').show(250);
}

function prikazi_podatke(e) {
  $('#nova_meritev').show(500);
  $('#row1').show(500);
  $('#row2').show(500);
  $('#row3').show(500);
  $('#ime_priimek_rd').show(500);
}


function prikazi_polja_za_vnos(e) {
  $('#vnosna_polja').toggle(500);
  
  if ($('#nova_meritev').text() == "Skrij podatke nove meritve") {
    $('#nova_meritev').text("Vnesi podatke nove meritve");
  }
  else {
    $('#nova_meritev').text("Skrij podatke nove meritve");
  }
}





function dodajMeritve() {
	var sessionId = getSessionId();
  var ehrId = "";
  
  if (!($('#ehr_ID').empty())) {
    ehrId = $("#dodajVitalnoEHR").val();  
  }
  else {
    if ($('#select_id').val() == 0) {
      ehrId = EHR[0];
    }
    else if ($('#select_id').val() == 1) {
      ehrId = EHR[1];
    }
    else if ($('#select_id').val() == 2) {
      ehrId = EHR[2];
    }
    
  }
  
  console.log(ehrId);
  
	var datumInUra = $("#dodaj_datum_ura").val();
	var telesnaVisina = $("#dodaj_visina").val();
	var telesnaTeza = $("#dodaj_teza").val();
	var telesnaTemperatura = $("#dodaj_temperatura").val();
	var sistolicniKrvniTlak = $("#dodaj_sistolicni").val();
	var diastolicniKrvniTlak = $("#dodaj_diastolicni").val();
	var nasicenostKrviSKisikom = $("#dodaj_kisik").val();

	if (!ehrId || ehrId.length == 0) {
		$("#dodaj_meritve_sporocilo").html("<span class='obvestilo " +
      "label label-warning fade-in'>Prosimo vnesite vse zahtevane podatke.</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var podatki = {
			// Struktura predloge je na voljo na naslednjem spletnem naslovu:
      // https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
		    "ctx/language": "en",
		    "ctx/territory": "SI",
		    "ctx/time": datumInUra,
		    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
		    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
		   	"vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
		    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
		    "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
		    "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
		    "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom
		};
		var parametriZahteve = {
		    ehrId: ehrId,
		    templateId: 'Vital Signs',
		    format: 'FLAT',
		};
		$.ajax({
		    url: baseUrl + "/composition?" + $.param(parametriZahteve),
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(podatki),
		    success: function (res) {
		        $("#dodaj_meritve_sporocilo").html(
              "<span class='obvestilo label label-success fade-in'>" +
              res.meta.href + ".</span>");
		    },
		    error: function(err) {
		    	$("#dodaj_meritve_sporocilo").html(
            "<span class='obvestilo label label-danger fade-in'>Napaka '" +
            JSON.parse(err.responseText).userMessage + "'!");
		    }
		});
	}
}




