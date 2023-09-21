import Image from 'next/image'
import Layout from '@/Components/Layout/Layout'
import Presentation from '@/Components/Presentation/Presentation'
import MedalTable from '@/Components/MedalTable/MedalTable'
import DailySports from '@/Components/DailySports/DailySports'
import RelevantNews from '@/Components/RelevantNews/RelevantNews'
import FacultiesPlaying from '@/Components/FacultiesPlaying/FacultiesPlaying'

export default function Home() {
  return (
    <main className='main'>
        <Layout>
          <Presentation />
          <MedalTable />
          <DailySports />
          <RelevantNews />
          <FacultiesPlaying />
        </Layout>
    </main>
  )
}
