import { Link, useParams } from 'react-router-dom';

const Article = () => {
  // #13.4.1 파라미터 useParam
  const { id } = useParams();
  return (
    <div style={{ marginTop: '1em', padding: '1em', border: '1px solid #ddd' }}>
      <h2> 게시글 {id} </h2>

      <code style={{ display: 'block', margin: '1em 0', background: '#ddd', padding: '1em' }}>
        const ｛id｝ = useParams(); <br></br>
        &lt;h2&gt; 게시글 ｛id｝ &lt;/h2&gt;
      </code>

      {/* <Link to="/Articles">게시글 목록으로</Link> */}
    </div>
  );
};
export default Article;
