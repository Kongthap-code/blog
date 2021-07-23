import Head from 'next/head'
import { useRouter } from 'next/router';

function openingupper() {
  const title = "Kongthap Code My personal blog📋"
  return (
    <Head>
      <title key="title">{title}</title>
    </Head>
  )
}

export default openingupper;
