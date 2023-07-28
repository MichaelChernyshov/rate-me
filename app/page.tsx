'use client'
import Button from '@/components/Button/Button'
import HTag from '@/components/HTag/HTag'

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
    </>
  )
}
