import NextHead from 'next/head';

type HeadProps = {
  title?: string;
};

function Head({ title }: HeadProps): JSX.Element {
  return (
    <NextHead>
      <title>{title && `${title} | `}Nguyen Ha Minh Tuan</title>
    </NextHead>
  );
}

export default Head;
