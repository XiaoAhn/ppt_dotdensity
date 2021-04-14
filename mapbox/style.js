
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
            "tiles": ["https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"],
            // "tiles": ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "blue11dot1_1": {
            "type": "geojson",
            "data": json_blue11dot1_1
        }
                    ,
        "stateData_2": {
            "type": "geojson",
            "data": json_stateData_2
        }
                    ,
        "red11dot1_3": {
            "type": "geojson",
            "data": json_red11dot1_3
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
            "id": "lyr_blue11dot1_1_0",
            "type": "circle",
            "source": "blue11dot1_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 1.0, 2], 'circle-color': '#4814fc', 'circle-opacity': 1.0, 'circle-stroke-width': 0.4, 'circle-stroke-color': '#325780'}
        }
,
        {
            "id": "lyr_stateData_2_0",
            "type": "line",
            "source": "stateData_2",
            "layout": {},
            "paint": {'line-width': 0.96, 'line-opacity': 0.211, 'line-color': '#3579b1'}
        }
,
        {
            "id": "lyr_red11dot1_3_0",
            "type": "circle",
            "source": "red11dot1_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 1.0, 2], 'circle-color': '#ff41f4', 'circle-opacity': 1.0, 'circle-stroke-width': 0.4, 'circle-stroke-color': '#801119'}
        }
],
}