var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_TemakortoverHvidovregeopackagekommuneplan_1 = new ol.format.GeoJSON();
var features_TemakortoverHvidovregeopackagekommuneplan_1 = format_TemakortoverHvidovregeopackagekommuneplan_1.readFeatures(json_TemakortoverHvidovregeopackagekommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortoverHvidovregeopackagekommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortoverHvidovregeopackagekommuneplan_1.addFeatures(features_TemakortoverHvidovregeopackagekommuneplan_1);
var lyr_TemakortoverHvidovregeopackagekommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortoverHvidovregeopackagekommuneplan_1, 
                style: style_TemakortoverHvidovregeopackagekommuneplan_1,
                popuplayertitle: 'Temakort over Hvidovre geopackage — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/TemakortoverHvidovregeopackagekommuneplan_1.png" /> Temakort over Hvidovre geopackage — kommuneplan'
            });
var format_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2 = new ol.format.GeoJSON();
var features_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2 = format_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2.readFeatures(json_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2.addFeatures(features_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2);
var lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2, 
                style: style_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2,
                popuplayertitle: 'fredede områder Lokalplaner strandbeskyttelse — strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2.png" /> fredede områder Lokalplaner strandbeskyttelse — strandbeskyttelse'
            });
var format_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3 = new ol.format.GeoJSON();
var features_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3 = format_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3.readFeatures(json_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3.addFeatures(features_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3);
var lyr_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3, 
                style: style_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3,
                popuplayertitle: 'Temakort over Hvidovre geopackage — Strandbeskyttelse — Hvidovre Strandbeskyttelse',
                interactive: true,
    title: 'Temakort over Hvidovre geopackage — Strandbeskyttelse — Hvidovre Strandbeskyttelse<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_0.png" /> 1<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_1.png" /> 2<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_2.png" /> 3<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_3.png" /> 4<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_4.png" /> 5<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_5.png" /> 6<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_6.png" /> 7<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_7.png" /> 8<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_8.png" /> 9<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_9.png" /> 10<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_10.png" /> 11<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_11.png" /> 12<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_12.png" /> 13<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_13.png" /> 14<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_14.png" /> 15<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_15.png" /> 16<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_16.png" /> 17<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_17.png" /> 18<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_18.png" /> 19<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_19.png" /> 20<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_20.png" /> 21<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_21.png" /> 22<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_22.png" /> 23<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_23.png" /> 24<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_24.png" /> 25<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_25.png" /> 26<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_26.png" /> 27<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_27.png" /> 28<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_28.png" /> 29<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_29.png" /> 30<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_30.png" /> 31<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_31.png" /> 32<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_32.png" /> 33<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_33.png" /> 34<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_34.png" /> 35<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_35.png" /> 36<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_36.png" /> 37<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_37.png" /> 38<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_38.png" /> 39<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_39.png" /> 40<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_40.png" /> 41<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_41.png" /> 42<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_42.png" /> 43<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_43.png" /> 44<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_44.png" /> 45<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_45.png" /> 46<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_46.png" /> 47<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_47.png" /> 48<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_48.png" /> 49<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3_49.png" /> <br />' });
var format_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = new ol.format.GeoJSON();
var features_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = format_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.readFeatures(json_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.addFeatures(features_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4);
var lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4, 
                style: style_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4,
                popuplayertitle: 'fredede områder Lokalplaner strandbeskyttelse — frededeområder',
                interactive: false,
    title: 'fredede områder Lokalplaner strandbeskyttelse — frededeområder<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />' });
var format_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5 = new ol.format.GeoJSON();
var features_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5 = format_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5.readFeatures(json_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5.addFeatures(features_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5);
var lyr_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5, 
                style: style_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5,
                popuplayertitle: 'fredede områder Lokalplaner strandbeskyttelse — lokalplaner',
                interactive: true,
    title: 'fredede områder Lokalplaner strandbeskyttelse — lokalplaner<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_0.png" /> 001<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_1.png" /> 101-1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_2.png" /> 102<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_3.png" /> 103<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_4.png" /> 104<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_5.png" /> 105<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_6.png" /> 106<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_7.png" /> 108<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_8.png" /> 109-1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_9.png" /> 112<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_10.png" /> 115<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_11.png" /> 116<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_12.png" /> 118<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_13.png" /> 119<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_14.png" /> 120<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_15.png" /> 121<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_16.png" /> 122<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_17.png" /> 124<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_18.png" /> 126<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_19.png" /> 127<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_20.png" /> 128<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_21.png" /> 131<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_22.png" /> 132<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_23.png" /> 133<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_24.png" /> 134<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_25.png" /> 135<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_26.png" /> 137<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_27.png" /> 139<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_28.png" /> 140<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_29.png" /> 141<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_30.png" /> 142<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_31.png" /> 143<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_32.png" /> 144<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_33.png" /> 147<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_34.png" /> 148<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_35.png" /> 149<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_36.png" /> 150<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_37.png" /> 151<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_38.png" /> 152<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_39.png" /> 154<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_40.png" /> 202<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_41.png" /> 203<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_42.png" /> 206<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_43.png" /> 207<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_44.png" /> 208<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_45.png" /> 209<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_46.png" /> 210<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_47.png" /> 211<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_48.png" /> 216<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_49.png" /> 220<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_50.png" /> 221<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_51.png" /> 225<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_52.png" /> 226<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_53.png" /> 228<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_54.png" /> 229<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_55.png" /> 230<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_56.png" /> 231<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_57.png" /> 232<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_58.png" /> 233<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_59.png" /> 234<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_60.png" /> 236<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_61.png" /> 237<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_62.png" /> 238<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_63.png" /> 239<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_64.png" /> 240<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_65.png" /> 241<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_66.png" /> 301-1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_67.png" /> 303<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_68.png" /> 304<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_69.png" /> 305<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_70.png" /> 306<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_71.png" /> 313<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_72.png" /> 314<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_73.png" /> 316<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_74.png" /> 322<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_75.png" /> 323<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_76.png" /> 324<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_77.png" /> 325<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_78.png" /> 326<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_79.png" /> 327<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_80.png" /> 328<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_81.png" /> 329<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_82.png" /> 330<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_83.png" /> 331<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_84.png" /> 332<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_85.png" /> 335<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_86.png" /> 338<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_87.png" /> 339<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_88.png" /> 340<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_89.png" /> 341<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_90.png" /> 342<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_91.png" /> 343<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_92.png" /> 345<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_93.png" /> 403-1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_94.png" /> 404<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_95.png" /> 405<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_96.png" /> 407<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_97.png" /> 408<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_98.png" /> 409<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_99.png" /> 411<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_100.png" /> 412<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_101.png" /> 418<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_102.png" /> 423<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_103.png" /> 429<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_104.png" /> 432<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_105.png" /> 433<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_106.png" /> 440<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_107.png" /> 441<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_108.png" /> 447<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_109.png" /> 448<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_110.png" /> 452<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_111.png" /> 454<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_112.png" /> 455<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_113.png" /> 456<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_114.png" /> 457<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_115.png" /> 458<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_116.png" /> 459<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_117.png" /> 462<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_118.png" /> 463<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_119.png" /> 464<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_120.png" /> 466<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_121.png" /> 467<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_122.png" /> 468<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_123.png" /> 469<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_124.png" /> 470<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_125.png" /> 471<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_126.png" /> 472<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_127.png" /> 473<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_128.png" /> 475<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_129.png" /> 476<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_130.png" /> 504<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_131.png" /> 507<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_132.png" /> 508<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_133.png" /> 510<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_134.png" /> 511<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_135.png" /> 516<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_136.png" /> 518<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_137.png" /> 519<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_138.png" /> A1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_139.png" /> A10<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_140.png" /> A11<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_143.png" /> A13<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_144.png" /> A14<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_145.png" /> A15<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_146.png" /> A3<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_147.png" /> A5<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_148.png" /> A7<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_149.png" /> A8<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_151.png" /> B17<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_155.png" /> H10<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_157.png" /> H11<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_158.png" /> H12<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_159.png" /> H13<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_160.png" /> H14<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_161.png" /> H15<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_162.png" /> H16<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_163.png" /> H17<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_164.png" /> H18<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_165.png" /> H20<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_167.png" /> H3<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_168.png" /> H4<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_169.png" /> H5<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_170.png" /> H9<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelselokalplaner_5_172.png" /> <br />' });
var format_TemakortoverHvidovregeopackageErosionsfare_6 = new ol.format.GeoJSON();
var features_TemakortoverHvidovregeopackageErosionsfare_6 = format_TemakortoverHvidovregeopackageErosionsfare_6.readFeatures(json_TemakortoverHvidovregeopackageErosionsfare_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortoverHvidovregeopackageErosionsfare_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortoverHvidovregeopackageErosionsfare_6.addFeatures(features_TemakortoverHvidovregeopackageErosionsfare_6);
var lyr_TemakortoverHvidovregeopackageErosionsfare_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortoverHvidovregeopackageErosionsfare_6, 
                style: style_TemakortoverHvidovregeopackageErosionsfare_6,
                popuplayertitle: 'Temakort over Hvidovre geopackage — Erosionsfare',
                interactive: true,
    title: 'Temakort over Hvidovre geopackage — Erosionsfare<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageErosionsfare_6_0.png" /> Lille<br />\
    <img src="styles/legend/TemakortoverHvidovregeopackageErosionsfare_6_1.png" /> Moderat<br />' });
var format_Folkeskoler_7 = new ol.format.GeoJSON();
var features_Folkeskoler_7 = format_Folkeskoler_7.readFeatures(json_Folkeskoler_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_7.addFeatures(features_Folkeskoler_7);
var lyr_Folkeskoler_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_7, 
                style: style_Folkeskoler_7,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_7.png" /> Folkeskoler'
            });
var format_Hospital_8 = new ol.format.GeoJSON();
var features_Hospital_8 = format_Hospital_8.readFeatures(json_Hospital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_8.addFeatures(features_Hospital_8);
var lyr_Hospital_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_8, 
                style: style_Hospital_8,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_8.png" /> Hospital'
            });
var format_Togstationer_9 = new ol.format.GeoJSON();
var features_Togstationer_9 = format_Togstationer_9.readFeatures(json_Togstationer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_9.addFeatures(features_Togstationer_9);
var lyr_Togstationer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_9, 
                style: style_Togstationer_9,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_9.png" /> Togstationer'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_TemakortoverHvidovregeopackagekommuneplan_1.setVisible(true);lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2.setVisible(true);lyr_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3.setVisible(true);lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.setVisible(true);lyr_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5.setVisible(true);lyr_TemakortoverHvidovregeopackageErosionsfare_6.setVisible(true);lyr_Folkeskoler_7.setVisible(true);lyr_Hospital_8.setVisible(true);lyr_Togstationer_9.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_TemakortoverHvidovregeopackagekommuneplan_1,lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2,lyr_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3,lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4,lyr_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5,lyr_TemakortoverHvidovregeopackageErosionsfare_6,lyr_Folkeskoler_7,lyr_Hospital_8,lyr_Togstationer_9];
lyr_TemakortoverHvidovregeopackagekommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_TemakortoverHvidovregeopackageErosionsfare_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'AkutE': 'AkutE', 'Klasse': 'Klasse', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Folkeskoler_7.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Hospital_8.set('fieldAliases', {'Hospital n': 'Hospital navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefon nu': 'Telefon nummer', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TemakortoverHvidovregeopackagekommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2.set('fieldImages', {'fid': '', 'id': '', 'metadataproperty': '', 'description_href': '', 'description_title': '', 'description_nilreason': '', 'description': '', 'descriptionreference_href': '', 'descriptionreference_title': '', 'descriptionreference_nilreason': '', 'identifier_codespace': '', 'identifier': '', 'name': '', 'location_location': '', 'forretningshaendelse': '', 'senestesaglokalid': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalid': '', 'paataenkthandling': '', 'registreringfra': '', 'virkningfra': '', 'virkningsaktoer': '', 'temafladeid': '', 'tematype': '', 'jordstykkelokalid': '', });
lyr_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_TemakortoverHvidovregeopackageErosionsfare_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', 'AkutE': 'TextEdit', 'Klasse': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_Folkeskoler_7.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Hospital_8.set('fieldImages', {'Hospital n': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefon nu': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_9.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_TemakortoverHvidovregeopackagekommuneplan_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'inline label - always visible', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datoforsl': 'no label', 'datovedt': 'inline label - always visible', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_TemakortoverHvidovregeopackageStrandbeskyttelseHvidovreStrandbeskyttelse_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_frededeomrderLokalplanerstrandbeskyttelselokalplaner_5.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_TemakortoverHvidovregeopackageErosionsfare_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'AkutE': 'no label', 'Klasse': 'no label', 'SHAPE_Length': 'no label', });
lyr_Folkeskoler_7.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'header label - visible with data', 'By': 'inline label - always visible', 'Hjemmeside': 'no label', });
lyr_Hospital_8.set('fieldLabels', {'Hospital n': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefon nu': 'no label', });
lyr_Togstationer_9.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Togstationer_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});