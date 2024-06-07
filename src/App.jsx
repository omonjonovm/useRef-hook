import useInputValidation from "./hook/useInputValidation"

const User = () => {
 const firstname = useInputValidation('')
 const lastname = useInputValidation('')

  return (
    <div className="w-50 mx-auto mb-5">
      <div className="border p-3 mt-5">
        <p className="text-center fs-3">Register</p>
        <div className="d-flex gap-3">
          <input type="text" className={`form-control ${firstname.colorValidate}`} placeholder="FirstName" value={firstname.value} onChange={firstname.onChange} />
          <input type="text" className={`form-control ${lastname.colorValidate}`} placeholder="LastName" value={lastname.value} onChange={lastname.onChange} />
        </div>
        <button className="mt-3 btn btn-success">Send data</button>
      </div>
    </div>
  )
}
const App = () => {
  return <User />
}
export default App