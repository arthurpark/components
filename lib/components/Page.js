import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  padding: 60px 0 0;
  overflow: auto;
`;

const Header = styled.header`
  display: flex;
  padding: 0 1rem;
  align-items: center;
`;

const Content = styled.section`
  padding: 0 1rem;
`;

const Heading = styled.h1`
  flex: 1;
`;

export default class Page extends React.Component {
  render() {
    const { title, action, children } = this.props;

    return (
      <Wrapper>
        {(title || action) && (
          <Header>
            <Heading>{title}</Heading>
            {action}
          </Header>
        )}

        <Content>{children}</Content>
      </Wrapper>
    );
  }
}
