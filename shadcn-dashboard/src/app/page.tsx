/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import LineBar from "@/components/LineBar";
import DoughnutChart from "@/components/DoughnutChart";

const cardData: CardProps[] = [
  {
    label: "Customers",
    amount: "$45,23",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Orders",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Revenue",
    amount: "+12,23",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Growth",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];


const data = [40, 80, 100, 120];
const labels = ['15-25 years old', '26-35 years old', '36-45 years old',">45 years old"];
const colors = ['#f1b505', '#ffa500', '#dba12c',"white"];
export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
      <CardContent className="w-full grid grid-cols-2 gap-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
         </CardContent>
         <CardContent>
          <section className="flex flex-col w-full items-center">
          <p className="p-4 font-semibold">Overview</p>

<BarChart />
          </section>
        </CardContent>
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        {/* <CardContent>
         

          <BarChart />
        </CardContent> */}
        <LineBar/>
        <CardContent className="flex justify-between gap-4">
          {/* <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section> */}
           <div style={{ width: '60%', margin: '0 auto' }}>
      <h1>Customer Segmentation</h1>
      <DoughnutChart data={data} labels={labels} colors={colors} />
    </div>
          {/* {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))} */}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
