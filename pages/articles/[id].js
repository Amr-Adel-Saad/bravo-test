import Layout from '../../components/Layout';
import Article from '../../components/Article';
import CommentSection from '../../components/CommentSection';

 const ArticlePage = () => {
  return (
    <Layout>
      <Article />
      <CommentSection />
    </Layout>
  );
}

export default ArticlePage;