import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <div className="flex flex-col items-center justify-center space-y-2">
                <img className='rounded-3xl w-4/5 pb-3' src="https://kinsta.com/wp-content/uploads/2021/05/there-has-been-a-critical-error-on-this-website-featured-image-1024x512.jpeg" alt="404 Not Found" />
                <h1>Oops! Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link className='btn btn-primary' to="/">back to home</Link>
            </div>
        </div>
    );
};

export default Error;
