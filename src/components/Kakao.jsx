import { useEffect } from 'react'
const { kakao } = window


function Kakao({data, selectMarker, setselectMarker}) {

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.474690139678195, 126.99379931705693),
      level: 9
    };
    
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 좌표를 이용하여 마커와 커스텀 오버레이 생성
    data.forEach(item => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(item.latitude, item.longitude)
      });

      let content = '<div class="wrap" style="border-radius:1rem; border:solid 0.1rem; border-color:#3264FF; padding:0.25rem;  background: white; transform:translate(2.5rem,-3rem);">' +
        '    <div class="info">' +
        '        <div class="body">' +
        // '            <div class="img">' +
        // '                <img src="' + getPbImageURL(item, 'img') + '" style ="border-radius:0.7rem; width=10rem; height=7px;">' +
        // '           </div>' +
        '<div class="title" style="font-size:0.7rem; font-weight:bold; color:gray2">' +
        item.title +
        '</div>' +
        
        '        </div>' +
        '    </div>' +
        '</div>';
      // 커스텀 오버레이를 표시
      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new kakao.maps.LatLng(item.latitude, item.longitude)
      });

      // 마커를 클릭했을 때 커스텀 오버레이를 표시
      kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
        setselectMarker(item);
      });
    });
  }, []);

  return (
    <div id="map" className='w-[100%] h-[100vh]'></div>
  )
}


export default Kakao






export function Kakao1() {

  useEffect(()=>{
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    };  

    // 지도를 생성합니다    
    const map = new kakao.maps.Map(mapContainer, mapOption); 

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    const marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
        infowindow = new kakao.maps.InfoWindow({zindex:1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
        searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                let detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                // detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                
                const content = '<div class="bAddr" style="width:8rem; border-radius: 25% 10%; border: solid red;  translate:0px -0.3rem;">' +
                                '<span class="title">법정동 주소정보</span>' + 
                                detailAddr + 
                            '</div>';

                // 마커를 클릭한 위치에 표시합니다 
                marker.setPosition(mouseEvent.latLng);
                marker.setMap(map);

                // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                infowindow.setContent(content);
                infowindow.open(map, marker);
                console.log(detailAddr.style.removeProperty('background'))
            }   
        });
    });

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'idle', function() {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
    }

    function searchDetailAddrFromCoords(coords, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            const infoDiv = document.getElementById('centerAddr');

            for(let i = 0; i < result.length; i++) {
                // 행정동의 region_type 값은 'H' 이므로
                if (result[i].region_type === 'H') {
                    infoDiv.innerHTML = result[i].address_name;
                    break;
                }
            }
        }    
    }
      },[]
  )
  return (
    <>
    <div className="relative w-[100%]">
        <div id="map" className='w-[100%] h-[100vh]'></div>
          <div className="absolute left-3 top-3 rounded-md bg-white z-10 p-2 ">
          <span className="title">지도중심기준 행정동 주소정보</span>
          <span id="centerAddr" className='block font-normal'></span>
        </div>
    </div>
    </>
  )
}

