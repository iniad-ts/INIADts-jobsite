import { useQRCode } from 'next-qrcode';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';

function QRcode() {
  const { Canvas } = useQRCode();
  const [URL, setURL] = useState('http://${ip}:3000/login');

  const fetchURL = async () => {
    const ip = await apiClient.ip.$get().catch(returnNull);
    if (ip !== null) setURL(`http://${ip}:3000/login`);
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <>
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexFlow: 'column',
          marginTop: '160px',
        }}
      >
        <p>{URL}</p>
        <Canvas
          text={URL}
          options={{
            level: 'L',
            margin: 2,
            scale: 5,
            width: 150,
            color: {
              dark: '#040404',
              light: '#d7d7d7',
            },
          }}
          logo={{
            src: ' https://github.com/INIAD-Developers.png',
            options: {
              width: 50,
              x: undefined,
              y: undefined,
            },
          }}
        />
      </div>
    </>
  );
}

export default QRcode;
