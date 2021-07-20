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
    <button {...props}>
      <Icon icon={icon} size={size} />
    </button>
  );
}

export default Object.assign(Icon, { Button });
