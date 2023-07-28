'use client'
import Layout from '@/Layout/Layout'
import Button from '@/components/Button/Button'
import HTag from '@/components/HTag/HTag'
import P from '@/components/P/P'
import Rating from '@/components/Rating/Rating'
import Tag from '@/components/Tag/Tag'
import { useState } from 'react'

export default function Home() {
  const [rating, setRating] = useState<number>(0)

  return (
    <Layout>
      <HTag tag={'h1'}>Hello</HTag>
      <Button appearence={'primary'} arrow='right'>
        Butn
      </Button>
      <Button appearence={'ghost'} arrow='right'>
        Butn
      </Button>
      <P size={'s'}>Hello</P>
      <P size={'m'}>Hello</P>
      <P size={'l'}>Hello</P>
      <Tag size='m' color='red'>
        Hello
      </Tag>
      <Tag size='s' color='green'>
        Asss
      </Tag>
      <Tag size='s' color='ghost'>
        DDdd
      </Tag>
      <Tag size='m' color='primary'>
        DDdd
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </Layout>
  )
}
