const CustomDate = ({className}) => {

  const today = new Date();
  // 현재 날짜를 가져옵니다.
  
  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;
  // 원하는 형식으로 날짜를 설정합니다.
  
      return (
          <span className={className}>
             {formattedDate}
          </span>
      );
  }
  
  export default CustomDate;