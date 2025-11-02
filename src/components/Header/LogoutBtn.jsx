import { useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/auth"

const LogoutBtn = () => {
  const dispatch = useDispatch()
  const logouHandler = () => {
    authService.logout().then( () => {
      dispatch(logout())
    })
  }
  return (
    <button
    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-ful"
    onClick={logouHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn