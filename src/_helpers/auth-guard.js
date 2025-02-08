import router from '@/router';

export function authGuard(to){
    let token = localStorage.getItem('token');

    if(token){
        return true;
    }

    router.push('/auth/Login');
}

export function authGuardLogin(to){
    let token = localStorage.getItem('token');

    if(token){
        return true;
    }
    
    return false;
}