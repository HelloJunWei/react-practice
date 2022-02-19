import { useState, useEffect } from 'react'
import { login, userSelector } from '../store/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, isSuccess } = useSelector(userSelector)

  const [account, setAccount] = useState('account')
  const [password, setPassword] = useState('password')

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess]);

  const onSubmit = (data: { account: string, password: string }) => {
    dispatch(login(data))

    /* 不能這樣用？
     * await dispatch(login(data))
     * navigate('/')
     */
  }

  return (
    <div className="w-full bg-gray-600 rounded-md text-white flex flex-col">
      <p className="my-3">
        Login
      </p>
      <input
        value={account}
        onChange={e => setAccount(e.target.value)}
        type="text"
        placeholder="帳號"
        className="mt-2 bg-gray-600 border rounded-md"
       />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="密碼"
        className="mt-2 bg-gray-600 border rounded-md"
      />
      <button className="rounded-md bg-blue-600 mt-2" onClick={() => onSubmit({ account, password })}>
        { isLoading ? '登入中' : '登入' }
      </button>
    </div>
  )
}
