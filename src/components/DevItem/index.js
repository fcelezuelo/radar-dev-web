import React from 'react';
import { FaSync } from 'react-icons/fa';

import './styles.css'

function DevItem(props) {
    const { dev, updateDev } = props;

    async function handleUpdateDev(username) {
        await updateDev(username);
    }

    return (
        <li className="dev-item">
            <div className="button-reload">
                <FaSync onClick={() => handleUpdateDev(dev.github_username)} />
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