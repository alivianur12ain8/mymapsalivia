var wms_layers = [];

var lyr_srtmcut_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "srtm cut",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/srtmcut_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13328211.962753, -572888.066681, 13402179.040022, -379292.294079]
                            })
                        });
var format_Channels1_1 = new ol.format.GeoJSON();
var features_Channels1_1 = format_Channels1_1.readFeatures(json_Channels1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Channels1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Channels1_1.addFeatures(features_Channels1_1);
var lyr_Channels1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Channels1_1, 
                style: style_Channels1_1,
                interactive: true,
                title: '<img src="styles/legend/Channels1_1.png" /> Channels 1'
            });
var format_clippedsungai_2 = new ol.format.GeoJSON();
var features_clippedsungai_2 = format_clippedsungai_2.readFeatures(json_clippedsungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedsungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedsungai_2.addFeatures(features_clippedsungai_2);
var lyr_clippedsungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clippedsungai_2, 
                style: style_clippedsungai_2,
                interactive: true,
                title: '<img src="styles/legend/clippedsungai_2.png" /> clipped sungai'
            });

lyr_srtmcut_0.setVisible(true);lyr_Channels1_1.setVisible(true);lyr_clippedsungai_2.setVisible(true);
var layersList = [lyr_srtmcut_0,lyr_Channels1_1,lyr_clippedsungai_2];
lyr_Channels1_1.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_clippedsungai_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Channels1_1.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_clippedsungai_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Channels1_1.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_clippedsungai_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_clippedsungai_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});