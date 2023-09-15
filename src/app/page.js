import Image from 'next/image'
import Header from '@/Components/Header/Header'
import Presentation from '@/Components/Presentation/Presentation'
import MedalTable from '@/Components/MedalTable/MedalTable'
import DailySports from '@/Components/DailySports/DailySports'

export default function Home() {
  return (
    <main>
      <Header />
      <Presentation />
      <MedalTable />
      <DailySports />
    </main>
  )
}
