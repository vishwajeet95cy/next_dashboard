"use client";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
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
const MyResponsiveLine = ({ data /* see data tab */ }) => (
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
  const data = [
    {
      id: "japan",
      color: "hsl(230, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 256,
        },
        {
          x: "helicopter",
          y: 113,
        },
        {
          x: "boat",
          y: 292,
        },
        {
          x: "train",
          y: 153,
        },
        {
          x: "subway",
          y: 24,
        },
        {
          x: "bus",
          y: 108,
        },
        {
          x: "car",
          y: 227,
        },
        {
          x: "moto",
          y: 12,
        },
        {
          x: "bicycle",
          y: 132,
        },
        {
          x: "horse",
          y: 13,
        },
        {
          x: "skateboard",
          y: 2,
        },
        {
          x: "others",
          y: 197,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(42, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 238,
        },
        {
          x: "helicopter",
          y: 43,
        },
        {
          x: "boat",
          y: 73,
        },
        {
          x: "train",
          y: 95,
        },
        {
          x: "subway",
          y: 167,
        },
        {
          x: "bus",
          y: 181,
        },
        {
          x: "car",
          y: 231,
        },
        {
          x: "moto",
          y: 272,
        },
        {
          x: "bicycle",
          y: 109,
        },
        {
          x: "horse",
          y: 139,
        },
        {
          x: "skateboard",
          y: 167,
        },
        {
          x: "others",
          y: 228,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(268, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 77,
        },
        {
          x: "helicopter",
          y: 126,
        },
        {
          x: "boat",
          y: 77,
        },
        {
          x: "train",
          y: 187,
        },
        {
          x: "subway",
          y: 234,
        },
        {
          x: "bus",
          y: 202,
        },
        {
          x: "car",
          y: 130,
        },
        {
          x: "moto",
          y: 162,
        },
        {
          x: "bicycle",
          y: 128,
        },
        {
          x: "horse",
          y: 181,
        },
        {
          x: "skateboard",
          y: 13,
        },
        {
          x: "others",
          y: 131,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(290, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 236,
        },
        {
          x: "helicopter",
          y: 177,
        },
        {
          x: "boat",
          y: 266,
        },
        {
          x: "train",
          y: 275,
        },
        {
          x: "subway",
          y: 88,
        },
        {
          x: "bus",
          y: 284,
        },
        {
          x: "car",
          y: 26,
        },
        {
          x: "moto",
          y: 264,
        },
        {
          x: "bicycle",
          y: 300,
        },
        {
          x: "horse",
          y: 64,
        },
        {
          x: "skateboard",
          y: 275,
        },
        {
          x: "others",
          y: 138,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(36, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 148,
        },
        {
          x: "helicopter",
          y: 163,
        },
        {
          x: "boat",
          y: 236,
        },
        {
          x: "train",
          y: 287,
        },
        {
          x: "subway",
          y: 52,
        },
        {
          x: "bus",
          y: 280,
        },
        {
          x: "car",
          y: 232,
        },
        {
          x: "moto",
          y: 217,
        },
        {
          x: "bicycle",
          y: 181,
        },
        {
          x: "horse",
          y: 160,
        },
        {
          x: "skateboard",
          y: 101,
        },
        {
          x: "others",
          y: 249,
        },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the stats of the year</CardDescription>
      </CardHeader>
      <CardContent className="h-[264px] flex items-center w-full">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
};

export default Lines;
