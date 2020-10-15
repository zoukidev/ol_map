import 'ol/ol.css';
import {Map, View, Layer, LonLat, Projection, Marker} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

var zoom = 16;

let map: Map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
        source: new OSM()
        })
    ],
    view: new View({
        center: [-0.1279688 ,51.5077286],
        zoom: 2
    })
});

var lonLat = new LonLat( -0.1279688 ,51.5077286 )
    .transform(
        new Projection("EPSG:4326"),
        map.getProjectionObject()
    );

var markers = new Layer.Markers( "Markers" );
map.addLayer(markers);

markers.addMarker(new Marker(lonLat));

map.setCenter(lonLat, zoom);