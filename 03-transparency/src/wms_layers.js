import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';

import {cr_extent} from './constatns.js';

var corine = new ImageLayer({
    extent: cr_extent,
    visible: false,
    source: new ImageWMS({
      url: 'http://gis.cenia.cz/geoserver/corine_land_cover_2018/wms',
      params: {'LAYERS': 'corine_clc18_CZ'},
      ratio: 1
    }),
        properties: {
                "name": "Corine 2018 (raster)"
        }
});


var ippc = new ImageLayer({
    extent: cr_extent,
    visible: false,
    source: new ImageWMS({
      url: 'https://gis.cenia.cz/geoserver/IPPC/wms',
      params: {'LAYERS': 'IPPC_zarizeni_2019'},
      ratio: 1
    }),
        properties: {
                "name": "IPPC (raster)"
        }
});

window.corine = corine;
export {corine, ippc};
