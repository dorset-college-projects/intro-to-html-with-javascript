$('#btnLoadBikes').on('click', function () {

    const contract_name = `dublin`;
    const api_key = `????????????????????????`;
    const url = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract_name}&apiKey=${api_key}`;
    $.getJSON(url, function (jsonData) {
        console.log(jsonData);
       
    });


});