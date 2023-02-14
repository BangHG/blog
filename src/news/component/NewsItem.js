import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  padding: 1.5em 0;
  & + & {
    border-top: 2px dashed #ddd;
  }
  transition: 500ms background-color;
  &:hover {
    background-color: #f9f9f9;
  }
  .thumbnail {
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    flex: 0 0 160px;
    height: 160px;
    /* background: url(//via.placeholder.com/160x160); */
    font-size: 0;
    img {
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }
  .contents {
    margin: 0 1rem;
    word-break: keep-all;
    h2 {
      margin: 0;
      a {
        color: black;
        text-decoration: none;
        font-weight: 600;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
    .date {
      font-size: 0.8em;
      color: #999;
      text-align: right;
    }
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <p className="date">{publishedAt.split('T')[0]}</p>
      </div>
    </NewsItemBlock>
  );
};
export default NewsItem;
