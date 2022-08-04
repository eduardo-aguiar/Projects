import { GetStaticProps, NextPage } from 'next';

interface Props {}

const BlogCard: NextPage<Props> = (props) => <div>{JSON.stringify(props)}</div>;

export const getStaticProps: GetStaticProps = async (context) => ({
  props: context,
});

export default BlogCard;
