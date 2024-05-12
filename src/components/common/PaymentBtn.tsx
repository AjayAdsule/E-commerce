'use client';

import { Button } from '../ui/button';
import usePayment from '~/app/product-detail/hooks/usePayment';

const PaymentBtn = ({ children }: { children: React.ReactNode }) => {
  const { processToPay } = usePayment();
  return (
    <Button
      className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'
      onClick={() => processToPay({ amount: 199, name: 'pume', quantity: 1 })}
    >
      {children}
    </Button>
  );
};

export default PaymentBtn;
