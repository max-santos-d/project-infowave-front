import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    span {
      font-size: 0.7rem;
    }
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const CommentContent = styled.div`
  text-align: justify;
  white-space: pre-wrap;
  margin-bottom: 1rem;
  overflow-wrap: break-word;
  word-break: break-word;
  font-size: 0.7rem;
`;
