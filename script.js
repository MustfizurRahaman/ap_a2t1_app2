require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/symbols/PictureMarkerSymbol"
  ], (Map, MapView, FeatureLayer, PictureMarkerSymbol) => {
  const map = new Map({
  basemap: "streets"
  });
  
  const view = new MapView({
  container: "viewDiv",
  map: map,
  extent: {
    xmin: -13915120.026319005,
    ymin: 2801774.86356037,
    xmax: -7451122.248866724,
    ymax: 6340332.343706039,
    spatialReference: 102100
  },
  zoom: 4// Set your desired zoom level here
  });
  
  // Feature Layer for roads with pop-up
  const featureLayer_1 = new FeatureLayer({
  url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/Transportation_v1/FeatureServer/2",
  popupTemplate: {
  title: "{Name}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        { fieldName: "NAME", label: "Road Name" },
        // ... add other fields as needed
      ]
    }
  ]
  }
  });
  
  const featureLayer_2 = new FeatureLayer({
  url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/Transportation_v1/FeatureServer/0",
  popupTemplate: {
  title: "{Name}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        { fieldName: "NAME", label: "Road Name" },
        // ... add other fields as needed
      ]
    }
  ]
  }
  });
  
  
  // Red heart symbol for hospitals
  const hospitalSymbol = new PictureMarkerSymbol({
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPB2yzqbJOhEXN1pF3LUbqyBd5nYbNTcjuX5fsl4G4_POy7bxXVLp5kmTHVHNbqlpvWs&usqp=CAU", 
  width: "10px",
  height: "10px"
  });
  
  // Hospitals layer with custom symbol and pop-up
  const featureLayer_3 = new FeatureLayer({
  url: "https://services3.arcgis.com/YvCkaUgvu4lV73yk/arcgis/rest/services/Hospitals/FeatureServer",
  renderer: {
    type: "simple",
    symbol: hospitalSymbol
  },
  popupTemplate: {
    title: "{NAME}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          { fieldName: "ADDRESS", label: "Address" },
          { fieldName: "CITY", label: "City" },
          { fieldName: "STATE", label: "State" },
          { fieldName: "ZIP", label: "Zip Code" },
          { fieldName: "TELEPHONE", label: "Telephone" },
          
        ]
      }
    ]
  }
  });
  
  map.add(featureLayer_1);
  map.add(featureLayer_2);
  map.add(featureLayer_3);
  });
