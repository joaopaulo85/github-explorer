import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/66692428?s=460&u=f93cd9b6b7620c6176c53926b795bbda06ce001b&v=4"
            alt="JP"
          />
          <div>
            <strong>rocketseat/gobarber</strong>
            <p>
              API Node do projeto Gobarber desenvolvido durante o Bootcamp da
              Rockeatseat
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/66692428?s=460&u=f93cd9b6b7620c6176c53926b795bbda06ce001b&v=4"
            alt="JP"
          />
          <div>
            <strong>rocketseat/gobarber</strong>
            <p>
              API Node do projeto Gobarber desenvolvido durante o Bootcamp da
              Rockeatseat
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/66692428?s=460&u=f93cd9b6b7620c6176c53926b795bbda06ce001b&v=4"
            alt="JP"
          />
          <div>
            <strong>rocketseat/gobarber</strong>
            <p>
              API Node do projeto Gobarber desenvolvido durante o Bootcamp da
              Rockeatseat
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
