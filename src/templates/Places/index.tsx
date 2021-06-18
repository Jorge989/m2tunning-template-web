import { NextSeo } from 'next-seo'
import Image from 'next/image'


import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'



 
export default function PlacesTemplate() {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
     <h1>oi</h1>
    </>
  )
}
