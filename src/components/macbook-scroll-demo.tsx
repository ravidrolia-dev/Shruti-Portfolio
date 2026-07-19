import { MacbookScroll } from "./ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full bg-transparent flex justify-center">
      <MacbookScroll
        src={[`/macbook.png`, `/macbook1.png`]}
        showGradient={false}
      />
    </div>
  );
}


