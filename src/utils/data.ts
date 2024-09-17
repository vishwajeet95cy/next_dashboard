import { ReactElement } from "react";

export type Notification = {
  text: string;
  date: string;
  read: boolean;
};

export const notificationData: Notification[] = [
  {
    text: "This is a notification",
    date: "02-01-2005",
    read: true,
  },
  {
    text: "This is another notification",
    date: "02-01-2005",
    read: false,
  },
];

export type Menu = {
  group: string;
  options: MenuOptions[];
};

export type MenuOptions = {
  link: string;
  icon: ReactElement;
  text: string;
};

export type Member = {
  email: string;
  full_name: string;
  backgroundColor: string;
  role: string;
  status?: string;
};

export const memberData: Member[] = [
  {
    email: "vishwa@gmail.com",
    full_name: "Vishwa",
    backgroundColor: "rgba(125,24,66,1)",
    role: "admin",
  },
  {
    email: "vishal@gmail.com",
    full_name: "vishal",
    backgroundColor: "rgba(125,24,66,1)",
    role: "viewer",
  },
  {
    email: "sameer@gmail.com",
    full_name: "sameer",
    backgroundColor: "rgba(125,24,66,1)",
    role: "admin",
  },
  {
    email: "john@gmail.com",
    full_name: "john",
    backgroundColor: "rgba(125,24,66,1)",
    role: "viewer",
    status: "pending",
  },
];

export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export const lineChartData = [
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

export const generalChartData = [
  {
    id: "Serie 1",
    data: [
      {
        x: "2000",
        y: 2,
      },
      {
        x: "2001",
        y: 12,
      },
      {
        x: "2002",
        y: 9,
      },
      {
        x: "2003",
        y: 8,
      },
      {
        x: "2004",
        y: 6,
      },
    ],
  },
  {
    id: "Serie 2",
    data: [
      {
        x: "2000",
        y: 3,
      },
      {
        x: "2001",
        y: 6,
      },
      {
        x: "2002",
        y: 10,
      },
      {
        x: "2003",
        y: 11,
      },
      {
        x: "2004",
        y: 1,
      },
    ],
  },
  {
    id: "Serie 3",
    data: [
      {
        x: "2000",
        y: 4,
      },
      {
        x: "2001",
        y: 9,
      },
      {
        x: "2002",
        y: 4,
      },
      {
        x: "2003",
        y: 2,
      },
      {
        x: "2004",
        y: 4,
      },
    ],
  },
  {
    id: "Serie 4",
    data: [
      {
        x: "2000",
        y: 10,
      },
      {
        x: "2001",
        y: 4,
      },
      {
        x: "2002",
        y: 2,
      },
      {
        x: "2003",
        y: 4,
      },
      {
        x: "2004",
        y: 10,
      },
    ],
  },
  {
    id: "Serie 5",
    data: [
      {
        x: "2000",
        y: 1,
      },
      {
        x: "2001",
        y: 11,
      },
      {
        x: "2002",
        y: 8,
      },
      {
        x: "2003",
        y: 1,
      },
      {
        x: "2004",
        y: 7,
      },
    ],
  },
  {
    id: "Serie 6",
    data: [
      {
        x: "2000",
        y: 6,
      },
      {
        x: "2001",
        y: 7,
      },
      {
        x: "2002",
        y: 7,
      },
      {
        x: "2003",
        y: 7,
      },
      {
        x: "2004",
        y: 8,
      },
    ],
  },
  {
    id: "Serie 7",
    data: [
      {
        x: "2000",
        y: 5,
      },
      {
        x: "2001",
        y: 1,
      },
      {
        x: "2002",
        y: 12,
      },
      {
        x: "2003",
        y: 3,
      },
      {
        x: "2004",
        y: 9,
      },
    ],
  },
  {
    id: "Serie 8",
    data: [
      {
        x: "2000",
        y: 11,
      },
      {
        x: "2001",
        y: 10,
      },
      {
        x: "2002",
        y: 6,
      },
      {
        x: "2003",
        y: 6,
      },
      {
        x: "2004",
        y: 5,
      },
    ],
  },
  {
    id: "Serie 9",
    data: [
      {
        x: "2000",
        y: 12,
      },
      {
        x: "2001",
        y: 2,
      },
      {
        x: "2002",
        y: 1,
      },
      {
        x: "2003",
        y: 10,
      },
      {
        x: "2004",
        y: 11,
      },
    ],
  },
  {
    id: "Serie 10",
    data: [
      {
        x: "2000",
        y: 8,
      },
      {
        x: "2001",
        y: 5,
      },
      {
        x: "2002",
        y: 5,
      },
      {
        x: "2003",
        y: 12,
      },
      {
        x: "2004",
        y: 12,
      },
    ],
  },
  {
    id: "Serie 11",
    data: [
      {
        x: "2000",
        y: 7,
      },
      {
        x: "2001",
        y: 8,
      },
      {
        x: "2002",
        y: 3,
      },
      {
        x: "2003",
        y: 5,
      },
      {
        x: "2004",
        y: 3,
      },
    ],
  },
  {
    id: "Serie 12",
    data: [
      {
        x: "2000",
        y: 9,
      },
      {
        x: "2001",
        y: 3,
      },
      {
        x: "2002",
        y: 11,
      },
      {
        x: "2003",
        y: 9,
      },
      {
        x: "2004",
        y: 2,
      },
    ],
  },
];
