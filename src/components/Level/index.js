import React from 'react';

import './level.scss';

const Level = () => (
  <div className="level">
    <select className="level__select" name="list-supports">
      <option className="level__option" value="moyen">
        Moyen
      </option>
      <option className="level__option" value="facile">
        Facile
      </option>
      <option className="level__option" value="facile">
        Impossible
      </option>
    </select>
  </div>
);

export default Level;
