import { css } from '@emotion/react';
import type { Interpolation, Theme } from '@emotion/react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

type IconProps = {} & FontAwesomeIconProps;

function Icon(props: IconProps): JSX.Element {
  return <FontAwesomeIcon {...props} />;
}

type IconButtonProps = {
  iconCss?: Interpolation<Theme>;
} & IconProps &
  React.ComponentPropsWithoutRef<'button'>;

function Button({
  icon,
  size,
  iconCss,
  children,
  ...props
}: IconButtonProps): JSX.Element {
  return (
    <button
      {...props}
      type="button"
      css={css`
        position: relative;
      `}
    >
      <Icon
        css={[
          css`
            position: absolute;
            transform: translate(-50%, -50%);
          `,
          iconCss,
        ]}
        icon={icon}
        size={size}
      />
      {children}
    </button>
  );
}

export default Object.assign(Icon, { Button });
