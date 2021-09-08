import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import {Stroke, Style} from 'ol/style';
import {Vector as VectorLayer} from 'ol/layer';
import {bbox as bboxStrategy} from 'ol/loadingstrategy';

const vectorSource = new VectorSource({
  format: new GeoJSON(),
  url: function (extent) {
    return (
      'https://gis.cenia.cz/geoserver/corine_land_cover_2018/wfs?'+
      'service=wfs&version=2.0.0&request=GetFeature&' +
      'typename=corine_land_cover_2018:corine_cha18_CZ&' +
      'outputFormat=application/json&srsname=EPSG:3857&' +
      'bbox=' +
      extent.join(',') +
      ',EPSG:3857'
    );
  },
  strategy: bboxStrategy,
});

const corine = new VectorLayer({
  source: vectorSource,
  style: new Style({
    stroke: new Stroke({
      color: 'rgba(0, 0, 255, 1.0)',
      width: 2,
    }),
  }),
  visible: false,
  properties: {
    "name": "Corine 2018 diff"
  },
});

export {corine};
