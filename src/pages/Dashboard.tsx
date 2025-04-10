import { icons } from "../assets/icons";
import Analytics from "../components/Analytics";
import RecentTransactionCard from "../components/RecentTransactionCard";
import SavingPlanCard from "../components/SavingPlanCard";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const transactions = [
    {
      name: "Figma",
      amount: 100,
      transactionDate: "August 20, 2022",
      status: "Completed",
      statusColor: "text-custom-green",
      image: icons.gallery,
    },
    {
      name: "Youtube",
      amount: 120,
      transactionDate: "August 20, 2022",
      status: "Completed",
      statusColor: "text-custom-green",
      image: icons.gallery,
    },
    {
      name: "Spotify",
      amount: 15,
      transactionDate: "August 20, 2022",
      status: "Completed",
      statusColor: "text-custom-green",
      image: icons.gallery,
    },
    {
      name: "Freepik",
      amount: 300,
      transactionDate: "August 20, 2022",
      status: "Completed",
      statusColor: "text-custom-green",
      image: icons.gallery,
    },
  ];

  return (
    <main>
      <div className="dashboard__wrapper grid grid-cols-1 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-y-7 xl:gap-7">

        <div className="bg-white col-span-2 rounded-xl p-4 flex flex-col gap-6">
          <h3 className="font-bold text-xl">Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4.5">
            <StatCard
              title="Your Balance"
              amount={"28,891.14"}
              titleIcon={icons.wallet}
              bgColor="custom-blue"
              trendIcon={icons.arrowAngledGreen}
              trendIconColor="#31D3A3"
              rate={"15"}
              color1="white"
            />
            <StatCard
              title="Saving"
              amount={"1,050.44"}
              titleIcon={icons.save}
              bgColor="white"
              trendIcon={icons.arrowAngledRed}
              trendIconColor="#FE3766"
              rate={"10"}
            />
            <StatCard
              title="Expenses"
              amount={"200.31"}
              titleIcon={icons.directUp}
              bgColor="white"
              trendIcon={icons.arrowAngledYellow}
              trendIconColor="#F9BA33"
              rate={"2"}
            />
            <StatCard
              title="Incomes"
              amount={"21,121.00"}
              titleIcon={icons.directDown}
              bgColor="white"
              trendIcon={icons.arrowAngledBlue}
              trendIconColor="#1775E4"
              rate={"8"}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-xl">Saving Plan</h3>
            <span className="text-custom-blue hover:underline cursor-pointer text-sm sm:text-base">
              See All
            </span>
          </div>
          <hr className="opacity-10" />
          <div className="flex flex-col gap-6">
            <SavingPlanCard
              planName="Bali Vacation"
              savedAmount="1950.21"
              totalAmount="4000"
              targetDate="August 25 2022"
              barColor="#4745A4"
            />
            <SavingPlanCard
              planName="New Gadget"
              savedAmount="790.21"
              totalAmount="1000"
              targetDate="August 25 2022"
              barColor="#F9BA33"
            />
            <SavingPlanCard
              planName="Charity"
              savedAmount="32.11"
              totalAmount="100"
              targetDate="August 25 2022"
              barColor="#3BBB6E"
            />
          </div>
        </div>

        <div className="bg-white col-span-2 rounded-xl p-4">
          <Analytics />
        </div>

        <div className="bg-white rounded-xl p-4 flex flex-col gap-6 justify-between">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-xl">Recent Transaction</h3>
            <span className="text-custom-blue hover:underline cursor-pointer text-sm sm:text-base">
              See All
            </span>
          </div>
          <hr className="opacity-10" />
          {transactions.map((transaction, index) => (
            <RecentTransactionCard
              key={index}
              name={transaction.name}
              amount={transaction.amount}
              transactionDate={transaction.transactionDate}
              status={transaction.status}
              statusColor={transaction.statusColor}
              image={transaction.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
