import React , {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import { Draw, Modify, Select } from 'ol/interaction';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';


export default function Mappage(){
    const navigate = useNavigate();

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    if (!firstName) {
      navigate('/');
      return;
    }
    document.title = `Welcome ${firstName}`;

    const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new ol.source.Vector(),
          }),
        ],
        view: new View({
            center: fromLonLat([0, 0]),
            zoom: 2,
          }),
        });
        const draw = new Draw({
            source: map.getLayers().item(1).getSource(),
            type: 'Polygon',
          });
          const modify = new Modify({
            source: map.getLayers().item(1).getSource(),
          });
          map.addInteraction(draw);
          map.addInteraction(modify);
          const select = new Select();
    map.addInteraction(select);
  }, [navigate]);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Map Page</h1>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}