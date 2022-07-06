import Revalidator from '../../../components/revalidate';
interface SiteProps {
  params: {
    site: string;
  };
}

const Index = ({ data }: any) => {
  let site = data ? JSON.parse(data) : {};
  return (
    <div>
      site :{site?.site}
      <Revalidator />
    </div>
  );
};

export const getStaticProps = async ({ params }: SiteProps) => {
  const { site } = params;
  return {
    props: {
      data: JSON.stringify({ site: site + new Date().toISOString() }),
    },
  };
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export default Index;
