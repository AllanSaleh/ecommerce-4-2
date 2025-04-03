import { useEffect } from "react"
import { signOut } from "firebase/auth"
import {auth} from "../lib/firebase/firebase"

const Logout = () => {

  useEffect(()=>{
    signOut(auth)
  },[])

  return (
    <div>
      <h1>Logging out!</h1>
      <h5>Goodbye!</h5>
    </div>
  )
}
export default Logout