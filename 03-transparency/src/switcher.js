import Vue from 'vue';
import map from './map.js';

var switcher = Vue.component('switcher-item', {
        props: ['layer'],
        template: '<li>'+
                  '<input type="checkbox" v-model="visibility" checked="layer.getVisible()" @change="onChange(layer)">{{ layer.get("name") }}'+
                  '<input type="range" v-model="opacity" min="0" value="100" max="100" class="slider" @change="onOpacityChange(layer)">'+
                  '</li>',
        computed: {
                visibility: {
                        get() {
                                return this.layer.getVisible();
                        },
                        set(value) {
                                return this.layer.setVisible(!value);
                        }
                },
                opacity: {
                        get() {
                                return this.layer.getOpacity()*100;
                        },
                        set(value) {
                                return this.layer.setOpacity(value/100);
                        }
                }
        },
        methods: {
                onChange: function(layer) {
                        layer.setVisible(!layer.getVisible())
                },
                onOpacityChange: function(layer) {
                        layer.setOpacity(this.opacity/100);
                }
        }
});

export default new Vue({
        el: '#switcher',
        data: {
                layers: map.getLayers().getArray()
        }
});

