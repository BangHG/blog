import styled, { css } from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #ddd;
  line-height: 1;
  width: 768px;
  margin: 0 auto;
  @media all and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25em;
  color: #222;
  &:hover {
    color: #555;
  }
  & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 500;
      border-bottom: 2px solid #22b9cf;
      color: #22b9cf;
      &:hover {
        color: #3bc0db;
      }
    `};
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
