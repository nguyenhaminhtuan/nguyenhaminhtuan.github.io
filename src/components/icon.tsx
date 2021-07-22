import { css } from '@emotion/react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

type IconProps = {} & FontAwesomeIconProps;

function Icon(props: IconProps): JSX.Element {
  return <FontAwesomeIcon {...props} />;
}

function Button({
  icon,
  size,
  ...props
}: IconProps & React.ComponentPropsWithoutRef<'button'>): JSX.Element {
  return (
    <button
      {...props}
      css={css`
        position: relative;
      `}
    >
      <Icon
        css={css`
          position: absolute;
          transform: translate(-50%, -50%);
        `}
        icon={icon}
        size={size}
      />
    </button>
  );
}

export default Object.assign(Icon, { Button });
