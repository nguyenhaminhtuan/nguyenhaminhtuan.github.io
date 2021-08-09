import styled from '@emotion/styled';

function Terminal(): JSX.Element {
  return (
    <TerminalWrapper>
      <TerminalAppBar>
        <ToolbarButton close>&#10005;</ToolbarButton>
        <ToolbarButton>&#9472;</ToolbarButton>
        <ToolbarButton>&#9723;</ToolbarButton>
      </TerminalAppBar>
      <TerminalBody></TerminalBody>
    </TerminalWrapper>
  );
}

const TerminalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;

const TerminalAppBar = styled.div`
  padding: 7px 5px;
  display: flex;
  align-items: center;
  background: linear-gradient(#504b45 0%, #3c3b37 100%);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const TerminalBody = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.black[100]};
`;

const ToolbarButton = styled.button<{ close?: boolean }>`
  margin-left: 3px;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  background: ${(props) =>
    props.close
      ? 'linear-gradient(#f37458 0%, #de4c12 100%)'
      : 'linear-gradient(#7d7871 0%, #595953 100%)'};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
`;

export default Terminal;
