import { useSelector } from 'react-redux'
import Counter from './Counter'
import Login from './Login'

const Body = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(`isLoggedIn = ${isLoggedIn}`)
  return (
    <>
      <div>
        {isLoggedIn && <Counter />}
        {!isLoggedIn && <Login />}
      </div>
    </>
  )
}

export default Body
