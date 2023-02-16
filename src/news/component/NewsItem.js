import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  padding: 1.5em 0;
  transition: 500ms background-color;
  @media all and (max-width: 480px) {
    flex-wrap: wrap;
  }
  &:hover {
    background-color: #f9f9f9;
  }
  & + & {
    border-top: 2px dashed #ddd;
  }
  .thumbnail {
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    flex: 0 0 160px;
    height: 160px;
    margin-right: 1rem; /* background: url(//via.placeholder.com/160x160); */
    font-size: 0;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media all and (max-width: 1024px) and (min-width: 479.8px) {
      flex: 0 0 max(90px, 20vw);
      height: max(90px, 20vw);
    }
    @media all and (max-width: 480px) {
      flex: 0 0 100%;
      height: auto;
      aspect-ratio: 2/1;
      margin: 0;
      margin-bottom: 1rem;
    }
  }
  .contents {
    flex: 1 1 auto;
    word-break: keep-all;
    h2 {
      margin: 0;
      line-height: 1.2;
      a {
        color: black;
        text-decoration: none;
        font-weight: 600;
      }
    }
    p {
      word-break: break-all;
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
