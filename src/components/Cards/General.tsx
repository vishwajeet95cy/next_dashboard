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

// Simple data type that matches our actual data structure
interface MyBumpData {
  id: string;
  data: Array<{
    x: string;
    y: number;
  }>;
}

interface MyResponsiveBumpProps {
  data: MyBumpData[];
}

// Types for tooltip components
interface TooltipSerie {
  id: string;
}

interface TooltipPoint {
  serie: TooltipSerie;
  data: {
    x: string;
    y: number;
  };
}

const MyResponsiveBump = ({ data }: MyResponsiveBumpProps) => {
  // Create a properly typed ResponsiveBump component
  const ResponsiveBumpComponent = ResponsiveBump as unknown as React.ComponentType<{
    data: MyBumpData[];
    [key: string]: unknown;
  }>;

  return (
    <ResponsiveBumpComponent
      data={data}
      colors={{ scheme: "spectral" }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      opacity={1}
      activeOpacity={1}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      inactivePointBorderWidth={0}
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
      useMesh={true}
      interpolation="smooth"
      xPadding={0.4}
      xOuterPadding={0.5}
      yOuterPadding={0.5}
      startLabel={false}
      startLabelPadding={16}
      startLabelTextColor={{ from: "serie.color" }}
      endLabel={false}
      endLabelPadding={16}
      endLabelTextColor={{ from: "serie.color" }}
      enableGridX={true}
      enableGridY={true}
      isInteractive={true}
      defaultActiveSerieIds={[]}
      role="img"
      renderWrapper={true}
      debugMesh={false}
      theme={{}}
      lineTooltip={({ serie }: { serie: TooltipSerie }) => (
        <div style={{ background: 'white', padding: '12px', border: '1px solid #ccc' }}>
          {serie.id}
        </div>
      )}
      pointTooltip={({ point }: { point: TooltipPoint }) => (
        <div style={{ background: 'white', padding: '12px', border: '1px solid #ccc' }}>
          {point.serie.id}: {point.data.y}
        </div>
      )}
      layers={['grid', 'axes', 'labels', 'lines', 'points', 'mesh']}
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
