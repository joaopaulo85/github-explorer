import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/66692428?s=460&u=f93cd9b6b7620c6176c53926b795bbda06ce001b&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>180</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>180</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>180</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>teste</strong>
            <p>teste</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
