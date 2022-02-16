import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

function Collections() {
    const router=useRouter();
    console.log(router.query.collectionid);
  return (
   <Link href="/"><h2>{router.query.collectionid}</h2></Link>
  )
}

export default Collections