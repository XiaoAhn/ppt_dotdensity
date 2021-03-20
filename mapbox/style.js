
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Randompoints_1": {
            "type": "geojson",
            "data": json_Randompoints_1
        }
                    ,
        "Randompoints_2": {
            "type": "geojson",
            "data": json_Randompoints_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Randompoints_1_0",
            "type": "circle",
            "source": "Randompoints_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 0.21428571428571427, 2], 'circle-color': '#487bb6', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#325780'}
        }
,
        {
            "id": "lyr_Randompoints_2_0",
            "type": "circle",
            "source": "Randompoints_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 0.06785714285714285, 2], 'circle-color': '#db1e2a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
],
}