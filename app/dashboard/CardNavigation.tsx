import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Button from "@/app/components/Button";

interface cardNavigationProps {
  cardLimit: number;
  currentIdx: number;
  handleOnPrevious?: () => void;
  handleOnNext?: () => void;
}

const NO_CARD_MESSAGE = "No Card Available";

export default function CardNavigation({
  cardLimit,
  currentIdx,
  handleOnPrevious,
  handleOnNext,
}: cardNavigationProps) {
  return (
    <div className="mt-4 flex">
      <Button className="text-3xl" onClick={handleOnPrevious}>
        <GrFormPreviousLink />
      </Button>
      <span className="text-xl">
        {cardLimit == 0 ? NO_CARD_MESSAGE : currentIdx + "/" + cardLimit}
      </span>
      <Button className="text-3xl" onClick={handleOnNext}>
        <GrFormNextLink />
      </Button>
    </div>
  );
}
