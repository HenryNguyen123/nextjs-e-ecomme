import { 
  IoStatsChart,
  IoRocketOutline,
  IoSettingsOutline,
  IoCloudOutline,
  IoShieldCheckmarkOutline,
  IoCodeSlashOutline
} from "react-icons/io5";
import ItemFeatureCom from "@/app/components/home/feature/ItemFeature.component";

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

const FeatureComponent: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-36 px-4">
        <div className="max-w-7xl w-full">

          {/* TITLE */}
          <div className="flex justify-center mb-20">
            <div className="max-w-2xl text-center">
              <div className="relative group flex justify-centerl">
                <h1 className="relative z-50 text-2xl font-bold max-w-2xl text-center md:text-5xl">
                  Essential Integrations with Modern Design
                </h1>
                <span className="
                    absolute -top-32 inset-0 flex items-center justify-center
                    text-7xl font-extrabold uppercase
                    text-gray-600 text-primary
                    opacity-10
                    transition-all duration-300
                    md:text-9xl md:-top-40
                    "
                >
                    Feature
                </span>

              </div>
              <p className="text-gray-600 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

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
