import { forwardRef } from 'react';
import { css } from '@emotion/react';

type ButtonProps = {
  variant: 'default' | 'outlined';
} & React.ComponentPropsWithRef<'a'>;

export default forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { variant = 'default', ...props },
  ref
) {
  return (
    <a
      {...props}
      ref={ref}
      css={(theme) => css`
        padding: 3px 15px;
        display: inline-block;
        font-size: 1.65rem;
        font-weight: bold;
        font-family: ${theme.fonts.mono};
        color: ${theme.colors.gray[200]};
        border: 2px solid
          ${variant === 'outlined'
            ? theme.colors.gray[200]
            : theme.colors.transparent};

        &:hover {
          background-color: ${theme.colors.green[100]};
          border: 2px solid ${theme.colors.gray[200]};
        }
      `}
    />
  );
});
