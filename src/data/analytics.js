/* ============================================================
   ANALYTICS — BUSINESS INTELLIGENCE LAYER
   ------------------------------------------------------------
   GENERATED FILE — do not edit by hand.
   Written by backend/cresense/export.py from the trained model.

   Aggregations over the scored test split. These are the
   measures Power BI will serve in the deployed system.
   ============================================================ */

export const fraudByAmountBand = [
  {
    "band": "< $10",
    "transactions": 880,
    "fraudCases": 0,
    "fraudRate": 0.0
  },
  {
    "band": "$10–50",
    "transactions": 11994,
    "fraudCases": 0,
    "fraudRate": 0.0
  },
  {
    "band": "$50–100",
    "transactions": 9270,
    "fraudCases": 0,
    "fraudRate": 0.0
  },
  {
    "band": "$100–250",
    "transactions": 8276,
    "fraudCases": 7,
    "fraudRate": 0.085
  },
  {
    "band": "$250–500",
    "transactions": 2071,
    "fraudCases": 19,
    "fraudRate": 0.917
  },
  {
    "band": "> $500",
    "transactions": 509,
    "fraudCases": 34,
    "fraudRate": 6.68
  }
];

export const riskDistribution = [
  {
    "bucket": "0–10",
    "count": 0
  },
  {
    "bucket": "11–20",
    "count": 0
  },
  {
    "bucket": "21–30",
    "count": 5799
  },
  {
    "bucket": "31–40",
    "count": 19507
  },
  {
    "bucket": "41–50",
    "count": 6075
  },
  {
    "bucket": "51–60",
    "count": 1363
  },
  {
    "bucket": "61–70",
    "count": 194
  },
  {
    "bucket": "71–80",
    "count": 13
  },
  {
    "bucket": "81–90",
    "count": 49
  },
  {
    "bucket": "91–100",
    "count": 0
  }
];

export const fraudByChannel = [
  {
    "channel": "Misc (online)",
    "cases": 12,
    "share": 25.0
  },
  {
    "channel": "Grocery (online)",
    "cases": 10,
    "share": 20.8
  },
  {
    "channel": "Grocery (in person)",
    "cases": 8,
    "share": 16.7
  },
  {
    "channel": "Shopping (online)",
    "cases": 8,
    "share": 16.7
  },
  {
    "channel": "Gas transport",
    "cases": 7,
    "share": 14.6
  },
  {
    "channel": "Home",
    "cases": 3,
    "share": 6.2
  }
];

export const fraudHeatmap = [
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 0,
    "cases": 1
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 1,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 2,
    "cases": 1
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 3,
    "cases": 3
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 4,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 5,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 6,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 7,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 8,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 9,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 10,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 11,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 12,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 13,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 14,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 15,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 16,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 17,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 18,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 19,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 20,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 21,
    "cases": 0
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 22,
    "cases": 2
  },
  {
    "day": "Mon",
    "dayIndex": 0,
    "hour": 23,
    "cases": 1
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 0,
    "cases": 1
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 1,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 2,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 3,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 4,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 5,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 6,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 7,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 8,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 9,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 10,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 11,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 12,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 13,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 14,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 15,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 16,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 17,
    "cases": 1
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 18,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 19,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 20,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 21,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 22,
    "cases": 0
  },
  {
    "day": "Tue",
    "dayIndex": 1,
    "hour": 23,
    "cases": 2
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 0,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 1,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 2,
    "cases": 2
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 3,
    "cases": 2
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 4,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 5,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 6,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 7,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 8,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 9,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 10,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 11,
    "cases": 1
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 12,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 13,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 14,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 15,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 16,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 17,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 18,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 19,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 20,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 21,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 22,
    "cases": 0
  },
  {
    "day": "Wed",
    "dayIndex": 2,
    "hour": 23,
    "cases": 1
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 0,
    "cases": 2
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 1,
    "cases": 2
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 2,
    "cases": 2
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 3,
    "cases": 1
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 4,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 5,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 6,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 7,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 8,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 9,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 10,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 11,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 12,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 13,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 14,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 15,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 16,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 17,
    "cases": 1
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 18,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 19,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 20,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 21,
    "cases": 0
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 22,
    "cases": 2
  },
  {
    "day": "Thu",
    "dayIndex": 3,
    "hour": 23,
    "cases": 4
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 0,
    "cases": 3
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 1,
    "cases": 1
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 2,
    "cases": 1
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 3,
    "cases": 1
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 4,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 5,
    "cases": 1
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 6,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 7,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 8,
    "cases": 1
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 9,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 10,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 11,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 12,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 13,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 14,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 15,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 16,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 17,
    "cases": 1
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 18,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 19,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 20,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 21,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 22,
    "cases": 0
  },
  {
    "day": "Fri",
    "dayIndex": 4,
    "hour": 23,
    "cases": 2
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 0,
    "cases": 2
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 1,
    "cases": 2
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 2,
    "cases": 3
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 3,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 4,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 5,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 6,
    "cases": 1
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 7,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 8,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 9,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 10,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 11,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 12,
    "cases": 1
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 13,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 14,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 15,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 16,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 17,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 18,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 19,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 20,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 21,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 22,
    "cases": 0
  },
  {
    "day": "Sat",
    "dayIndex": 5,
    "hour": 23,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 0,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 1,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 2,
    "cases": 2
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 3,
    "cases": 2
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 4,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 5,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 6,
    "cases": 1
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 7,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 8,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 9,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 10,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 11,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 12,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 13,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 14,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 15,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 16,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 17,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 18,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 19,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 20,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 21,
    "cases": 0
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 22,
    "cases": 1
  },
  {
    "day": "Sun",
    "dayIndex": 6,
    "hour": 23,
    "cases": 2
  }
];

export const HEATMAP_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const dateRangeOptions = [
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Full test period",
];

export const riskLevelOptions = ["All", "High Risk", "Medium Risk", "Low Risk"];
