import HomeComponent from "@/app/components/home/Home.component";
import Layout from "@/app/layouts/Layout";

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <HomeComponent/>
        </Layout>
      </div>
    </>
  );
}
