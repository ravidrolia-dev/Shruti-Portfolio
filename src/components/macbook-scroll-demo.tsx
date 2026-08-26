import { MacbookScroll } from "./ui/macbook-scroll";
import { getOptimizedCloudinaryUrl } from "../lib/cloudinary";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full bg-transparent flex justify-center">
      <MacbookScroll
        src={[
          getOptimizedCloudinaryUrl("https://res.cloudinary.com/dycy3bsn4/image/upload/v1787730669/macbook_qsokq3.png", 800),
          getOptimizedCloudinaryUrl("https://res.cloudinary.com/dycy3bsn4/image/upload/v1787730685/macbook1_yvm0zf.png", 800)
        ]}
        showGradient={false}
      />
    </div>
  );
}


