import { Price } from '@/types/types';

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // This will be the site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Set automatically  by Vercel.
    'http://localhost:3000/';

  // Include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;

  // Including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

interface postDataType { 
  url: string; 
  data?: { price: Price }
}

export const postData = async ({ url, data }: postDataType ) => {
  console.log('posting,', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    console.log('Error in postData from helpers', { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  let date = new Date('1970-01-01T00:30:00Z'); 
  date.setSeconds(secs);
  return date;
};
