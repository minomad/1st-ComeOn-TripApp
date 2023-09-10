import pb from './pocketbase';

export function usePocketData(collection) {
  const defaultOptions = {
    sort: '-created',
  };

  const getListData = (options = {}) =>
    pb.collection(collection).getFullList({ ...defaultOptions, ...options });

  // const { getListData: HotelData  } = usePocketData('hotel');
  // const {
  //   isLoading,
  //   isError,
  //   data ,
  // } = useQuery(['hotel'], () => getListData());

  const getIdData = (id, options = {}) => pb.collection(collection).getOne(id, options);

  // const { getIdData } = usePocketData('hotel');
  // const {
  // isLoading,
  // isError,
  // data,
  // } = useQuery(['hotel', id], () => getDramaId(id));

  const createData = (data) => pb.collection(collection).create(data);

  const updateData = (id, data) => pb.collection(collection).update(id, data);

  const deleteData = (id) => pb.collection(collection).delete(id);

  const signIn = ({ email, password }) => pb.collection('users').authWithPassword(email, password);

  const signOut = () => pb.authStore.clear();

  const isAuth = () => pb.authStore.model();

  const emailVerified = (email) => pb.collection(collection).requestVerification(email);

  const emailconfirm = (token) => pb.collection(collection).confirmVerification(token);

  const authRefresh = () => pb.collection(collection).authRefresh();

  const passwordReset = (email) => pb.collection(collection).requestPasswordReset(email);

  return {
    getListData,
    getIdData,
    createData,
    updateData,
    deleteData,
    signIn,
    signOut,
    isAuth,
    emailVerified,
    emailconfirm,
    authRefresh,
    passwordReset,
  };
}
