import React from 'react'
import { Route, Routes,} from 'react-router-dom'
import View from '../View'
import Charts from '../CHART/Charts'


const Router = () => {
  return (
     <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/charts' element={<Charts />} />
     </Routes>
  )
}

export default Router