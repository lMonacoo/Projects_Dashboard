import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  padding: 20px 2rem;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: ${props => props.theme.colors.greenPrimary};

  display: grid;
  grid-template-areas: 'title search search button';
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  gap: 10px;

  @media (max-width: 780px) {
    row-gap: 30px;
    grid-template-areas: 'title . . button' 'search search search search';
  }

  > h1 {
    grid-area: title;
  }

  > div {
    grid-area: search;
  }

  > button {
    grid-area: button;
  }
`;
