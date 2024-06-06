import { Fragment, useRef, useState } from "react"

const User = () =>{
  const [cardNumber,setCardNumber]  = useState('')
  const [cvcNumber,setCvcNumber] = useState('')
  const acmRef = useRef(null)
  const dataRef = useRef(null)

  const handleInput = e => {
    const val = e.target.value
    setCardNumber(val)
    if(val.length === 16){
      acmRef.current.focus()
    }
  }
  const handleInputCvc  = e => {
    const val = e.target.value
    setCvcNumber(val)
    if(val.length === 3){
      dataRef.current.focus()
    }
  }
  // useEffect(() => {
  //   console.log(acmRef.current);
  // })
  return(
  <div className="w-50 mx-auto mb-5">
    <div className="border p-3 mt-5">
     <input type="text" className="form-control" placeholder="Card number" onChange={handleInput} value={cardNumber}/>
     <input ref={acmRef} type="text" className="form-control mt-3" placeholder="Secure number" onChange={handleInputCvc} value={cvcNumber}/>
     <input ref={dataRef} type="text" className="form-control mt-3" placeholder="Year/Month"/>
    </div>
  </div>

 )
}



const App = () => {

  return (
    <Fragment>
      <User firstname='Murodjon' lastName='Omonjonov' link='https://t.me/omonjonov_m' />
    </Fragment>
  )
}
export default App