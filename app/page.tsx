'use client'
import Button from '@/components/Button/Button'
import HTag from '@/components/HTag/HTag'
import P from '@/components/P/P'

export default function Home() {
  return (
    <>
      <HTag tag={'h1'}>Fff</HTag>
      <Button appearence={'primary'} arrow='right'>
        Butn
      </Button>
      <Button appearence={'ghost'} arrow='right'>
        Butn
      </Button>
      <P size={'s'}>Hello</P>
      <P size={'m'}>Hello</P>
      <P size={'l'}>Hello</P>
    </>
  )
}
