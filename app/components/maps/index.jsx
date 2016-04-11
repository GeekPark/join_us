import _ from 'lodash';
import React from 'react';

require('./index.styl');

const POS = [116.500343,39.984760];
const KEY = 'e36c86f80233fdeeb2661ed80c6b0eab';

function initMap() {
  const center = window.innerWidth < 1080 ? POS : [116.490984,39.985136];
  const content = window.innerWidth > 1080 ? 'GeekPark 极客公园' : '北京市朝阳区酒仙桥路4号751 D·Park 正东集团院内 C8座105室 极客公园';

  const map = new AMap.Map('map-container', {
    zoom: 16,
    scrollWheel: false,
    center,
    dragEnable: (window.innerWidth > 1080)
  });

  const marker = new AMap.Marker({
    map: map,
    animation: 'AMAP_ANIMATION_DROP',
    clickable: false,
    position: POS,
  })

  const infoWindow = new AMap.InfoWindow({
    content,
    position: POS,
    offset: new AMap.Pixel(5,-30)
  });

  infoWindow.open(map, POS);
};

var Maps = React.createClass({
  componentDidMount: function() {
    initMap();
  },
  render: function () {
    return (
      <div>
        <div className="hidden-mobile map-container" id="map-container">
          <div className="map-info-cover">
            <img src="http://7xjjng.com2.z0.glb.qiniucdn.com/uploads/location/location_image/835f652a-2f7a-4878-acd5-75eb6c4c5bef/1448277554-281baa462c5621c01b4d10752e4e622a.jpg?imageView2/2/" />
            <div className="location">
              北京市朝阳区酒仙桥路4号751 D·Park 正东集团院内 C8座105室 极客公园
            </div>
          </div>
        </div>
        <div className="hidden-pc static-map">
          <img src={`http://restapi.amap.com/v3/staticmap?location=${POS.toString()}&zoom=14&size=420*300&markers=mid,,A:${POS.toString()}&key=${KEY}`} />
        </div>
      </div>
    );
  }
});

module.exports = Maps;
