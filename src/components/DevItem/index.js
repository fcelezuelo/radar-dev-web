import React from 'react';
import { FaSync, FaTrashAlt } from 'react-icons/fa';

import './styles.css'

function DevItem(props) {
    const { dev, updateDev, destroyDev } = props;

    async function handleUpdateDev(username) {
        await updateDev(username);
    }

    async function handleDestroyDev(username) {
        await destroyDev(username);
    }

    return (
        <li className="dev-item">
            <div className="button-controls">
                <i>
                    <FaSync onClick={() => handleUpdateDev(dev.github_username)} />
                </i>
                <i>
                    <FaTrashAlt onClick={() => handleDestroyDev(dev.github_username)} />
                </i>
            </div>
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;