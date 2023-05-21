import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        // Send forgot password request to server
        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                // Forgot password successful, display success message
                setSuccessMessage(
                    'An email has been sent to your email address on how to reset your password.'
                );
                setErrorMessage('');
            } else {
                // Forgot password failed, display error message
                setErrorMessage(
                    'Unable to process request. Please make sure the email address is correct.'
                );
                setSuccessMessage('');
            }
        } catch (err) {
            setErrorMessage('An error occurred. Please try again later.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPassword}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Reset Password</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
            <p>
                Remembered your password?{' '}
                <Link href="/login">
                    Login here
                </Link>
            </p>
        </div>
    );
};

export default ForgotPassword;
