import { useEffect } from 'react'
const { kakao } = window


function Kakao({data, selectMarker, setselectMarker, selectCategory, latitude=37.474690139678195 , longitude = 126.99379931705693 }) {

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 9
    };
    
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const imageSrc = selectCategory === "숙소" ? '/around-lodgingMarker.svg' : '/around-leisureMarker.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(50, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    // 좌표를 이용하여 마커와 커스텀 오버레이 생성
    data.forEach(item => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(item.latitude, item.longitude),
        image: markerImage
      });

      let content = '<div class="wrap" style="border-radius:1rem; border:solid 0.1rem; border-color:#3264FF; padding:0.25rem;  background: white; transform:translate(1rem,-3.5rem);">' +
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
        console.log(data);
      });
    });
  }, []);

  return (
    <div id="map" className='w-[100%] h-[90vh] mt-[6rem]'></div>
  )
}


export default Kakao






export function Kakao1({setselectAddress}) {

  useEffect(()=>{
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
    };  

    // 지도를 생성합니다    
    const map = new kakao.maps.Map(mapContainer, mapOption); 

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    const imageSrc = '/location-marker.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(90, 90), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(35, 55)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    const markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    // 좌표를 이용하여 마커와 커스텀 오버레이 생성

    const marker = new kakao.maps.Marker({
      position: markerPosition, 
      image: markerImage // 마커이미지 설정 
  }), // 클릭한 위치를 표시할 마커입니다
        infowindow = new kakao.maps.InfoWindow({zindex:1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
        searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                let detailAddr = !!result[0].road_address ? result[0].road_address.address_name  : result[0].address.address_name;
                // detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                
                // const content = '<div class="bAddr" style="width:8rem; border-radius: 25% 10%; border: solid red;  translate:0px -0.3rem;">' +
                //                 '<span class="title">법정동 주소정보</span>' + 
                //                 detailAddr + 
                //             '</div>';
                // 클릭한 위도, 경도 정보를 가져옵니다 
                var latlng = mouseEvent.latLng; 
                console.log(latlng.getLat(),latlng.getLng())
                
                // 마커를 클릭한 위치에 표시합니다 
                marker.setPosition(mouseEvent.latLng);
                marker.setMap(map);
                setselectAddress(
                  {address: detailAddr,
                    latitude: latlng.getLat(),
                    longitude: latlng.getLng()
                })
                console.log(detailAddr)

                // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                // infowindow.setContent(content);
                // infowindow.open(map, marker);
                // console.log(detailAddr.style.removeProperty('background'))
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
    <div className="relative w-[100%] ">
        <div id="map" className='w-[100%] h-[85vh] mt-[4.7rem]'></div>
          <div className="absolute left-3 top-3 rounded-md bg-white z-10  shadow-md">
            <div className="title text-sm bg-primary rounded-t-md text-white w-[100%] px-2 pt-2 pb-[0.2rem] font-bold">지도중심기준 행정동 주소정보</div>
            <span id="centerAddr" className='block font-normal py-1 px-2 text-sm'></span>
        </div>
    </div>
    </>
  )
}


//사용 예시 : <Kakao2 latitude='37.474690139678195' longitude='126.99379931705693' className='w-[100%] h-[80vh] mt-[5rem]'/>

export function Kakao2({latitude , longitude, className}) {

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 4
    };
    
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const imageSrc = '/around-lodgingMarker.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(50, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    // 좌표를 이용하여 마커와 커스텀 오버레이 생성
    
    const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(latitude, longitude),
        image: markerImage
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
  }, []);

  return (
    <div id="map" className={className}></div>
  )
}


