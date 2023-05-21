import Image from 'next/image'
import { useRouter } from 'next/router';

export default function UserLayout(props) {
    const router = useRouter();
    const handleRemoveAdmin = async (Id) => {
        try {
            const response = await fetch(`http://localhost:3000/admin/deleteadmin/${Id}`, { method: 'DELETE' });
            if (response.ok) {
                router.push('http://localhost:8000/admin/dashboard')
            } else {
                setError('Error removing admin');
            }
        } catch (error) {
            console.error('Error removing admin:', error);
            setError('Error removing admin');
        }
    };

    const handleUpdateAdmin = async (Id) => {
        try {

            const response = await fetch(`http://localhost:3000/admin/updateadmin/${Id}`, {

                method: 'PUT',

                headers: {

                    'Content-Type': 'application/json',

                },

                body: JSON.stringify({ password }),

            });

            if (response.ok) {

                // Redirect to dashboard page

                router.push('http://localhost:8000/admin/dashboard');

            } else {

                const error = await response.json();

                throw new Error(error.message || 'Failed to update password');

            }

        } catch (error) {

            console.error(error);

        }
    };

    return (
        <>

            <div className='p-28'>

                <div className="mx-auto w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={"http://localhost:3000/admin/getimage/" + props.filename} alt="me" width="150" height="150" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{props.email}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{props.address}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{props.id}</span>

                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleUpdateAdmin(props.id)}>Update</button>
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" onClick={() => handleRemoveAdmin(props.id)}>Remove</button>

                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}