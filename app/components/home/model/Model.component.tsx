import { 
  IoStatsChart,
  IoRocketOutline,
  IoSettingsOutline,
  IoCloudOutline,
  IoShieldCheckmarkOutline,
  IoCodeSlashOutline
} from "react-icons/io5";
import ItemModel from "@/app/components/home/model/ItemModel.component";

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

const ModleComponent: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center my-36 px-4">
        <div className="max-w-7xl w-full">

          {/* TITLE */}
          <div className="flex justify-center mb-20">
            <div className="max-w-2xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Essential Integrations with Modern Design
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {items.map((item, index) => (
              <div key={index}>
                <ItemModel context={item} />
                {/* <div className="flex flex-col items-center text-center">
                  <div className={style.iconModel}>
                    <span className="text-4xl">
                      <IoStatsChart />
                    </span>
                  </div>

                  <h4 className="text-2xl font-semibold my-5">
                    {item.title}
                  </h4>

                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div> */}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModleComponent;
