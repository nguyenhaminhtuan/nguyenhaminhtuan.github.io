import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
  return <FontAwesomeIcon {...props} />;
};

Icon.Button = ({ icon, size, ...props }) => {
  return (
    <button {...props}>
      <Icon icon={icon} size={size} />
    </button>
  );
};

export default Icon;
