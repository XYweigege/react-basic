import React, { memo } from 'react'
import { useContext, useEffect } from 'react'
import { MobxContext } from '@/store'
import { observer } from 'mobx-react-lite'
import axios from 'axios'
import '@/mock/index'
import './index.css'
const MyA = observer(() => {
  const { setCount, getCount } = useContext(MobxContext)
  const handlesetCount = val => {
    console.log('handlesetCounthandlesetCount')
    setCount(val)
  }
  useEffect(() => {
    axios.post('/mock/getData').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      MyA
      {getCount}
      <button onClick={() => handlesetCount(4)}>点击</button>
      <span className="text">helloworld</span>
    </div>
  )
})

export default MyA
