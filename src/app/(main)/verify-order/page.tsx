
'use client';

import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function VerifyOrderPage() {
  const [data, setData] = useState('No result');

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Verify Order</h1>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p className="my-4">{data}</p>
    </div>
  );
}
