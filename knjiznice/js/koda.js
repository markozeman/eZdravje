
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
  var visine = [];
  var teze = [];
  var temperature = [];
  var krvni_tlak_zgornji = [];
  var krvni_tlak_spodnji = [];
  var kisik_v_krvi = [];
  
  if (stPacienta == 1) {
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
	            	$("#kreirajSporocilo").html("<span class='obvestilo label " +
                "label-danger fade-in'>Napaka '" +
                JSON.parse(err.responseText).userMessage + "'!");
	            }
	        });
	    }
	});
  
  return id[stPacienta-1];
}


var EHR = [];

function generirajTriPaciente(stPacienta) {
    EHR[0] = generirajPodatke(1);
    EHR[1] = generirajPodatke(2);
    EHR[2] = generirajPodatke(3);
}



// TODO: Tukaj implementirate funkcionalnost, ki jo podpira vaša aplikacija




