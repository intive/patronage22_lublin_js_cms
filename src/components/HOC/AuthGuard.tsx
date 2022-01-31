import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth-context'
import { ROUTES } from '../../types/routes';

const AuthGuard = (component: any) => {
    const authCtx = useContext(AuthContext);
    const history = useHistory()

    if (authCtx.isLoggedIn) {
        return component
      } else {
         history.replace(ROUTES.AUTH)
      }
}


export default AuthGuard