import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Fill, Stroke, Style} from 'ol/style';

import data from './data/kraje.geojson';

const kraje = new VectorLayer({
  source: new VectorSource({
    features: new GeoJSON().readFeatures(data),
  }),
  style: new Style({
    stroke: new Stroke({
      color: 'blue',
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),

  properties: {
    "name": "Kraje"
  },

  visible: false
});

export {kraje};
