import Image from 'next/image'
import SankeyDemo from './components/sankey-chart-full'
import { SankeySonar } from './components/sankey-sonar'
// import { MyLineChart } from './components/line-chart'
// import { MySankeyChart } from './components/sankey-chart'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      
      <div className='container h-2/3'>
        
        {/* <MyLineChart /> */}

        {/* <MySankeyChart /> */}
      
        {/* <SankeyDemo /> */}

        <SankeySonar />

      </div>
    
    </main>
  )
}
