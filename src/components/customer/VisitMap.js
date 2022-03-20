import React, { useEffect } from 'react';
import './visit.css';


const { kakao } = window;

export default function VisitMap(){

  useEffect(()=> {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),// 지도의 중심좌표
      level: 3 // 지도 확대레벨
    }
    const map = new window.kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch('서울특별시 중대로 121', function(result, status) {

  // 정상적으로 검색이 완료됐으면 
   if (status === kakao.maps.services.Status.OK) {

      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      const marker = new kakao.maps.Marker({
          map: map,
          position: coords
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="width:150px;text-align:center;padding:6px 0;">송파러닝센터</div>'
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
  } 
});    

  }, []);

  return(
      <div id="map">
        
      </div>
  )
}