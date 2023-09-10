import { useEffect } from 'react'

const { kakao } = window

export function Kakao({title, img}) {
useEffect(()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
    var positions = [
        {
            content: '<div class="wrap" style="border-radius:1.3rem; padding:0.5rem; background: white; transform:translate(3.5rem,-5rem);">' + 
            '    <div class="info">' + 
                    
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="' + img + '" style ="border-radius:1rem; width=73px; height=70px;">' +
            '           </div>' + 
            '<div class="title" style="font-size:0.9rem; font-weight:bold; color:gray2">' + 
            title + 
 
        '</div>' +
            '        </div>' + 
            '    </div>' +    
            '</div>', 
            latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        },
        {
            content: '<div>생태연못</div>', 
            latlng: new kakao.maps.LatLng(33.450500, 126.569000)
        },
        {
            content: '<div>텃밭</div>', 
            latlng: new kakao.maps.LatLng(33.45279, 126.569940)
        },
        {
            content: '<div>근린공원</div>',
            latlng: new kakao.maps.LatLng(33.45393, 126.570938)
        }
    ];

    for (var i = 0; i < positions.length; i ++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng // 마커의 위치
        });
    }
        
        // 마커 위에 커스텀오버레이를 표시합니다
        // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    for (let i = 0; i < positions.length; i ++) {
        var overlay = new kakao.maps.CustomOverlay({
            content: positions[i].content,
            map: map,
            position:  positions[i].latlng        
        });
    }
        // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    for (let i = 0; i < positions.length; i ++) {
        kakao.maps.event.addListener(marker, 'mouseover', function(map, content, position) {
            overlay.setMap(map, content, position);
        });
    }
        // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
        /* function closeOverlay() {
            overlay.setMap(null);     
        } */
    }
    ,[] 
  )
  return (
    <div id="map" className='w-[100%] h-[100vh]'></div>
  )
}









export default function Kakao1() {

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
            let detailAddr = !result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
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

