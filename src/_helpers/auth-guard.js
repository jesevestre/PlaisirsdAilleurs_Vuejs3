import router from '@/router';

export function authGuard(to){
    let token = localStorage.getItem('token');

    if(token){
        return true;
    }

    router.push('/authentification/Login');
}

export function authGuardLogin(to){
    let token = localStorage.getItem('token');

    if(token){
        return true;
    }
    
    return false;
}