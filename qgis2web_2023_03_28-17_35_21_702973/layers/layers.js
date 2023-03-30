var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASI_LN_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_50K_1 = format_ADMINISTRASI_LN_50K_1.readFeatures(json_ADMINISTRASI_LN_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_50K_1.addFeatures(features_ADMINISTRASI_LN_50K_1);
var lyr_ADMINISTRASI_LN_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_50K_1, 
                style: style_ADMINISTRASI_LN_50K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_50K_1.png" /> ADMINISTRASI_LN_50K'
            });
var format_KANTORPOS_PT_50K_2 = new ol.format.GeoJSON();
var features_KANTORPOS_PT_50K_2 = format_KANTORPOS_PT_50K_2.readFeatures(json_KANTORPOS_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPOS_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPOS_PT_50K_2.addFeatures(features_KANTORPOS_PT_50K_2);
var lyr_KANTORPOS_PT_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KANTORPOS_PT_50K_2, 
                style: style_KANTORPOS_PT_50K_2,
                interactive: true,
                title: '<img src="styles/legend/KANTORPOS_PT_50K_2.png" /> KANTORPOS_PT_50K'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_ADMINISTRASI_LN_50K_1.setVisible(true);lyr_KANTORPOS_PT_50K_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ADMINISTRASI_LN_50K_1,lyr_KANTORPOS_PT_50K_2];
lyr_ADMINISTRASI_LN_50K_1.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KANTORPOS_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Foto': 'Foto', });
lyr_ADMINISTRASI_LN_50K_1.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KANTORPOS_PT_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ADMINISTRASI_LN_50K_1.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KANTORPOS_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'Foto': 'no label', });
lyr_KANTORPOS_PT_50K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});