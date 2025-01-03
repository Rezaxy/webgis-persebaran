window.onload = init 
function init(){
    var map = new ol.Map({
        view: new ol.View({
            center:[12539102.934913194, -891111.2252792659],
            zoom:12.7
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM(),
                title:'OSM'        
            })
        ],
        target: 'web-map'


    })

    map.on('click',function(e){
        console.log(e.coordinate)
    })

    // Menambah maptiler layer
var maptilerSat = new ol.layer.Tile({
    source: new ol.source.TileJSON({
        attributions: '@MapTiler',
        url: 'https://api.maptiler.com/maps/satellite/tiles.json?key=kL4h3teUxLgMXlvtDaYe'
    }),
    title:'Satellite Map'
});

map.addLayer(maptilerSat);


    // Menambah geoserver layers
var layer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/webgis/wms?',
        params: {
            'LAYERS': 'webgis:KOTA_MALANG_TEST2'
        }
    }),
    title:'Kecamatan Malang'
});

map.addLayer(layer);

    // Menambah geoserver layers
    var layer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            attributions: '@geoserver',
            url: 'http://localhost:8080/geoserver/webgis/wms?',
            params: {
                'LAYERS': 'webgis:Admin_Kel_Malang'
            }
        }),
        title:'Kelurahan Malang'
    });
    
    map.addLayer(layer);

    // Menambah geoserver layers
    var layer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            attributions: '@geoserver',
            url: 'http://localhost:8080/geoserver/webgis/wms?',
            params: {
                'LAYERS': 'webgis:Persebaran2'
            }
        }),
        title:'Point Persebaran'
    });
    
    map.addLayer(layer);

    var layerswitcher = new ol.control.LayerSwitcher()
    map.addControl(layerswitcher)

//map.Menambah Layer(cartoDBmap)

var zoomsliderr = new ol.control.ZoomSlider()

map.addControl(zoomsliderr)

var scale = new ol.control.ScaleLine({
    bar:true,
    steps:4,
    text: true
})

map.addControl(scale)

var zoomE = new ol.control.ZoomToExtent({
    extent:[12539102.934913194, -891111.2252792659]
})

map.addControl(zoomE)

//Menambah cursor lat&long
var mousePosition = new ol.control.MousePosition({
    className: 'mousePosition',
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate) {
        return ol.coordinate.format(coordinate, '{x} , {y}', 6);
    }
});

map.addControl(mousePosition);

//Menambah geocoder

var geocoder = new Geocoder('nominatim', {
  provider: 'osm',
  lang: 'en-US',
  placeholder: 'Cari tempat atau alamat...',
  limit: 5,
  keepOpen: true,
});
map.addControl(geocoder);
document.getElementsByClassName('gcd-gl-btn')[0].className += ' fa fa-search';

var map = new ol.Map({
    target: 'map',
    renderer: 'canvas',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
  
      new ol.layer.Image({
        source: new ol.source.ImageWMS({
          className: 'mousePosition',
          url: 'http://localhost:8080/geoserver/webgis/wms?',
          ratio: 1,
          params: {
            'LAYERS': 'buffer, buffer_new',
            'TRANSPARENT': 'true'
          }
        })
      })
  
    ],
    view: new ol.View({
      projection: 'EPSG:3857',
      center: [-8238683.374712203, 4998174.938711717],
      zoom: 15
  
    })
  });
  
  
  $(function() {
    $("#draggable").draggable();
  });

}   