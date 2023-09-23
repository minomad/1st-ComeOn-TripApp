import { usePocketData } from '@/api/usePocketData';
import Button from '@/components/Button';
import useAuthStore from '@/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
function LeisureBookingPage() {
    const { id, cart1, cart2, cart3} = useParams()
    const { getIdData } = usePocketData('leisureProduct');
    const { createData: createOrder } = usePocketData('orderLeisure');
    const { updateData: updateUser } = usePocketData('users');
    const { data: leisureProductData, isLoading } = useQuery(['leisureProduct', id], () => getIdData(id));
    
    const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();
    const userId = user.id;
    const handlePayment = () => {
        const orderData = {
            username: user.username,
            leisureTitle: title,
            leisureId: leisure,
            leisureProductId : id,
            price: leisureProductData.price,
        }
        toast((t) => (
            <div className='flex-col items-center gap-5'>
              <span className='text-lg'>결제 하시겠습니까?</span>
              <div className='flex gap-10 pt-2'>
                <Button
                  type='submit'
                  className='rounded-lg bg-primary px-5 py-2 text-white'
                  onClick={async () => {
                    toast.dismiss(t.id);
                    const order = await createOrder(orderData);
                    updateUser(userId, {
                      'orderHotel+': order.id,
                    });
                    toast.success('결제가 완료되었습니다.');
                    setTimeout(() => {
                      toast.dismiss();
                      navigate('/');
                    }, 1000);
                  }}
                >
                  예
                </Button>
                <Button
                  type='button'
                  className='rounded-lg bg-accent px-1 py-2 text-white'
                  onClick={() => toast.dismiss(t.id)}
                >
                  아니오
                </Button>
              </div>
            </div>
          ));
        };
  return (
    <div>
      결제페이지
    </div>
  )
}

export default LeisureBookingPage
