ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([292701.808020, 9232695.067027, 295406.136839, 9234762.237772]);
var wms_layers = [];

var format_SungaiKabTegal_0 = new ol.format.GeoJSON();
var features_SungaiKabTegal_0 = format_SungaiKabTegal_0.readFeatures(json_SungaiKabTegal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_SungaiKabTegal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiKabTegal_0.addFeatures(features_SungaiKabTegal_0);
var lyr_SungaiKabTegal_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SungaiKabTegal_0, 
                style: style_SungaiKabTegal_0,
                interactive: true,
                title: '<img src="styles/legend/SungaiKabTegal_0.png" /> Sungai Kab Tegal'
            });

        var lyr_satelite_1 = new ol.layer.Tile({
            'title': 'satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_JalanLokal_2 = new ol.format.GeoJSON();
var features_JalanLokal_2 = format_JalanLokal_2.readFeatures(json_JalanLokal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JalanLokal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_2.addFeatures(features_JalanLokal_2);
var lyr_JalanLokal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLokal_2, 
                style: style_JalanLokal_2,
                interactive: true,
                title: '<img src="styles/legend/JalanLokal_2.png" /> Jalan Lokal'
            });
var format_batas_kec_kab_tegal_3 = new ol.format.GeoJSON();
var features_batas_kec_kab_tegal_3 = format_batas_kec_kab_tegal_3.readFeatures(json_batas_kec_kab_tegal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_batas_kec_kab_tegal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_kec_kab_tegal_3.addFeatures(features_batas_kec_kab_tegal_3);
var lyr_batas_kec_kab_tegal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kec_kab_tegal_3, 
                style: style_batas_kec_kab_tegal_3,
                interactive: true,
                title: '<img src="styles/legend/batas_kec_kab_tegal_3.png" /> batas_kec_kab_tegal'
            });
var format_BatasAdminKabupaten_4 = new ol.format.GeoJSON();
var features_BatasAdminKabupaten_4 = format_BatasAdminKabupaten_4.readFeatures(json_BatasAdminKabupaten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasAdminKabupaten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminKabupaten_4.addFeatures(features_BatasAdminKabupaten_4);
var lyr_BatasAdminKabupaten_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminKabupaten_4, 
                style: style_BatasAdminKabupaten_4,
                interactive: true,
                title: '<img src="styles/legend/BatasAdminKabupaten_4.png" /> Batas Admin Kabupaten'
            });
var format_BatasAdminKecamatan_5 = new ol.format.GeoJSON();
var features_BatasAdminKecamatan_5 = format_BatasAdminKecamatan_5.readFeatures(json_BatasAdminKecamatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasAdminKecamatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminKecamatan_5.addFeatures(features_BatasAdminKecamatan_5);
var lyr_BatasAdminKecamatan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminKecamatan_5, 
                style: style_BatasAdminKecamatan_5,
                interactive: true,
                title: '<img src="styles/legend/BatasAdminKecamatan_5.png" /> Batas Admin Kecamatan'
            });
var format_BatasAdminDesa_6 = new ol.format.GeoJSON();
var features_BatasAdminDesa_6 = format_BatasAdminDesa_6.readFeatures(json_BatasAdminDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasAdminDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminDesa_6.addFeatures(features_BatasAdminDesa_6);
var lyr_BatasAdminDesa_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminDesa_6, 
                style: style_BatasAdminDesa_6,
                interactive: true,
                title: '<img src="styles/legend/BatasAdminDesa_6.png" /> Batas Admin Desa'
            });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                interactive: true,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });
var format_BatasRWDesaKalimati_8 = new ol.format.GeoJSON();
var features_BatasRWDesaKalimati_8 = format_BatasRWDesaKalimati_8.readFeatures(json_BatasRWDesaKalimati_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasRWDesaKalimati_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRWDesaKalimati_8.addFeatures(features_BatasRWDesaKalimati_8);
var lyr_BatasRWDesaKalimati_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasRWDesaKalimati_8, 
                style: style_BatasRWDesaKalimati_8,
                interactive: true,
    title: 'Batas RW Desa Kalimati<br />\
    <img src="styles/legend/BatasRWDesaKalimati_8_0.png" /> Lahan Jalan Tol<br />\
    <img src="styles/legend/BatasRWDesaKalimati_8_1.png" /> RW 1<br />\
    <img src="styles/legend/BatasRWDesaKalimati_8_2.png" /> RW 2<br />\
    <img src="styles/legend/BatasRWDesaKalimati_8_3.png" /> RW 3<br />\
    <img src="styles/legend/BatasRWDesaKalimati_8_4.png" /> <br />'
        });
var format_BatasRTDesaKalimati_9 = new ol.format.GeoJSON();
var features_BatasRTDesaKalimati_9 = format_BatasRTDesaKalimati_9.readFeatures(json_BatasRTDesaKalimati_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasRTDesaKalimati_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRTDesaKalimati_9.addFeatures(features_BatasRTDesaKalimati_9);
var lyr_BatasRTDesaKalimati_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasRTDesaKalimati_9, 
                style: style_BatasRTDesaKalimati_9,
                interactive: true,
    title: 'Batas RT Desa Kalimati<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_0.png" /> Lahan Jalan Tol<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_1.png" /> RT 1<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_2.png" /> RT 10<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_3.png" /> RT 11<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_4.png" /> RT 12<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_5.png" /> RT 13<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_6.png" /> RT 14<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_7.png" /> RT 15<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_8.png" /> RT 16<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_9.png" /> RT 17<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_10.png" /> RT 18<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_11.png" /> RT 19<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_12.png" /> RT 2<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_13.png" /> RT 20<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_14.png" /> RT 21<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_15.png" /> RT 3<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_16.png" /> RT 4<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_17.png" /> RT 5<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_18.png" /> RT 6<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_19.png" /> RT 7<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_20.png" /> RT 8<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_21.png" /> RT 9<br />\
    <img src="styles/legend/BatasRTDesaKalimati_9_22.png" /> <br />'
        });
var format_RencanaJaringanDrainase_10 = new ol.format.GeoJSON();
var features_RencanaJaringanDrainase_10 = format_RencanaJaringanDrainase_10.readFeatures(json_RencanaJaringanDrainase_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_RencanaJaringanDrainase_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RencanaJaringanDrainase_10.addFeatures(features_RencanaJaringanDrainase_10);
var lyr_RencanaJaringanDrainase_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RencanaJaringanDrainase_10, 
                style: style_RencanaJaringanDrainase_10,
                interactive: true,
                title: '<img src="styles/legend/RencanaJaringanDrainase_10.png" /> Rencana Jaringan Drainase'
            });
var format_JaringanJalanKabupatenTegal_11 = new ol.format.GeoJSON();
var features_JaringanJalanKabupatenTegal_11 = format_JaringanJalanKabupatenTegal_11.readFeatures(json_JaringanJalanKabupatenTegal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanJalanKabupatenTegal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKabupatenTegal_11.addFeatures(features_JaringanJalanKabupatenTegal_11);
var lyr_JaringanJalanKabupatenTegal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalanKabupatenTegal_11, 
                style: style_JaringanJalanKabupatenTegal_11,
                interactive: true,
    title: 'Jaringan Jalan Kabupaten Tegal<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_11_0.png" /> <br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_11_1.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_11_2.png" /> Jalan Kereta Api<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_11_3.png" /> Jalan Kolektor Primer<br />'
        });
var format_JalanTol_12 = new ol.format.GeoJSON();
var features_JalanTol_12 = format_JalanTol_12.readFeatures(json_JalanTol_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JalanTol_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanTol_12.addFeatures(features_JalanTol_12);
var lyr_JalanTol_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanTol_12, 
                style: style_JalanTol_12,
                interactive: true,
                title: '<img src="styles/legend/JalanTol_12.png" /> Jalan Tol'
            });

lyr_SungaiKabTegal_0.setVisible(true);lyr_satelite_1.setVisible(true);lyr_JalanLokal_2.setVisible(true);lyr_batas_kec_kab_tegal_3.setVisible(true);lyr_BatasAdminKabupaten_4.setVisible(true);lyr_BatasAdminKecamatan_5.setVisible(true);lyr_BatasAdminDesa_6.setVisible(true);lyr_Sungai_7.setVisible(true);lyr_BatasRWDesaKalimati_8.setVisible(true);lyr_BatasRTDesaKalimati_9.setVisible(true);lyr_RencanaJaringanDrainase_10.setVisible(true);lyr_JaringanJalanKabupatenTegal_11.setVisible(true);lyr_JalanTol_12.setVisible(true);
var layersList = [lyr_SungaiKabTegal_0,lyr_satelite_1,lyr_JalanLokal_2,lyr_batas_kec_kab_tegal_3,lyr_BatasAdminKabupaten_4,lyr_BatasAdminKecamatan_5,lyr_BatasAdminDesa_6,lyr_Sungai_7,lyr_BatasRWDesaKalimati_8,lyr_BatasRTDesaKalimati_9,lyr_RencanaJaringanDrainase_10,lyr_JaringanJalanKabupatenTegal_11,lyr_JalanTol_12];
lyr_SungaiKabTegal_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', });
lyr_JalanLokal_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_batas_kec_kab_tegal_3.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_BatasAdminKabupaten_4.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_BatasAdminKecamatan_5.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_BatasAdminDesa_6.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_Sungai_7.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_BatasRWDesaKalimati_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'RT': 'RT', 'RW': 'RW', });
lyr_BatasRTDesaKalimati_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'RT': 'RT', 'RW': 'RW', });
lyr_RencanaJaringanDrainase_10.set('fieldAliases', {'Id': 'Id', });
lyr_JaringanJalanKabupatenTegal_11.set('fieldAliases', {'fungsi': 'fungsi', 'rencana': 'rencana', });
lyr_JalanTol_12.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_SungaiKabTegal_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', });
lyr_JalanLokal_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_batas_kec_kab_tegal_3.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_BatasAdminKabupaten_4.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_BatasAdminKecamatan_5.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_BatasAdminDesa_6.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_Sungai_7.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BatasRWDesaKalimati_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', });
lyr_BatasRTDesaKalimati_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', });
lyr_RencanaJaringanDrainase_10.set('fieldImages', {'Id': 'Range', });
lyr_JaringanJalanKabupatenTegal_11.set('fieldImages', {'fungsi': 'TextEdit', 'rencana': 'TextEdit', });
lyr_JalanTol_12.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_SungaiKabTegal_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', });
lyr_JalanLokal_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_batas_kec_kab_tegal_3.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_BatasAdminKabupaten_4.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_BatasAdminKecamatan_5.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_BatasAdminDesa_6.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_Sungai_7.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_BatasRWDesaKalimati_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'RT': 'no label', 'RW': 'inline label', });
lyr_BatasRTDesaKalimati_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'RT': 'inline label', 'RW': 'header label', });
lyr_RencanaJaringanDrainase_10.set('fieldLabels', {'Id': 'inline label', });
lyr_JaringanJalanKabupatenTegal_11.set('fieldLabels', {'fungsi': 'no label', 'rencana': 'header label', });
lyr_JalanTol_12.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_JalanTol_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});