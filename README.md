# GeoMap 

This is my Leaflet.js based mapping project.
The code here is totally self contained - it does not require any external
connectivity.

However it does require 2 things

  - A Open Tile Server to be running and accessable from address 127.0.0.1:5000
    If you need to change this address please look in the file maps/data_loader.ks.
  - A GeoJSON source. This is generated by an external source (dump1090) for example and would be read as a http GET request.

### Ok sow how to I do this ?

We need to run the docker-osm image

    cd ~/Dev/Docker/osm2 && docker-compose up -d && cd

Next we need the GeoJson

    (cd ~/Dev/sdr/dump1090 && nohup ./run.sh) && sleep 5s && cd

And finally (assuming your os cain "open")

    open map.html

And we now should be running fine.
