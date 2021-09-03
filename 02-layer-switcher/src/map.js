import 'ol/ol.css';

import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {getCenter} from 'ol/extent';

import {corine as corine_wfs} from './wfs_layers.js';
import {cuzk_ortofoto} from './wmts_layers.js';
import {corine as corine_wms, ippc as ippc_wms} from './wms_layers.js';
import {kraje} from './json_layers.js';

import {cr_extent} from './constatns.js';


var background = new TileLayer({
        source: new XYZ({
                url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        }),
        properties: {
                "name": "OpenStreetMap"
        }
});

var map = new Map({
  target: 'map',
  layers: [
          background, cuzk_ortofoto, corine_wms, ippc_wms, corine_wfs, kraje
  ],
  view: new View({
    center: getCenter(cr_extent),
    zoom: 6
  })
});

export default map;
