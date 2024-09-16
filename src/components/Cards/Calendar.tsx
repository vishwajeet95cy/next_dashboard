"use client";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveTimeRange } from "@nivo/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = ({ data }) => (
  <ResponsiveTimeRange
    data={data}
    from="2023-01-01"
    to="2023-12-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
  />
);

function generateDataArray(
  year: number,
  numberOfObjects: number,
  minValue: number,
  maxValue: number
) {
  const dataArray = [];

  for (let i = 1; i <= numberOfObjects; i++) {
    const randomValue =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    dataArray.push({ value: randomValue, day: date });
  }
  return dataArray;
}

const Calendar = () => {
  const data = generateDataArray(2023, 20, 20, 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the numbers of the year</CardDescription>
      </CardHeader>
      <CardContent className="h-[100px] flex items-center w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
};

export default Calendar;
