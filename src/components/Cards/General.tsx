"use client";

import { ResponsiveBump } from "@nivo/bump";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { generalChartData } from "@/utils/data";

const MyResponsiveBump = ({ data }) => {
  return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: "spectral" }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -36,
        truncateTickAt: 0,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "ranking",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      margin={{ top: 20, right: 60, bottom: 20, left: 20 }}
      axisRight={null}
    />
  );
};

const General = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>This Week</CardTitle>
        <CardDescription>These are the results of the week</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 h-[350px]">
        <MyResponsiveBump data={generalChartData} />
      </CardContent>
    </Card>
  );
};

export default General;
