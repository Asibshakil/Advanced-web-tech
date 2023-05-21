import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Logout = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/login');
    }, [router]);

    return (
        <div>
            <p>You have been logged out.</p>
        </div>
    );
};

export default Logout;
