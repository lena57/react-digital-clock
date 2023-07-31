import React, {useState, useEffect} from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const timeId = setInterval(()=>{
      setTime(new Date() )
    }, 1000)

    return ()=>clearInterval(timeId)
  }, []);

  const timeFormat = (date) =>{
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
  }
  return (
    <div className='DigitalClock'>
      <h1>{timeFormat(time).slice(0, -2)}</h1>
    </div>
  )
}

export default Clock
