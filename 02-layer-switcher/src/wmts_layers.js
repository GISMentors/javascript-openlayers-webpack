import TileLayer from 'ol/layer/Tile';
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';

import {wmts_resolutions, wmts_matrixIds, wmts_sizes} from './constatns.js';

var cuzk_ortofoto = new TileLayer({
    visible: false,
    source: new WMTS({
      url: 'https://geoportal.cuzk.cz/WMTS_ORTOFOTO/WMTService.aspx',
      layer: 'orto',
      matrixSet: 'wgs84:pseudomercator:epsg:3857',
      format: 'image/webp',
      style: "default",
      tileGrid: new WMTSTileGrid({
        origin: [1292959.109671, 6709371.698801], // left, top
        resolutions: wmts_resolutions,
        matrixIds: wmts_matrixIds,
        sizes: wmts_sizes
      })
    }),
        properties: {
                "name": "Cuzk Ortofoto"
        }
});

export {cuzk_ortofoto};
