import { useState, useEffect } from "react";

interface SavingPlanCardProps {
  planName: string;
  totalAmount: string | number;
  savedAmount: string | number;
  targetDate: string;
  barColor: string;
}

const SavingPlanCard = ({
  planName,
  totalAmount,
  savedAmount,
  targetDate,
  barColor,
}: SavingPlanCardProps) => {
  const [progress, setProgress] = useState(0);

  const calculatedProgress = (Number(savedAmount) / Number(totalAmount)) * 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(calculatedProgress);
    }, 150);

    return () => clearTimeout(timeout);
  }, [calculatedProgress]);

  return (
    <div className="flex flex-col gap-3.5 m-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{planName}</span>
        <span className="text-xs opacity-60">{targetDate}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p>
            <span className="font-semibold text-xl">${savedAmount}</span>
            <span className="text-sm opacity-50 font-semibold">/${totalAmount}</span>
          </p>
          <span style={{color: barColor}} className="font-semibold text-lg">{Math.floor(calculatedProgress)}%</span>
        </div>
        <div className={`relative w-full h-2 bg-background-dark rounded-full`}>
          <div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: barColor,
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SavingPlanCard;
