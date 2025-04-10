interface RecentTransactionCardProps {
  name: string;
  amount: string | number;
  transactionDate: string;
  status: string;
  statusColor: string;
  image: string;
}

const RecentTransactionCard = ({
  name,
  amount,
  transactionDate,
  status,
  statusColor,
  image,
}: RecentTransactionCardProps) => {

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="bg-background-dark rounded-full flex items-center justify-center p-3.5">
          <img src={image} alt="Profile Picture" className="w-6" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-lg">{name}</span>
          <span className="font-semibold text-xs opacity-50">{transactionDate}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center">
          <span className="font-semibold text-lg">${amount}</span>
          <span className={`text-xs ${statusColor}`}>{status}</span>
        </div>
    </div>
  );
};

export default RecentTransactionCard;
