import { useState ,Fragment } from "react"
// class User extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,age:''
//     }
//   }
//   clickHandle = () => {
//     this.setState(prevState => ({
//       counter: prevState.counter + 1,
//     }))
//   }
//   handleDelete =() => {
//     this.setState(prevState => ({
//       counter:prevState.counter -1,
//     }))
//   }
//   handleRes = () => {
//     this.setState({
//       counter:0,
//     })
//   }
//   changeHandle = (e) => {
//    this.setState({
//     age:e.target.value,
//    })
//   }
//   render() {
//     const { firstname, lastName, link } = this.props
//     const {age,counter} = this.state
//     return (
//       <div className="w-50 mx-auto">
//         <div className="border p-3 mt-5">
//           <h4>
//             Mening ismim - {firstname} sharifim - {lastName}, yoshim - {age}
//           </h4>
//           <a href={link}>telegram sahifam</a>
//           <div className="mt-3">
//             <button onClick={this.clickHandle} className="btn btn-success">Increment</button>
//             <button onClick={this.handleDelete}className="btn btn-danger mx-2">Decrement</button>
//             <button onClick={this.handleRes}className="btn btn-info ">Restart</button>
//             <p>{counter}</p>
//           </div>
//           <form>
//             <span>Yoshingiz</span>
//             <input type="number" className="form-control" onChange={this.changeHandle}/>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
const User = ({firstname,lastName,link}) =>{
  const [counter,setCounter] = useState(0)
  const [isLogin,setIsLogin] =useState(false)

  const onIncrement = () =>{
    setCounter(prevCounter => prevCounter +1)
  }
  const onDecrement = () => {
    setCounter(prevState => prevState -1)
  }
  const onRestart = () => {
    setCounter(0)
  }
  const onLogin = () => {
    setIsLogin(prevState => !prevState)
  }
 return(
  <div className="w-50 mx-auto mb-5">
    <div className="border p-3 mt-5">
    <h1>
      Mening ismim -{firstname},sharifim - {lastName} 
    </h1>
    <a href={link}>You tube kanalim</a>
    <p className="text-center">{counter}</p>
    <div className="d-flex justify-content-center">
      <buttton className='btn btn-success'onClick={onIncrement}>Increment</buttton>
      <buttton className='btn btn-danger mx-3' onClick={onDecrement}>Decrement</buttton>
      <button className="btn btn-primary" onClick={onRestart}>Restart</button>
    </div>
      {isLogin ? <p className="text-center mt-3">Login</p> :null }
    <div className="d-flex justify-content-center">
      <button className="btn btn-outline-primary" onClick={onLogin}>Toggle</button>
    </div>
    </div>
  </div>
 )
}


const App = () => {
  return (
    <Fragment>
      <User firstname='Murodjon' lastName='Omonjonov' link='https://web.telegram.org' />
      <User firstname='Doniyor' lastName='Xayrulla' link='youtube.com' />
    </Fragment>
  )
}
export default App