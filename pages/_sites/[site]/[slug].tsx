import Revalidator from '../../../components/revalidate';

interface PageProps {
  params: {
    site: string;
    slug: string;
  };
}

const Slug = ({ data }: any) => {
  let slug = data ? JSON.parse(data) : {};

  return (
    <div>
      {slug?.site} / {slug?.slug}
      <Revalidator />
    </div>
  );
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps = async ({ params }: PageProps) => {
  const { site, slug } = params;
  return {
    props: {
      data: JSON.stringify({ site, slug }),
    },
  };
};

export default Slug;
