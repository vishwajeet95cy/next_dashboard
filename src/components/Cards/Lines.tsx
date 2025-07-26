"use client";

import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { lineChartData } from "@/utils/data";

export type MyResponsiveLine = {
  id: string;
  color: string;
  data: {
    x: string;
    y: number;
  }[];
}[];

const MyResponsiveLine = ({ data }: { data: MyResponsiveLine }) => (
  <ResponsiveLine
    data={data}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
  />
);

const Lines = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the stats of the year</CardDescription>
      </CardHeader>
      <CardContent className="h-[264px] flex items-center w-full">
        <MyResponsiveLine data={lineChartData} />
      </CardContent>
    </Card>
  );
};

export default Lines;
