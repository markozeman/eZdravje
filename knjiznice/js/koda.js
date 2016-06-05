
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
      casi_meritev = ["2015-09-01T11:40Z", "2015-10-01T11:30Z", "2015-11-01T11:40Z", "2015-12-01T11:40Z", "2016-01-01T11:40Z", "2016-02-01T11:40Z", "2016-03-01T14:40Z", "2016-04-01T17:40Z", "2016-05-01T11:40Z", "2016-06-01T19:40Z"];
      visine = [46.0, 48.1, 50.5, 52.7, 55.9, 59.2, 61.6, 65.9, 67.3, 68.8];
      teze = [4.100, 5.550, 6.399, 7.375, 7.940, 8.769, 9.555, 10.324, 10.946, 11.519];
      temperature = [36.4, 36.8, 37.0, 35.9, 35,7, 36,2, 36.5, 36.5, 35.8, 36.0];
      krvni_tlak_zgornji = [97, 111, 116, 116, 115, 116, 114, 118, 115, 114];
      krvni_tlak_spodnji = [73, 70, 68, 68, 70, 71, 72, 73, 73, 75];
      kisik_v_krvi = [99, 96, 96, 95, 95, 94, 94, 92, 89, 90];
      
      pacient = {
          ime: "Janez",
          priimek: "Novak",
          datum_rojstva: "2015-09-01T11:40:00.000Z",
          spol: "MALE",
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
      visine = [51.3, 54.1, 56.5, 59.7, 62.9, 66.2, 68.6, 72.9, 75.3, 77.8, 81.1];
      teze = [2.351, 2.670, 3.550, 4.389, 5.365, 5.840, 6.379, 6.935, 7.524, 8.146, 8.709];
      temperature = [36.3, 36.2, 37.0, 35.9, 35,8, 36,4, 36.3, 36.5, 36.0, 36,0, 36.2];
      krvni_tlak_zgornji = [79, 99, 101, 104, 105, 106, 106, 107, 105, 104, 105];
      krvni_tlak_spodnji = [68, 65, 64, 63, 65, 66, 66, 67, 68, 67, 67];
      kisik_v_krvi = [99, 98, 98, 99, 98, 96, 95, 97, 96, 97, 98];
      
      pacient = {
          ime: "Ana",
          priimek: "Horvat",
          datum_rojstva: "2015-07-25T11:00:00.000Z",
          datumi_meritev: casi_meritev,
          spol: "FEMALE",
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
      teze = [3.771, 4.697, 5.501];
      temperature = [36.0, 36.0, 36.7];
      krvni_tlak_zgornji = [88, 100, 105];
      krvni_tlak_spodnji = [68, 65, 62];
      kisik_v_krvi = [99, 98, 98];
      
      pacient = {
          ime: "Luka",
          priimek: "Zupančič",
          datum_rojstva: "2016-03-07T15:30:00.000Z",
          spol: "MALE",
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
  
  var ehrId = "";
  
  $.ajaxSetup({
	  headers: {"Ehr-Session": sessionId}
	});
	$.ajax({
	    url: baseUrl + "/ehr",
	    type: 'POST',
	    success: function (data) {
	        ehrId = data.ehrId;
	        var partyData = {
	            firstNames: pacient.ime,
	            lastNames: pacient.priimek,
	            dateOfBirth: pacient.datum_rojstva,
	            gender: pacient.spol,
	            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
	        };
	        $.ajax({
	            url: baseUrl + "/demographics/party",
	            type: 'POST',
	            contentType: 'application/json',
	            data: JSON.stringify(partyData),
	            success: function (party) {
	                if (party.action == 'CREATE') {
	                    
                      if (stPacienta == 1) {
                        $("#kreirajSporocilo1").text(ehrId);
                        $('#kreirajSporocilo1').val(ehrId);
                      }
                      else if (stPacienta == 2) {
                        $("#kreirajSporocilo2").text(ehrId);
                        $('#kreirajSporocilo2').val(ehrId);
                      }
                      else {
                        $("#kreirajSporocilo3").text(ehrId);
                        $('#kreirajSporocilo3').val(ehrId);
                      }
                      
                      for(var i=0; i<visine.length; i++) {
                        dodajZacetneMeritve(ehrId, casi_meritev[i], visine[i], teze[i], temperature[i], krvni_tlak_zgornji[i], krvni_tlak_spodnji[i], kisik_v_krvi[i]);  
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
    
});



function prikazi_obvestilo_o_napaki(e) {
  $('#opozorilo_o_napaki').show(250);
}

function prikazi_podatke(e) {
  preberiEHRodBolnika();
  preberiMeritveVitalnihZnakov();
  $('#nova_meritev').show(500);
  $('#row1').show(500);
  $('#row2').show(500);
  $('#row3').show(500);
  $('#ime_priimek_rd_m').show(500);
  $('#ime_priimek_rd_f').show(500);
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
    ehrId = $("#ehr_ID").val();  
  }
  else {
    ehrId = $('#select_id').val();
  }
  
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



function dodajZacetneMeritve(ehrId, datumInUra, telesnaVisina, telesnaTeza, telesnaTemperatura, sistolicniKrvniTlak, diastolicniKrvniTlak, nasicenostKrviSKisikom) {
	var sessionId = getSessionId();
  
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
		    async: false,
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



function preberiEHRodBolnika() {
  
  var sessionId = getSessionId();
  var ehrId = "";
  
  if (!($('#ehr_ID').empty())) {
    ehrId = $("#ehr_ID").val();  
  }
  else {
    ehrId = $('#select_id').val();
  }

	if (!ehrId || ehrId.trim().length == 0) {
		$("#ime_priimek_rd_m").html("Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				if (party.gender == "MALE") {
				  $("#ime_priimek_rd_m").text(party.firstNames +" "+ party.lastNames +" (rojen " + preoblikuj_datum(party.dateOfBirth) +")");
				  $("#ime_priimek_rd_f").text("");
				}
				else {
				  $("#ime_priimek_rd_f").text(party.firstNames +" "+ party.lastNames +" (rojena " + preoblikuj_datum(party.dateOfBirth) +")");
				  $("#ime_priimek_rd_m").text("");
				}
			},
			error: function(err) {
				$("#ime_priimek_rd_m").text("Prišlo je do napake pri branju podatkov pacienta.");
			}
		});
	}
}




function preberiMeritveVitalnihZnakov() {
	var sessionId = getSessionId();
  var ehrId = "";
  
  if (!($('#ehr_ID').empty())) {
    ehrId = $("#ehr_ID").val();  
  }
  else {
    ehrId = $('#select_id').val();
  }
  
  
	var teza_dekleta = beri_datoteko('dekleta_teza.txt');
	var teza_fantje = beri_datoteko('fantje_teza.txt');
	var visina_dekleta = beri_datoteko('dekleta_visina.txt');
	var visina_fantje = beri_datoteko('fantje_visina.txt');
	
	
	$.ajax({
	  async: false,
    url: baseUrl + "/view/" + ehrId + "/" + "height",
   type: 'GET',
   headers: {"Ehr-Session": sessionId},
   success: function(data_height) {
     //console.log(data_height);
     
     var data_xy = [];
     var data_xy_av_m= [];
     var data_xy_av_f= [];
     var x = "";
     var y = "";
     var y_born = "";
     var temp = "";
     var tmp_x = "";
     
     
     for (var i=0; i<data_height.length; i++) {
       x = data_height[i].height;
       y = preoblikuj_datum(data_height[i].time);
       y_born = preoblikuj_datum(data_height[data_height.length-1].time);
       y = date_difference(y, y_born);
       
       temp = x;
       x = y;
       y = temp;
       
       data_xy.push({x,y});
       
       tmp_x = x;
       
       y = parseFloat(visina_fantje[tmp_x+1][1]);
       data_xy_av_m.push({x,y});
       
       y = parseFloat(visina_dekleta[tmp_x+1][1]);
       data_xy_av_f.push({x,y});
     }
     
     izrisi_graf_tricrtni("chartContainer_height", data_xy, data_xy_av_m, data_xy_av_f, data_height[0].unit);
     
   }
  })
  
  $.ajax({
    async: false,
    url: baseUrl + "/view/" + ehrId + "/" + "weight",
   type: 'GET',
   headers: {"Ehr-Session": sessionId},
   success: function(data_weight) {
     //console.log(data_weight);
     
     var data_xy = [];
     var data_xy_av_m= [];
     var data_xy_av_f= [];
     var x = "";
     var y = "";
     var y_born = "";
     var temp = "";
     var tmp_x = "";
     
     for (var i=0; i<data_weight.length; i++) {
       x = data_weight[i].weight;
       y = preoblikuj_datum(data_weight[i].time);
       y_born = preoblikuj_datum(data_weight[data_weight.length-1].time);
       y = date_difference(y, y_born);
       
       temp = x;
       x = y;
       y = temp;
       
       data_xy.push({x,y});
       
       tmp_x = x;
       
       y = parseFloat(teza_fantje[tmp_x+1][1]);
       data_xy_av_m.push({x,y});
       
       y = parseFloat(teza_dekleta[tmp_x+1][1]);
       data_xy_av_f.push({x,y});
     }
     
     izrisi_graf_tricrtni("chartContainer_weight", data_xy, data_xy_av_m, data_xy_av_f, data_weight[0].unit);
   }
  })
  
  $.ajax({
    async: false,
    url: baseUrl + "/view/" + ehrId + "/" + "blood_pressure",
   type: 'GET',
   headers: {"Ehr-Session": sessionId},
   success: function(data_blood_pressure) {
     //console.log(data_blood_pressure);
     
     var data_xy_sis = [];
     var data_xy_dia = [];
     var x_sis = "";
     var x_dia = "";
     var x = "";
     var y = "";
     var y_born = "";
     var temp = "";
     
     for (var i=0; i<data_blood_pressure.length; i++) {
       x_sis = data_blood_pressure[i].systolic;
       x_dia = data_blood_pressure[i].diastolic;
       y = preoblikuj_datum(data_blood_pressure[i].time);
       y_born = preoblikuj_datum(data_blood_pressure[data_blood_pressure.length-1].time);
       y = date_difference(y, y_born);
       x = x_sis;
       
       temp = x;
       x = y;
       y = temp;
       
       data_xy_sis.push({x,y});
       
       y = x_dia;
       data_xy_dia.push({x,y});
     }
     
     izrisi_graf_dvocrtni("chartContainer_pressure", data_xy_sis, data_xy_dia, data_blood_pressure[0].unit);
   }
  })
  
  $.ajax({
    async: false,
    url: baseUrl + "/view/" + ehrId + "/" + "spO2",
   type: 'GET',
   headers: {"Ehr-Session": sessionId},
   success: function(data_spO2) {
     //console.log(data_spO2);
     
     var data_xy = [];
     var x = "";
     var y = "";
     var y_born = "";
     var temp = "";
     
     for (var i=0; i<data_spO2.length; i++) {
       x = data_spO2[i].spO2;
       y = preoblikuj_datum(data_spO2[i].time);
       y_born = preoblikuj_datum(data_spO2[data_spO2.length-1].time);
       y = date_difference(y, y_born);
       
       temp = x;
       x = y;
       y = temp;
       
       data_xy.push({x,y});
     }
     
     izrisi_graf("chartContainer_o2", data_xy, "%");
   }
  })
	
}



function izrisi_graf(id, podatki, enota) {
  
    var chart = new CanvasJS.Chart(document.getElementById(id),
    {
      interactivityEnabled: true,
      animationEnabled: true,
      animationDuration: 1000,
      
      axisX:{
       title: "days from birth",
       titleFontSize: 15,
      },
      
      axisY:{
       title: enota,
       titleFontSize: 20
      },
      
      toolTip:{
        enabled: true,     
        content: "{x}. dan:  {y} " + enota
      },
      
      data: [
      {        
        type: "splineArea",
        markerColor: "grey",
        markerBorderColor: "lightgreen",
        lineThickness: 3,
        fillOpacity: 0.25, 
    
        dataPoints: podatki
      }
        
      ]
    });
    
    chart.render();
  
}


function izrisi_graf_dvocrtni(id, podatki, podatki_2, enota) {
  
    var chart = new CanvasJS.Chart(document.getElementById(id),
    {
      interactivityEnabled: true,
      animationEnabled: true,
      animationDuration: 1000,
      
      axisX:{
       title: "days from birth",
       titleFontSize: 15,
      },
      
      axisY:{
       title: enota,
       titleFontSize: 20
      },
      
      toolTip:{
        enabled: true,     
        content: "{x}. dan:  {y} " + enota
      },
      
      legend: {
       horizontalAlign: "center", 
       verticalAlign: "bottom", 
       fontSize: 15,
      },
      
      data: [
      {  
        type: "splineArea",
        markerColor: "black",
        markerBorderColor: "lightgreen",
        showInLegend: true,
        legendText: "systolic",
        lineThickness: 3,
        fillOpacity: 0.3, 
    
        dataPoints: podatki
      },
      
      {        
        type: "splineArea",
        markerColor: "grey",
        markerBorderColor: "lightgreen",
        showInLegend: true,
        legendText: "diastolic",
        lineThickness: 3,
        fillOpacity: 0.2, 
        
        dataPoints: podatki_2
      }
      ]
    });
    
    chart.render();
  
}


function izrisi_graf_tricrtni(id, podatki, podatki_2, podatki_3, enota) {
  
    var chart = new CanvasJS.Chart(document.getElementById(id),
    {
      interactivityEnabled: true,
      animationEnabled: true,
      animationDuration: 1000,
      
      axisX:{
       title: "days from birth",
       titleFontSize: 15,
      },
      
      axisY:{
       title: enota,
       titleFontSize: 20
      },
      
      legend: {
       horizontalAlign: "center", 
       verticalAlign: "bottom", 
       fontSize: 15,
      },
      
      
      toolTip: {
        shared: true,
        contentFormatter: function(e){
          var str = "";
          for (var i = 0; i < e.entries.length; i++){
            var  temp = "";
            if (i == 0) {
              var dan = (e.entries[i].dataPoint.x)+1;
              temp = dan + ". dan: " + e.entries[i].dataPoint.y +" "+ enota + "<br/>";
            }
            else if (i == 1) {
              temp = "Povprečje za moške na ta dan: " + e.entries[i].dataPoint.y +" "+ enota + "<br/>";
            }
            else if (i == 2) {
              temp = "Povprečje za ženske na ta dan: " + e.entries[i].dataPoint.y +" "+ enota + "<br/>";
            }
            str = str.concat(temp);
          }
          return str;
        }
      },
      
      data: [
      {     
        type: "splineArea",
        markerColor: "black",
        markerBorderColor: "lightgreen",
        lineThickness: 3,
        fillOpacity: 0.3, 
        showInLegend: true,
        legendText: "vaš otrok",
    
        dataPoints: podatki
      },
      
      {     
        type: "line",
        markerColor: "blue",
        markerBorderColor: "lightgreen",
        lineThickness: 3,
        fillOpacity: 0.2, 
        showInLegend: true,
        legendText: "moško povprečje",
        
        dataPoints: podatki_2
      },
        
      {        
        type: "line",
        markerColor: "magenta",
        markerBorderColor: "lightgreen",
        lineThickness: 3,
        fillOpacity: 0.1, 
        showInLegend: true,
        legendText: "žensko povprečje",
    
        dataPoints: podatki_3
      }
      
      ]
    });
    
    chart.render();
  
}


function preoblikuj_datum(datum) {
  datum = datum.replace("T", "-");
  var date = datum.split("-");
  var leto = date[0];
  var mesec = date[1];
  var dan = date[2];
  
  return (mesec+"/"+dan+"/"+leto);
}


function date_difference(date1, date2) {
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var timeDiff = Math.abs(d1.getTime() - d2.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24)); 
}


function beri_datoteko(filename) {
  var vrstice = [];
  $.get({
    url: filename,
    async: false,
    success: function(vsebina) {
      vrstice = vsebina.split('\n');
      for(var i = 0; i<vrstice.length; i++) {
        var vrstica = vrstice[i].split('\t');
        vrstice[i] = [vrstica[0], vrstica[5]];
      }
    }
  });
  //console.log(vrstice);
  return vrstice;
}

