import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import Container from '../container';
import Input from '../input';
import TextArea from '../text-area';
import Button from '../button';
import SocialLink from '../social-link';

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <FooterTop>
        <Container>
          <Form id="get-in-touch">
            <h2 css={styles.formTitle}>GET IN TOUCH</h2>
            <Spacer>
              <Label>Email:</Label>
              <Input type="email" fullWidth placeholder="📭 Your@email.com" />
            </Spacer>
            <Spacer>
              <Label>Subject:</Label>
              <Input type="text" fullWidth placeholder="👋 Just saying hi" />
            </Spacer>
            <Spacer>
              <Label>Message:</Label>
              <TextArea
                rows={10}
                fullWidth
                placeholder="Hi there,&#13;&#13;✨   ✨   ✨"
              />
            </Spacer>
            <Spacer>
              <Button.Base
                css={styles.submitButton}
                type="submit"
                variant="outlined"
              >
                🚀 Send me
              </Button.Base>
            </Spacer>
          </Form>
        </Container>
      </FooterTop>
      <FooterBottom>
        <SocialLink />
        <div css={styles.credit}>
          <b>Nguyen Ha Minh Tuan | {new Date().getFullYear()}</b>
          <p>
            Hosted by{' '}
            <b>
              <u>Github Pages</u>
            </b>
          </p>
        </div>
      </FooterBottom>
    </FooterWrapper>
  );
}

const styles = {
  formTitle: (theme: Theme) => css`
    margin: 2rem 0 3rem;
    color: ${theme.colors.green[200]};
    font-size: 3.5rem;
    text-align: center;
  `,
  submitButton: css`
    display: block;
    margin: 2rem auto;
    padding: 12px 15px;
    font-size: 1.8rem;
  `,
  credit: (theme: Theme) => css`
    margin-top: 2.5rem;
    font-size: 1.7rem;
    font-family: ${theme.fonts.mono};
  `,
};

const FooterWrapper = styled.footer`
  & h2 {
    font-family: ${(props) => props.theme.fonts.hackernoon};
  }
`;

const FooterTop = styled.div`
  padding: 2.5rem 0;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.gray[100]};
  border-top: 7px solid ${(props) => props.theme.colors.primary};
  border-bottom: 7px solid ${(props) => props.theme.colors.primary};
`;

const FooterBottom = styled.div`
  padding: 3rem 0 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Form = styled.form`
  max-width: 600px;
  display: block;
  margin: auto;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.green[200]};
  font-size: 1.7rem;
  font-family: ${(props) => props.theme.fonts.hackernoon};
`;

const Spacer = styled.div`
  margin-bottom: 10px;
`;

export default Footer;
