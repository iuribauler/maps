var wms_layers = [];


        var lyr_StamenToner_0 = new ol.layer.Tile({
            'title': 'StamenToner',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });
var format_Publication_Favelas_1999_1 = new ol.format.GeoJSON();
var features_Publication_Favelas_1999_1 = format_Publication_Favelas_1999_1.readFeatures(json_Publication_Favelas_1999_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publication_Favelas_1999_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publication_Favelas_1999_1.addFeatures(features_Publication_Favelas_1999_1);
var lyr_Publication_Favelas_1999_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Publication_Favelas_1999_1, 
                style: style_Publication_Favelas_1999_1,
                interactive: true,
    title: 'Publication_Favelas_1999<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_0.png" /> <br />\
    <img src="styles/legend/Publication_Favelas_1999_1_1.png" /> 1<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_2.png" /> 10<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_3.png" /> 11<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_4.png" /> 12<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_5.png" /> 13<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_6.png" /> 15<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_7.png" /> 16<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_8.png" /> 19<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_9.png" /> 2<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_10.png" /> 20<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_11.png" /> 22<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_12.png" /> 25<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_13.png" /> 27<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_14.png" /> 3<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_15.png" /> 32<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_16.png" /> 4<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_17.png" /> 5<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_18.png" /> 6<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_19.png" /> 7<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_20.png" /> 8<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_21.png" /> 82<br />\
    <img src="styles/legend/Publication_Favelas_1999_1_22.png" /> 9<br />'
        });

lyr_StamenToner_0.setVisible(true);lyr_Publication_Favelas_1999_1.setVisible(true);
var layersList = [lyr_StamenToner_0,lyr_Publication_Favelas_1999_1];
lyr_Publication_Favelas_1999_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Código': 'Código', 'Nome': 'Nome', 'SMH"RIO\02479574"Lim_Favelas_1999Area': 'SMH"RIO\02479574"Lim_Favelas_1999Area', 'ShapeSTArea': 'ShapeSTArea', 'ShapeSTLength': 'ShapeSTLength', 'publications': 'publications', });
lyr_Publication_Favelas_1999_1.set('fieldImages', {'OBJECTID': 'Range', 'Código': 'Range', 'Nome': 'TextEdit', 'SMH"RIO\02479574"Lim_Favelas_1999Area': 'TextEdit', 'ShapeSTArea': 'TextEdit', 'ShapeSTLength': 'TextEdit', 'publications': 'Range', });
lyr_Publication_Favelas_1999_1.set('fieldLabels', {'OBJECTID': 'no label', 'Código': 'no label', 'Nome': 'no label', 'SMH"RIO\02479574"Lim_Favelas_1999Area': 'no label', 'ShapeSTArea': 'no label', 'ShapeSTLength': 'no label', 'publications': 'no label', });
lyr_Publication_Favelas_1999_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});