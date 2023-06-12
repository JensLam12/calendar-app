import { useDispatch, useSelector } from "react-redux"
import calendarAPI from "../api/calendarAPI";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password}) => {
        dispatch( onChecking() );

        try {
            const { data } = await calendarAPI.post('/auth', { email, password } );
            console.log(data);
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch(exception) {
            console.log(exception);
            dispatch( onLogout(exception) );
        }
    }

    const startRegister = async({ name, email, password}) => {
        dispatch( onChecking() );

        try {
            const { data } = await calendarAPI.post('/auth/new', { name, email, password } );
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch(exception) {
            dispatch( onLogout(exception.response.data?.msg || '') );
        }
    }

    const startCleanErrorMessage = async() => {
        dispatch( clearErrorMessage() );
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem( 'token' );
        if( !token ) return dispatch( onLogout() );

        try {

            const { data } = await calendarAPI.get( '/auth/renew');
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch( exception) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    return {
        status, 
        user,
        errorMessage,
        startLogin,
        startRegister,
        startCleanErrorMessage,
        checkAuthToken
    }
}