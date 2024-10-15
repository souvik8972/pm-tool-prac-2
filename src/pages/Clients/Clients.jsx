import React, { Suspense, useEffect, useMemo } from 'react'
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux'
// import Card from './components/Card'

const Card=React.lazy(()=>import('./components/Card'))

const Clients = () => {
  const data =useSelector((state)=>state.client)
  // const data=[]
  const memoData = useMemo(() => data, [data])

  return (
    <div className='w-full pl-4 '>


      <Suspense fallback={<Loader line={10} />}>

        <Card data={memoData} />
      </Suspense>
    </div>
  )
}

export default Clients