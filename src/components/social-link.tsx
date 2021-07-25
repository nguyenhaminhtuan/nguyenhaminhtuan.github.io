import styled from '@emotion/styled';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Icon from './icon';

function SocialIconLink(props: {
  href: string;
  icon: FontAwesomeIconProps['icon'];
}) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <Icon icon={props.icon} size="lg" />
    </a>
  );
}

function SocialLink(): JSX.Element {
  return (
    <SocialLinkWrapper>
      <SocialIconLink
        href="mailto:nguyenhaminhtuan1997@gmail.com"
        icon={faEnvelope}
      />
      <SocialIconLink
        href="https://github.com/nguyenhaminhtuan"
        icon={faGithub}
      />
      <SocialIconLink
        href="https://www.facebook.com/minhtuan.nguyen.1997"
        icon={faFacebook}
      />
      <SocialIconLink
        href="https://github.com/nguyenhaminhtuan"
        icon={faLinkedin}
      />
    </SocialLinkWrapper>
  );
}

const SocialLinkWrapper = styled.div`
  & a {
    margin: 3px 10px;
  }
`;

export default SocialLink;
