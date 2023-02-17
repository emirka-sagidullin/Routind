import React from 'react'
import {useEffect} from 'react'

const Content = ({isAuthorized, user}) => {
    useEffect(() => {
        (isAuthorized)?
        document.title = user.login:
        document.title = 'не авторизован'
    })
    return (
    <div>
      {!isAuthorized?
        <div>gulyay otsyuda</div>:
        <div>{user.login}</div>}
    </div>
  )
}

export default Content
