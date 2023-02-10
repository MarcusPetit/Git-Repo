import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UserProps } from '../module/user';
import calsses from './User.module.css';
const User = ({
  login,
  avatar_url,
  html_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={calsses.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location} </span>
        </p>
      )}
      <div className={calsses.follow}>
        <div>
          <p>Seguidores</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo</p>
          <p>{following}</p>
        </div>
      </div>
      <Link to={`${html_url}`}>Ver melhores projetos</Link>
    </div>
  );
};

export default User;
