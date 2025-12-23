import { 
  IoStatsChart,
  IoRocketOutline,
  IoSettingsOutline,
  IoCloudOutline,
  IoShieldCheckmarkOutline,
  IoCodeSlashOutline
} from "react-icons/io5";
import ItemFeatureCom from "@/app/components/home/feature/ItemFeature.component";
import TitlePage from "@/app/components/content/page/TitlePage.component";
import { title } from "process";

const items = [
  {
    title: "Analytics Growth",
    desc: "Powerful insights for your business",
    icon: IoStatsChart,
  },
  {
    title: "Fast Deployment",
    desc: "Launch your SaaS faster",
    icon: IoRocketOutline,
  },
  {
    title: "Custom Settings",
    desc: "Fully configurable system",
    icon: IoSettingsOutline,
  },
  {
    title: "Cloud Ready",
    desc: "Optimized for cloud scale",
    icon: IoCloudOutline,
  },
  {
    title: "Secure System",
    desc: "Enterprise-level security",
    icon: IoShieldCheckmarkOutline,
  },
  {
    title: "Developer Friendly",
    desc: "Clean & modern codebase",
    icon: IoCodeSlashOutline,
  },
];

const titlePage = {
  heading: 'Feature',
  title: 'Essential Integrations with Modern Design',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

const FeatureComponent: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-36 px-4">
        <div className="max-w-7xl w-full">

          {/* TITLE */}
          <TitlePage context={titlePage}/>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {items.map((item, index) => (
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
