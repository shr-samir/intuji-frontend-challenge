import { icons } from "../assets/icons";

interface StatCardProps {
  title: string;
  amount: string | number;
  titleIcon: string;
  trendIcon: string;
  trendIconColor: string;
  bgColor: string;
  rate: string | number;
  textColor?: string;
}

const StatCard = ({
  title,
  amount,
  titleIcon,
  trendIcon,
  trendIconColor,
  bgColor,
  rate,
  textColor,
}: StatCardProps) => {
  //   const formattedValue = new Intl.NumberFormat("en-US").format(amount);

  return (
    <div className={`rounded-xl p-5 bg-${bgColor} border`}>
      <div className="flex gap-2">
        <div className={`border border-${textColor}/50 rounded-full w-12 h-12`}>
          <img
            src={titleIcon}
            alt={title}
            className="w-full p-2"
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h4 className={`text-lg font-semibold `}>{title}</h4>
          <div className="flex items-center gap-2">
            <div
              className={`p-1 rounded flex items-center justify-center`}
              style={{
                backgroundColor: `${trendIconColor}60`,
                border: `1px solid ${trendIconColor}50`,
              }}
            >
              <img src={trendIcon} alt="arrow-up" className="z-10" />
            </div>
            <span className="text-xs">{rate}% compared with last month</span>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <span className={` text-2xl font-semibold`}>${amount}</span>
        {bgColor === "white" ? (
          <img src={icons.arrowRightDark} alt="" />
        ) : (
          <img src={icons.arrowRightLight} alt="" />
        )}
      </div>
    </div>
  );
};

export default StatCard;
