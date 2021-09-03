import Vue from 'vue';
import map from './map.js';

var switcher = Vue.component('switcher-item', {
        props: ['layer'],
        template: '<li><input type="checkbox" v-model="visibility" checked="layer.getVisible()" @change="onChange(layer)">{{ layer.get("name") }}</li>',
        computed: {
                visibility: {
                        get() {
                                return this.layer.getVisible();
                        },
                        set(value) {
                                //return this.layer.setVisible(!value);
                        }
                }
        },
        methods: {
                onChange: function(layer) {
                        layer.setVisible(!layer.getVisible())
                        window.x = layer;
                }
        }
});

export default new Vue({
        el: '#switcher',
        data: {
                layers: map.getLayers().getArray()
        }
});

