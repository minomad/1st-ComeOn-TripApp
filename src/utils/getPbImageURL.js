
export const getPbImageURL = (item, fileName = 'img') => 
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item[fileName]}`