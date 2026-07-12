import { MacbookScroll } from "./ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full bg-transparent flex justify-center">
      <MacbookScroll
        src={[`/macbook.jpeg`, `/macbook1.jpeg`]}
        showGradient={false}
      />
    </div>
  );
}


