function LeisureProductInfo({data}) {
  return (
      <div className="flex flex-col p-5 text-[14px]">
          <span className="font-bold">상품 사용 안내</span>
      {data.info}
    </div>
  )
}

export default LeisureProductInfo
