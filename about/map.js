const key = 'YOUR_MAPTILER_API_KEY_HERE';
const source = new ol.source.TileJSON({
    url: `https://api.maptiler.com/maps/basic-v2/tiles.json?key=ZwiVDyPineUd7JPn6kJt`,
    tileSize: 512,
    crossOrigin: 'anonymous'
});

const map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: source
        })
    ],
    target: 'map',
    view: new ol.View({
        constrainResolution: true,
        center: ol.proj.fromLonLat([3.401804, 50.771837]),
        zoom: 15
    })
});



const layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([3.401804, 50.771837])),
            })
        ]
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            crossOrigin: 'anonymous',
            src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
        })
    })
});

const layer2 = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([3.46056, 50.779562])),
            })
        ]
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            crossOrigin: 'anonymous',
            src: 'https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_1280.png',
            height: 30
        })
    })
});

const layer3 = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([3.378029, 50.822707])),
            })
        ]
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            crossOrigin: 'anonymous',
            src: 'https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_1280.png',
            height: 30
        })
    })
});

const layer4 = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([3.401821, 50.771337])),
            })
        ]
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            crossOrigin: 'anonymous',
            src: 'https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_1280.png',
            height: 30
        })
    })
});


map.addLayer(layer);
map.addLayer(layer2);
map.addLayer(layer3);
map.addLayer(layer4);