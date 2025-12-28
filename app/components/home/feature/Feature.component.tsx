import ItemFeatureCom from "@/app/components/home/feature/ItemFeature.component";
import TitlePage from "@/app/components/content/page/TitlePage.component";
import { dataFeature, itemDataFeature } from '../../../../public/typescript/home/data'

const FeatureComponent: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-36 px-4">
        <div className="max-w-7xl w-full">

          {/* TITLE */}
          <TitlePage context={itemDataFeature}/>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {dataFeature && dataFeature.map((item, index) => (
              <div key={index}>
                <ItemFeatureCom context={item} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
