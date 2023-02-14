import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
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
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  color: #222;
  padding-bottom: 0.25em;
  &:hover {
    color: #555;
  }
  & + & {
    margin-left: 1rem;
  }
  &.active {
    font-weight: 500;
    border-bottom: 2px solid #22b9cf;
    color: #22b9cf;
    &:hover {
      color: #3bc0db;
    }
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          // TODO: 숙지 필요...^^
          /* active={category === c.name}  */
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={c.name === 'all' ? `/NewsPage/` : `/NewsPage/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
