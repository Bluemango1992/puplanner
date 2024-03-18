import { Spinner } from 'react-bootstrap';

const Loading: React.FC = () => {
    return (
        <div className="loading-spinner">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
};

export default Loading;
