import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useSelector';
import { FaLink, FaGithub, FaHome, FaUser, FaEnvelope, FaUsers } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import './Repositories.css';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState<string>('');
    const { searchRepositories } = useActions();
    const { error, loading, data } = useTypedSelector((state) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder={'Search packages'} />
                <button>Search</button>
            </form>
            {error && <div className="error">{error}</div>}
            {loading && (
                <div className="spinner">
                    <TailSpin color="deeppink" height={50} width={50} />
                </div>
            )}
            {!loading &&
                !error &&
                data.map((result, id) => (
                    <div className="wrapper" key={id}>
                        <div className="card">
                            <div className="title">{result.name}</div>
                            <div className="content">
                                <p>{result.description}</p>
                                <div className="links">
                                    <a href={result.links.npm}>
                                        <FaLink /> Npm
                                    </a>
                                    {result.links.homepage ? (
                                        <a href={result.links?.homepage}>
                                            <FaHome /> Homepage
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                    {result.links.repository ? (
                                        <a href={result.links?.repository}>
                                            <FaGithub /> Repository
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <p>Version: {result.version}</p>
                                <div className="owners">
                                    <div className="publisher">
                                        <p>Publisher:</p>
                                        <div className="publisher-details">
                                            <div className="username">
                                                <FaUser /> <p>{result.publisher.username}</p>
                                            </div>{' '}
                                            <div className="email">
                                                <FaEnvelope />
                                                <p>{result.publisher.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="maintainers">
                                        <p>Maintainers:</p>
                                        <div className="maintainer">
                                            <FaUsers />
                                            {result.maintainers.length}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    {result.keywords ? (
                                        <small className="keywords">
                                            keywords :{' '}
                                            {result.keywords.slice(0, 5).map((word, idx) => (
                                                <small className="word" key={idx}>
                                                    {word},
                                                </small>
                                            ))}
                                        </small>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default RepositoriesList;
