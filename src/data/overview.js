/* ============================================================
   OVERVIEW — MODEL RESULTS
   ------------------------------------------------------------
   GENERATED FILE — do not edit by hand.
   Written by backend/cresense/export.py from the trained model.

   Computed from the hybrid ensemble's predictions on the
   held-out test split.
   ============================================================ */

export const DATA_META = {
  "rows": 33000,
  "datasetRows": 220000,
  "trainRows": 154000,
  "testRows": 33000,
  "features": 37,
  "firstDate": "2019-01-01",
  "lastDate": "2020-10-22",
  "days": 100,
  "scoringModel": "Hybrid Ensemble",
  "bestModel": "Random Forest",
  "threshold": 0.5845,
  "trainedAt": "06 Oct 2026, 04:19 UTC",
  "currency": "$"
};

export const overviewKpis = [
  {
    "id": "total-transactions",
    "label": "Total Transactions",
    "value": 33000,
    "format": "count",
    "context": "Scored in the test period"
  },
  {
    "id": "fraud-transactions",
    "label": "Fraud Detected",
    "value": 62,
    "format": "count",
    "context": "60 actual fraud in period",
    "emphasis": true
  },
  {
    "id": "fraud-rate",
    "label": "Fraud Rate",
    "value": 0.182,
    "format": "percent",
    "context": "Of all scored transactions"
  },
  {
    "id": "avg-risk-score",
    "label": "Average Risk Score",
    "value": 35.2,
    "format": "score",
    "context": "Medium Risk band"
  },
  {
    "id": "loss-prevented",
    "label": "Fraud Loss Prevented",
    "value": 37728.44,
    "format": "currency",
    "context": "Value of fraud the model caught",
    "emphasis": true
  },
  {
    "id": "false-positive-rate",
    "label": "False Positive Rate",
    "value": 0.0,
    "format": "percent",
    "context": "Legitimate transactions flagged"
  }
];

export const fraudTrend = [
  {
    "date": "23 Sep",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "24 Sep",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "25 Sep",
    "confirmed": 0,
    "flagged": 1
  },
  {
    "date": "26 Sep",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "27 Sep",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "28 Sep",
    "confirmed": 2,
    "flagged": 2
  },
  {
    "date": "29 Sep",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "30 Sep",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "01 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "02 Oct",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "03 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "04 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "05 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "06 Oct",
    "confirmed": 0,
    "flagged": 1
  },
  {
    "date": "07 Oct",
    "confirmed": 2,
    "flagged": 2
  },
  {
    "date": "08 Oct",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "09 Oct",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "10 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "11 Oct",
    "confirmed": 1,
    "flagged": 2
  },
  {
    "date": "12 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "13 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "14 Oct",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "15 Oct",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "16 Oct",
    "confirmed": 1,
    "flagged": 1
  },
  {
    "date": "17 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "18 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "19 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "20 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "21 Oct",
    "confirmed": 0,
    "flagged": 0
  },
  {
    "date": "22 Oct",
    "confirmed": 0,
    "flagged": 0
  }
];

export const fraudByHour = [
  {
    "hour": "00",
    "cases": 9
  },
  {
    "hour": "01",
    "cases": 5
  },
  {
    "hour": "02",
    "cases": 11
  },
  {
    "hour": "03",
    "cases": 9
  },
  {
    "hour": "04",
    "cases": 0
  },
  {
    "hour": "05",
    "cases": 1
  },
  {
    "hour": "06",
    "cases": 2
  },
  {
    "hour": "07",
    "cases": 0
  },
  {
    "hour": "08",
    "cases": 1
  },
  {
    "hour": "09",
    "cases": 0
  },
  {
    "hour": "10",
    "cases": 0
  },
  {
    "hour": "11",
    "cases": 1
  },
  {
    "hour": "12",
    "cases": 1
  },
  {
    "hour": "13",
    "cases": 0
  },
  {
    "hour": "14",
    "cases": 0
  },
  {
    "hour": "15",
    "cases": 0
  },
  {
    "hour": "16",
    "cases": 0
  },
  {
    "hour": "17",
    "cases": 3
  },
  {
    "hour": "18",
    "cases": 0
  },
  {
    "hour": "19",
    "cases": 0
  },
  {
    "hour": "20",
    "cases": 0
  },
  {
    "hour": "21",
    "cases": 0
  },
  {
    "hour": "22",
    "cases": 5
  },
  {
    "hour": "23",
    "cases": 12
  }
];

export const fraudByMerchant = [
  {
    "merchant": "Predovic Inc",
    "cases": 10,
    "fraudRate": 0.45,
    "riskScore": 9
  },
  {
    "merchant": "Hammes-Hagenes",
    "cases": 8,
    "fraudRate": 0.37,
    "riskScore": 7
  },
  {
    "merchant": "Kozey-Boehm",
    "cases": 7,
    "fraudRate": 0.32,
    "riskScore": 6
  },
  {
    "merchant": "Keeling-Crist",
    "cases": 6,
    "fraudRate": 0.28,
    "riskScore": 6
  },
  {
    "merchant": "Stroman, Hudson and Erdman",
    "cases": 6,
    "fraudRate": 0.28,
    "riskScore": 6
  },
  {
    "merchant": "Kutch, Hermiston and Farrell",
    "cases": 5,
    "fraudRate": 0.22,
    "riskScore": 4
  }
];

export const fraudByLocation = [
  {
    "city": "Boise",
    "cases": 12,
    "fraudRate": 0.27,
    "riskScore": 5
  },
  {
    "city": "Houston",
    "cases": 9,
    "fraudRate": 0.2,
    "riskScore": 4
  },
  {
    "city": "Portland",
    "cases": 9,
    "fraudRate": 0.22,
    "riskScore": 4
  },
  {
    "city": "Seattle",
    "cases": 9,
    "fraudRate": 0.18,
    "riskScore": 4
  },
  {
    "city": "Dallas",
    "cases": 7,
    "fraudRate": 0.19,
    "riskScore": 4
  },
  {
    "city": "Denver",
    "cases": 6,
    "fraudRate": 0.14,
    "riskScore": 3
  }
];
