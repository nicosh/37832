import { useState } from 'react';
import { useRouter } from 'next/router';

const Revalidator = () => {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const revalidate = async (urlPath: String) => {
    let result = await fetch(`api/revalidate`, {
      method: 'POST',
      body: JSON.stringify({ urlPath }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let json = await result.json();
    return json;
  };
  const revalidatePage = () => {
    revalidate(`/_sites/localhost:3000${router.asPath === '/' ? '' : router.asPath}`);
  };
  return (
    <div>
      <button
        onClick={() => {
          revalidatePage();
        }}
      >
        Revalidate Page
      </button>
    </div>
  );
};
export default Revalidator;
