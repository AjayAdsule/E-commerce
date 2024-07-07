'use client';

import { Button } from '../ui/button';
import usePayment from '~/app/product-detail/hooks/usePayment';

const PaymentBtn = ({ children }: { children: React.ReactNode }) => {
  const { processToPay } = usePayment();
  const productId = ['clw80qtct0001gqf2vyq3dldl', 'cluyqa7q50000o21ze17d42fp'];
  return (
    <Button
      className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'
      onClick={() => processToPay({ amount: 199, name: 'pume', quantity: 1, productId })}
    >
      {children}
    </Button>
  );
};

export default PaymentBtn;
