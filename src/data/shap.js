/* ============================================================
   SHAP EXPLAINABILITY — COMPUTED VALUES
   ------------------------------------------------------------
   GENERATED FILE — do not edit by hand.
   Written by backend/cresense/export.py from the trained model.

   Exact SHAP values from the trained XGBoost component,
   computed with TreeExplainer. Values are in log-odds and sum
   to the gap between this prediction and the base value.
   ============================================================ */

export const SHAP_BASE_VALUE = 0.783;

export const globalImportance = [
  {
    "feature": "distance_km",
    "label": "Distance to Merchant",
    "family": "Geo-location",
    "importance": 7.2933
  },
  {
    "feature": "amount_vs_card_mean",
    "label": "Amount vs Card Average",
    "family": "Behavioural",
    "importance": 4.6359
  },
  {
    "feature": "category",
    "label": "Merchant Category",
    "family": "Merchant",
    "importance": 1.0468
  },
  {
    "feature": "is_night",
    "label": "Late-night Transaction",
    "family": "Time-based",
    "importance": 0.6997
  },
  {
    "feature": "hour",
    "label": "Hour of Day",
    "family": "Time-based",
    "importance": 0.5423
  },
  {
    "feature": "merchant_fraud_rate",
    "label": "Merchant Risk",
    "family": "Merchant",
    "importance": 0.4939
  },
  {
    "feature": "hours_since_last_txn",
    "label": "Time Since Last Transaction",
    "family": "Behavioural",
    "importance": 0.4826
  },
  {
    "feature": "state",
    "label": "State",
    "family": "Geo-location",
    "importance": 0.4735
  },
  {
    "feature": "age_years",
    "label": "Cardholder Age",
    "family": "Behavioural",
    "importance": 0.4584
  },
  {
    "feature": "city_pop_log",
    "label": "City Population",
    "family": "Geo-location",
    "importance": 0.374
  },
  {
    "feature": "amount_vs_category_mean",
    "label": "Amount vs Category Average",
    "family": "Behavioural",
    "importance": 0.3672
  },
  {
    "feature": "amount",
    "label": "Transaction Amount",
    "family": "Transaction",
    "importance": 0.2266
  }
];

const contributionsByTransaction = {
  "d17e9253f12260c7f8369ebbac81d2b3": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.6636,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6587,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.7581,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7028,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.539,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4066,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2297,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.169,
      "direction": "legitimate"
    }
  ],
  "75373a88d690b50b701fd618a4efb541": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.378,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.4632,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.7844,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.669,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6316,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6244,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5568,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.4823,
      "direction": "legitimate"
    }
  ],
  "a6998c2021191fdb2902f255711381ef": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.629,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.0198,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9336,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7491,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.526,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.3596,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.1891,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.1499,
      "direction": "legitimate"
    }
  ],
  "e3d15e5451ef3058545413cad35576d8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.3481,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.1205,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9494,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5895,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4602,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.4344,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.3232,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": 0.2226,
      "direction": "fraud"
    }
  ],
  "6775eeea8b959acaae2d3827872c84b0": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.9143,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.1847,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6295,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4933,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4359,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.301,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.19,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.1848,
      "direction": "fraud"
    }
  ],
  "98949de99a78fbbecf66ffd0e9023406": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.2326,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.5648,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.2008,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5598,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4987,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.4038,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3896,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.2319,
      "direction": "legitimate"
    }
  ],
  "a2444b3f0305eb2f5409141c94e42e39": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.7286,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.0869,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.2421,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.644,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4041,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.236,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2224,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.1168,
      "direction": "legitimate"
    }
  ],
  "1f3923c2f1f4cf20e6b3a24f57ba1924": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.7721,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.8351,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.0454,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6572,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4742,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.3654,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2869,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.2685,
      "direction": "legitimate"
    }
  ],
  "ff88cb01489c06d177a34751bebd98f4": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.7465,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.8676,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.9488,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.7315,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6622,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6215,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3102,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.2917,
      "direction": "legitimate"
    }
  ],
  "a927f83f0cd1a32de8a34637b19669b6": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.6479,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.1115,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8595,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7366,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.524,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4868,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3142,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.2967,
      "direction": "legitimate"
    }
  ],
  "91c977a0b6ba16ee9791e74ce0fef6b2": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.559,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.2448,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1642,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.808,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.579,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5294,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5264,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.4111,
      "direction": "fraud"
    }
  ],
  "da54211d4f48655b81a138fa9bd1d7a8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.4924,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.9038,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5856,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2152,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9475,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.74,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5963,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5133,
      "direction": "fraud"
    }
  ],
  "9a7c386ae517b5cef539bad158423e43": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.4386,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6495,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0273,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6278,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.593,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.3793,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3719,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2836,
      "direction": "fraud"
    }
  ],
  "57fd160439eed5ba1019c8c86d861a14": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.5207,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.1108,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7768,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.605,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5295,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4941,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4082,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.2517,
      "direction": "legitimate"
    }
  ],
  "e1828733c8728612679a141c41916c43": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.4317,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.2653,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5525,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.473,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2787,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.7275,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4256,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3091,
      "direction": "legitimate"
    }
  ],
  "ca099db61884f299f021af00e801de5a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.027,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.0834,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.8046,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2073,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.9429,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5627,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4251,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3077,
      "direction": "fraud"
    }
  ],
  "eaed3742c9b03a589ef4674cc473e476": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.0645,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.541,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -2.0219,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.6771,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6542,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.7864,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4419,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3282,
      "direction": "fraud"
    }
  ],
  "94372127a3fa822b9ee0be1d4205673a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.6317,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.0768,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.2628,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7008,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5188,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.3936,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3194,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2994,
      "direction": "legitimate"
    }
  ],
  "3de6ce84505dc58aaead5160f9fc70d4": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.7186,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.5197,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6161,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.2692,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.8783,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7619,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6828,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6372,
      "direction": "fraud"
    }
  ],
  "799fb52604c2f3da2fe644ba1a67c160": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.7043,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6263,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.4574,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.2484,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.9366,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7043,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6136,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5978,
      "direction": "fraud"
    }
  ],
  "1939b039f9deca93d19fd6e5f24791b6": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.3805,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.9078,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.6316,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.7009,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.4028,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3523,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3104,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.2982,
      "direction": "legitimate"
    }
  ],
  "f8d02a84290eddad7fbd373bbd1ef48a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.3749,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6788,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1361,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8869,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.756,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4177,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2182,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.199,
      "direction": "legitimate"
    }
  ],
  "dc8b54bbe10888e78da3e54319ddf452": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.4654,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.2731,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.9975,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.6017,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3885,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.3321,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7652,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5617,
      "direction": "fraud"
    }
  ],
  "db5e86cb540d9c3d3e6417a92445e03c": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.8549,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.4465,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6306,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.614,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4793,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4788,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3835,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3256,
      "direction": "legitimate"
    }
  ],
  "8dd8339b950b3769922c7589fffc53d3": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.4717,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9744,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.8868,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.886,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.8247,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7874,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6635,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.6376,
      "direction": "fraud"
    }
  ],
  "1d18f7ec83e337900259a30b5dc84d5c": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.5258,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.3105,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5029,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7019,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4289,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.2951,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2298,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.2109,
      "direction": "legitimate"
    }
  ],
  "34bffd3c0e49caa517bf9fb28addd4d0": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.6379,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.2676,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2752,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7318,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5839,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.5794,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5416,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.5115,
      "direction": "fraud"
    }
  ],
  "716b14ab290a0fa31c4088e3f47f8b35": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.5247,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.9114,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1798,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9214,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7155,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6842,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.635,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.4602,
      "direction": "fraud"
    }
  ],
  "39bbdad1fe16d8d05c8a4c52ec1abb00": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.2424,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.9453,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1342,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7061,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.6692,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.657,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4837,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.3883,
      "direction": "fraud"
    }
  ],
  "7f7d2b5f184c547b0569bb9b28ad76b0": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.4683,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.2488,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.554,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6842,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.4745,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3023,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.2697,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": 0.2666,
      "direction": "fraud"
    }
  ],
  "464580d7f492db149d9c382891611d38": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.8648,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.4843,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.4703,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.96,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.9428,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7241,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.6477,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4131,
      "direction": "fraud"
    }
  ],
  "e58e656b95c8f9789e066a1a6ec919a0": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.3898,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.5787,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.503,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6788,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6637,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5673,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5368,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4632,
      "direction": "fraud"
    }
  ],
  "04a2c27b1f007d029754e8741b5e0d0a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.4861,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.9452,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.7145,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.3576,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.9639,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.9537,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8868,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7724,
      "direction": "fraud"
    }
  ],
  "e0b135618ed04c24857b1f649f9f982e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.4134,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.9272,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.1889,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7864,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6835,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.4972,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.3067,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.1543,
      "direction": "legitimate"
    }
  ],
  "23956f5c1df5477cb24df14ea37f877f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.2321,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.9431,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -2.186,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.6236,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4247,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.2595,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.758,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.729,
      "direction": "legitimate"
    }
  ],
  "2a42c293458dcc5f84184bf9eca2df93": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.4587,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.5761,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.353,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7027,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6067,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5993,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4735,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.363,
      "direction": "fraud"
    }
  ],
  "4cd44afcbded6ba16e795b75484d4869": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.1215,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.656,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9212,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6462,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4099,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3877,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3555,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1869,
      "direction": "legitimate"
    }
  ],
  "1c8f360d305b5d3450dafef3e1ac17d8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.0388,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.1444,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.6136,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.8705,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7911,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7533,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.6794,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4615,
      "direction": "fraud"
    }
  ],
  "900ac4f57db811b516af5b827ed1ca27": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.3949,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.8103,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5676,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6494,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6248,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6173,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5013,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4885,
      "direction": "fraud"
    }
  ],
  "503d5f7ffe6f3b6b81a035e93f74f934": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.5359,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6974,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6143,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4525,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.3806,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3556,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.2831,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.1842,
      "direction": "fraud"
    }
  ],
  "332a2c92f5f5f7621ef323063933c18f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.344,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.3873,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.498,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1244,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.9459,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6379,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.2752,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.1715,
      "direction": "legitimate"
    }
  ],
  "df3897ece95ee94a671a623c5cc6f2f1": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.7803,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.699,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6587,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7728,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7725,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5727,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.1784,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.1638,
      "direction": "legitimate"
    }
  ],
  "02193844a789a2b88339388136bea063": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.7759,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.9275,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1713,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6642,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5943,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.5405,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4288,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.308,
      "direction": "fraud"
    }
  ],
  "13986166b099b431ad3abf07d3b96184": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.3047,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.2544,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.6664,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.3586,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.8001,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6137,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.577,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4946,
      "direction": "legitimate"
    }
  ],
  "75ed527031dace927ab61f98b039283a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.3873,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.27,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.887,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8259,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4798,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.188,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.1544,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.1239,
      "direction": "legitimate"
    }
  ],
  "811fcc319148b85182fe811ba5fa6508": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.2266,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.6022,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4947,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -1.1206,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 1.087,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5356,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4575,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.429,
      "direction": "fraud"
    }
  ],
  "f4d912405041b9808f8497aaf180a8b2": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.2684,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.4398,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 1.0208,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.8991,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.7833,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.7255,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.6276,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6233,
      "direction": "fraud"
    }
  ],
  "3bc5134daf332943ae229a97b27b0919": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.4151,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6125,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1859,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6852,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6559,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.417,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4111,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.3144,
      "direction": "fraud"
    }
  ],
  "a77d1824b2992d002fd909384f1a17d8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.9497,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.4942,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7339,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4524,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4503,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4438,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4261,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4208,
      "direction": "fraud"
    }
  ],
  "0c800034838008ba4ed5ae8142e320b6": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.0111,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.2787,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2177,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7514,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5899,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.55,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4125,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3777,
      "direction": "legitimate"
    }
  ],
  "c284ad6e0b2bde1bc63b923e374c40fd": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.003,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6034,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -2.1452,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4456,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.328,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.3155,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.7784,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7066,
      "direction": "legitimate"
    }
  ],
  "65083b7138ada9eef69dacf794139257": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.996,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.2709,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.6991,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.3334,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.8845,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6199,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4263,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3502,
      "direction": "fraud"
    }
  ],
  "0e3ac2bc0c275c3a84cea37ebfba96a2": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.3433,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.4397,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6961,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0732,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6895,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": 0.4271,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4105,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.31,
      "direction": "fraud"
    }
  ],
  "e3fc9d305cf325569c4fa4687dadc43e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.6792,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.9257,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.748,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.5743,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4499,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3933,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3786,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.2488,
      "direction": "legitimate"
    }
  ],
  "e188f8b94c9bcedde75570bbf0590b67": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.8408,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.9984,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.9841,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.7667,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.591,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.5079,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4807,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4341,
      "direction": "fraud"
    }
  ],
  "a0a3d70f1cdc511c9577d420bd775e29": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.3683,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.6054,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.8504,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7404,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6991,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.6807,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.4498,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.41,
      "direction": "fraud"
    }
  ],
  "4865a1b8675dc6aef3608ecef9687480": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.0225,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.571,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3149,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.314,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7661,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7642,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6431,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6038,
      "direction": "fraud"
    }
  ],
  "3f765e19a842231b3b31c5ca850da3a4": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 8.9388,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.661,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.7811,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7462,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.703,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4539,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.2974,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.273,
      "direction": "fraud"
    }
  ],
  "1416aed315fda4e6fca0f8ef2af72346": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.2494,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -2.2171,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.7641,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4285,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.4073,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -1.0618,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7906,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4606,
      "direction": "legitimate"
    }
  ],
  "fc94bdd7e9bcfefbee43ee92ef70e58d": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 7.3277,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.9146,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5844,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.5816,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3975,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -1.0522,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.726,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.434,
      "direction": "fraud"
    }
  ],
  "e8efcd1f16e106fcbaf8a3f44def5499": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.8207,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.8971,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7729,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6246,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5691,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4667,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4591,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.4393,
      "direction": "legitimate"
    }
  ],
  "1f104df3f00c7729f674d194ad89d1b1": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.175,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 6.251,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.811,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1671,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.9385,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6754,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5433,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5175,
      "direction": "fraud"
    }
  ],
  "b516c59b394063640e3163369ac2db74": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3627,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.444,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.587,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5072,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3027,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1884,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9549,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6836,
      "direction": "legitimate"
    }
  ],
  "a61e114800c8dbc14116688f89e82a1e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6472,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4251,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.1927,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8859,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5943,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.5154,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4274,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4073,
      "direction": "fraud"
    }
  ],
  "2274315ff9abc1316f38de88e6500bea": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.593,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.4162,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0044,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9444,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6857,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5427,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.5183,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4386,
      "direction": "legitimate"
    }
  ],
  "1bbb32f2196d913647e441ebf655adcb": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7101,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.5334,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.4725,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.1643,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.1605,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5058,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4364,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3408,
      "direction": "legitimate"
    }
  ],
  "b93611a6d1c7e959eb476f6804e87d60": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.0485,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.9654,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.5657,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.4307,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8433,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5772,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4406,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.3566,
      "direction": "legitimate"
    }
  ],
  "b475ed93b2bf54f0cc274abe08cc3a26": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.1869,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.9804,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2321,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9725,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7622,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5905,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4688,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4166,
      "direction": "legitimate"
    }
  ],
  "91683213a5dacb650383d576f8a5c253": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7005,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1586,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4396,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.4098,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4077,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.406,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3926,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3689,
      "direction": "legitimate"
    }
  ],
  "6b93fc5478112576ff3d5956c46b0311": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.6497,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.2195,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.3138,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8948,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7068,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.5648,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5309,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.4769,
      "direction": "legitimate"
    }
  ],
  "163dd8c36bd658f5aa45ab3865e4ac52": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.9164,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.2326,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.7135,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.6125,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9498,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4837,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3764,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.3629,
      "direction": "fraud"
    }
  ],
  "ae330135ccbb40d43f95f8cbec4b21c7": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.401,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.5281,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.9231,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.8883,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7524,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5728,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5558,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5433,
      "direction": "fraud"
    }
  ],
  "bb7b0e04ada2a936a62508470d8b02d3": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.2788,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.4544,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0664,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.988,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7382,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6916,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.6707,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6141,
      "direction": "legitimate"
    }
  ],
  "01dd063060184d7f21f66680799de4bb": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.7336,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.0593,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.8701,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0259,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.861,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8116,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6488,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5378,
      "direction": "legitimate"
    }
  ],
  "a725a42e276d77408b74af932009c2d5": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.4298,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.7071,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.9727,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0508,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6185,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6011,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3686,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.2894,
      "direction": "legitimate"
    }
  ],
  "d67b804f7e47cd0eaac547533a85b4be": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7789,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.5726,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.3934,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9525,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7662,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.667,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5173,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4738,
      "direction": "fraud"
    }
  ],
  "41469c5710334a2d32630aa69b8802ee": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.0518,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 6.4561,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0867,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 1.0739,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7199,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.585,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4618,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4607,
      "direction": "legitimate"
    }
  ],
  "a458568f0cef0d88fad680494e844366": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.0612,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.694,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5903,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.5084,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.292,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0689,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8781,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.734,
      "direction": "fraud"
    }
  ],
  "11cda73197bc70cd1e9214070da09753": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2552,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.592,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.9912,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.5624,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.9215,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9172,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7951,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6967,
      "direction": "legitimate"
    }
  ],
  "f66b429ebd3674a33ffc0f4b67936149": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.1958,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.5691,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4415,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5481,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3769,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3498,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3313,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.321,
      "direction": "legitimate"
    }
  ],
  "fd776a3efee6002e5f55c90c91754405": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.112,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 6.4929,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8914,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5557,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5314,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4513,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.416,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4103,
      "direction": "fraud"
    }
  ],
  "340018639f7b667190b19a95128868d9": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.4659,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4067,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.619,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5831,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.4767,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4493,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4443,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4027,
      "direction": "legitimate"
    }
  ],
  "8c654c0d206f3e8cd4224265dc9e8a89": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.5449,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.9189,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.5356,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -1.1732,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8247,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4217,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": 0.3921,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3031,
      "direction": "fraud"
    }
  ],
  "2bb77073cbba019a7326c6036b882df7": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.7966,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.0021,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2482,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0768,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8903,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.7136,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7033,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.5296,
      "direction": "fraud"
    }
  ],
  "1631bd96732bfb6c94920ac194a263a0": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5041,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.1221,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.9526,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.6804,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5636,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.9054,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8975,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7412,
      "direction": "legitimate"
    }
  ],
  "ca1391c21b7cea2bccdee2d4781c46d0": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6858,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.4125,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.8855,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4293,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.7331,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5217,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4226,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3766,
      "direction": "legitimate"
    }
  ],
  "5d398e1833a43d776b4db23eff43147c": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6315,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.6307,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.6801,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2849,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.019,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0105,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5216,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.5053,
      "direction": "legitimate"
    }
  ],
  "562e3e86623b9c562e347824d617785c": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3004,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0172,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9965,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.8991,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8408,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4564,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2519,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2254,
      "direction": "fraud"
    }
  ],
  "b381c84c24a8d2788f6429a6c933eebb": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.3935,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.7073,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.1475,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8474,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8393,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.503,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5024,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.4258,
      "direction": "legitimate"
    }
  ],
  "622a58d890002666d798166765e9602f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.5188,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.6856,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6839,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5791,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4522,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4084,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.2642,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.262,
      "direction": "legitimate"
    }
  ],
  "67bfbc0558f4d64c9940cfe574d8143d": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.1294,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3372,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6058,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5107,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4184,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3327,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3129,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3042,
      "direction": "fraud"
    }
  ],
  "17445679548584cf3e0cb182651a6017": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.4181,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.4527,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.9991,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.5308,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.513,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9338,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.828,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7749,
      "direction": "legitimate"
    }
  ],
  "940319cd238bc6f63cfaa976637650ed": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.1556,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.2811,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3715,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.2332,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.8466,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7753,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.7071,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4648,
      "direction": "fraud"
    }
  ],
  "04681d00ff084baf3102ccc37443ecb1": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3871,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.5826,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2683,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9829,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4392,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4165,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3909,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3839,
      "direction": "fraud"
    }
  ],
  "ab1254d72170ebaf80b0335336cf77b6": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2985,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.1417,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.734,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.7033,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.22,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.1781,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.777,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6939,
      "direction": "legitimate"
    }
  ],
  "29a7f0465010c4b7bd3171cca524c7b7": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.1446,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4031,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5387,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5095,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4767,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4199,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4133,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3768,
      "direction": "fraud"
    }
  ],
  "154d64d6ff326b06f19c4c9379cd4250": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6398,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8033,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5804,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.4959,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.391,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3733,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3095,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2958,
      "direction": "legitimate"
    }
  ],
  "b8e7b3a3d7c60df3f19dae522e05ba65": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5663,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.6956,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4361,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.3354,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.1194,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.896,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.438,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3536,
      "direction": "fraud"
    }
  ],
  "a0414f32154c4032e31916462574a549": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.8481,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.5687,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.6731,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8535,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.774,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.7226,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6026,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4145,
      "direction": "legitimate"
    }
  ],
  "a70acc899efa32330946131e8424b7de": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.0134,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.3559,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.8726,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0206,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.6216,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4881,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.4868,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3915,
      "direction": "legitimate"
    }
  ],
  "f5e384932586875bb5ca5f9ef75e3af8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5738,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.5301,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.1451,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0403,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.9315,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7838,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6336,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5013,
      "direction": "fraud"
    }
  ],
  "981c6ff21a730d1e9a29418f6e9a4609": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.4359,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.1305,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1546,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0411,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.967,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8307,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7184,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6442,
      "direction": "legitimate"
    }
  ],
  "cb6d92a9582f111182b837c4d224035a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.8566,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.9637,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.91,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8789,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6948,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6005,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5081,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5028,
      "direction": "fraud"
    }
  ],
  "6a583ab03df88b44bbef3463ca1a76dc": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.5264,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.7038,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0024,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.9471,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8708,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5445,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4181,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4157,
      "direction": "legitimate"
    }
  ],
  "f2ca66bfa92a61ca0bc4811d39350e1a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2753,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4117,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8958,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.887,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.877,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7748,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.5817,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5718,
      "direction": "legitimate"
    }
  ],
  "9f1c8c9ef6d071af98e30c54b06bb9f8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.129,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0464,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.9674,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8554,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5348,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4019,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3589,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2975,
      "direction": "legitimate"
    }
  ],
  "217186a6c1dcf56cff2c9aa00c85ed95": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7574,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7221,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7096,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6341,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.447,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4234,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3893,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3818,
      "direction": "fraud"
    }
  ],
  "39f57c8a13fa2d608e8284582c05907a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9976,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.4051,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.9162,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8881,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7447,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.356,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.343,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3333,
      "direction": "fraud"
    }
  ],
  "ca9fa8c33e41e862b494eb54092cca92": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.1511,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4147,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.3768,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9122,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.8177,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7762,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5145,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5007,
      "direction": "legitimate"
    }
  ],
  "f22dd4d094fcd0c8a7be17ae6c7d282d": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.7503,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.51,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -2.1521,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4679,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2945,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0298,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.442,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3197,
      "direction": "legitimate"
    }
  ],
  "cab010446f0ab1d6fa181a90dbc1723b": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.9596,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.2186,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.8147,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2665,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0599,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9729,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.9175,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.632,
      "direction": "legitimate"
    }
  ],
  "5c4b44a88a5879dd9936de25af66bb71": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.593,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.2598,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5364,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1407,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1112,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7989,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6276,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4528,
      "direction": "legitimate"
    }
  ],
  "681bf830a1be2e0654d29f14b3490d08": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.4394,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1866,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5951,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.4999,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.46,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3727,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3266,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.3244,
      "direction": "legitimate"
    }
  ],
  "483049ad9287e4cb90feaf2c866c697d": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.1712,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.5551,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6748,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6606,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4497,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3973,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3748,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3583,
      "direction": "legitimate"
    }
  ],
  "1e82346a7eddb43d7c2d487eed22938a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.0367,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.5166,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.3712,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2876,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1674,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6953,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4226,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4122,
      "direction": "fraud"
    }
  ],
  "6ba6d0329cac1f42f9231ad10337aeee": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9115,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.3042,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.3108,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2302,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6977,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6795,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6549,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5641,
      "direction": "legitimate"
    }
  ],
  "ff83acdeee097cd6534e0897e9e8540f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.2391,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.7788,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -2.2944,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4854,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3814,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8416,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.7419,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5588,
      "direction": "legitimate"
    }
  ],
  "2689ed8150fefbba2cd226d3ef55b934": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6163,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.8496,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4891,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.3322,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3218,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9907,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6803,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5703,
      "direction": "legitimate"
    }
  ],
  "104c2afd92e5b210d6ebab5d926ccd60": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.6299,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.5768,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -2.2035,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3012,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.2261,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5826,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5698,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.409,
      "direction": "fraud"
    }
  ],
  "1642ba96356073f9f142f0087652d990": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5415,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.258,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6925,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6272,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.6214,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4421,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3948,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3551,
      "direction": "legitimate"
    }
  ],
  "682191cf61c6dedb5ba6571b92089617": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.689,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.9394,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.3676,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3061,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.2045,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8079,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6213,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3798,
      "direction": "legitimate"
    }
  ],
  "d0a9e3aa90da58d31549fcf4a8556ab4": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9118,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.9097,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1536,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.8159,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3584,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3461,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3384,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": 0.3379,
      "direction": "fraud"
    }
  ],
  "4cf9644690ec32cb410f922f011214c2": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.0168,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.9523,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.382,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3778,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3546,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8912,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.509,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4136,
      "direction": "fraud"
    }
  ],
  "43867db9133f1c6fd0e50360d414b2cc": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.604,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.5002,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.5705,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.433,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8674,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7241,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7239,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7232,
      "direction": "legitimate"
    }
  ],
  "a9ef98cbe588bd5963b9532b44530b0b": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.9423,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0202,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 1.0052,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.9987,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8183,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6762,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.645,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.535,
      "direction": "fraud"
    }
  ],
  "bf0ef6b184808013bf0e3c565d1226af": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2179,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.361,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.917,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4148,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2576,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0032,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.5524,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2877,
      "direction": "fraud"
    }
  ],
  "d1a87a53c4be02a21e388928601cb144": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9336,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.5431,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2943,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.2244,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1975,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.9928,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.77,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4674,
      "direction": "fraud"
    }
  ],
  "bd31a992b5e3ad4b2bf38a8d5a1ff911": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.3328,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5384,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.2542,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6269,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.5979,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.5684,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5054,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": 0.3664,
      "direction": "fraud"
    }
  ],
  "3689315bf61d94deb12c90d4095428c4": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.4799,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.1826,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0782,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0683,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8286,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6368,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5277,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.271,
      "direction": "fraud"
    }
  ],
  "61cb83ad3138e817a67c4ad8068248c2": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.7895,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.8559,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0735,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.7417,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6723,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5022,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4984,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4862,
      "direction": "fraud"
    }
  ],
  "d1b45433d760a11c69d1c7818349d07d": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.8311,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.7474,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.6959,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4486,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7297,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6742,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5735,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3597,
      "direction": "legitimate"
    }
  ],
  "bfa883f90818af4c42b1889e13257c0e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2569,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.2953,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.9984,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.237,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9475,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8424,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5015,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4872,
      "direction": "fraud"
    }
  ],
  "2953a38b53806925be6b4442e198f892": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.8643,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.8147,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3423,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6938,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.686,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6423,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.481,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4455,
      "direction": "legitimate"
    }
  ],
  "56a1fcd14a067c90b8e5695a5df01027": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.1499,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.7383,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4609,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.4123,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1622,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8703,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.697,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6265,
      "direction": "fraud"
    }
  ],
  "7ce8f6d6ce016448a7ae240e026a6fb1": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5075,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.5704,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4229,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.8383,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5593,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.531,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4487,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3724,
      "direction": "legitimate"
    }
  ],
  "213ba7a3d3c2362e0f5580b9de10c5ee": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.4735,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -1.0224,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.997,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9157,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6771,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5662,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.397,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3718,
      "direction": "legitimate"
    }
  ],
  "aeb047c03c070d061d7a0e79d1d29ef3": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6141,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.9239,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8206,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6052,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5208,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4822,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.4818,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4127,
      "direction": "fraud"
    }
  ],
  "9890ac32e6158fb228a7de8a891a2b7b": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.9348,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.2083,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5943,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5639,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5166,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4249,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4242,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3496,
      "direction": "fraud"
    }
  ],
  "d52144fd69a846563504fee497c91201": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9841,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.7223,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7379,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6884,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5947,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5325,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.5024,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4881,
      "direction": "legitimate"
    }
  ],
  "ab47492c562c4f53fdcb9726200e27b1": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9942,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.8472,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7465,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4172,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3274,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.3201,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.282,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2001,
      "direction": "fraud"
    }
  ],
  "7e4aa88faa616257f3a1a9ae030e0b63": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.363,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.1466,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6984,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.6889,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.427,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9034,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8019,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.7868,
      "direction": "fraud"
    }
  ],
  "421815e3705c53e9ced41c763ab09b03": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6608,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1543,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7764,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.7215,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6754,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3193,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.2473,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2004,
      "direction": "fraud"
    }
  ],
  "71df7bb248957a7572dab39bb64b2497": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.5122,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.4682,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.5725,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4274,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7024,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6524,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.5449,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.5086,
      "direction": "legitimate"
    }
  ],
  "b20b7fb107d9b81360215f6c8444b559": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9713,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.0871,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.6626,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.5393,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.9133,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.865,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6934,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5856,
      "direction": "legitimate"
    }
  ],
  "4404ef4cd3a9eb3ac6b5709a4fbbeb1f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.473,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.1512,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4783,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5331,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3974,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3132,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3122,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2624,
      "direction": "legitimate"
    }
  ],
  "bf5ce011f5f4f8f31ec902b201790c39": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7091,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9539,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8237,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7058,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5925,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5373,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4509,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4298,
      "direction": "legitimate"
    }
  ],
  "b06c4876758dd42d15583595dc38b593": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2839,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4799,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -1.071,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8403,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7125,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.43,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.344,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2825,
      "direction": "fraud"
    }
  ],
  "148546ab4dd0989a233bed5f77654436": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.3175,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.6451,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6306,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.1822,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3833,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3281,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3107,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2371,
      "direction": "legitimate"
    }
  ],
  "6e2201a90edadd433ea936390229fc1f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.2559,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.1192,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5958,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.5069,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8241,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7832,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.713,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6645,
      "direction": "fraud"
    }
  ],
  "0f6eef71e5f20c440231ab0e4af5855b": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7141,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.4053,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5526,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.099,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8779,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.8214,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.812,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5491,
      "direction": "legitimate"
    }
  ],
  "6297df764aa536a3318226438609286f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.4356,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.0368,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.2436,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.5562,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5076,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.492,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4092,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.2269,
      "direction": "legitimate"
    }
  ],
  "f33bd6c5f9245685ba5548529bd3d164": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.3718,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.5992,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0523,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.942,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3589,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3496,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3253,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.2592,
      "direction": "legitimate"
    }
  ],
  "607e9df9f765cb4d0d29fc191f5eb3e6": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.4105,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.4744,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.119,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.9575,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9341,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8843,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.7114,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6395,
      "direction": "legitimate"
    }
  ],
  "6a13c20fe009c1217a85d43eda1b88b8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.7512,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.8209,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.9472,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9147,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7151,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6001,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5862,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3045,
      "direction": "legitimate"
    }
  ],
  "710287a73eb0c068b13b79911c58806f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9599,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.2588,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.9068,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.8648,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7603,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6406,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4246,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2281,
      "direction": "fraud"
    }
  ],
  "96d8296006ea2c7ad22a4fd63c66fde7": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.4362,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.2025,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2316,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5578,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4251,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3584,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3235,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3119,
      "direction": "fraud"
    }
  ],
  "4ea174fac5420de5b0f402edfc02f503": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5832,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1778,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8559,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7996,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3734,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3629,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.3593,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3527,
      "direction": "legitimate"
    }
  ],
  "77ae5018adddeaf2d4368bfed06ac989": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.3095,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.4453,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8146,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.681,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5241,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4832,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.396,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3776,
      "direction": "fraud"
    }
  ],
  "aea4e400b34f4d6d7c78574b8e037f76": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5042,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.1244,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5905,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7575,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6899,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.674,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4819,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.4643,
      "direction": "legitimate"
    }
  ],
  "0d7d5dd92d322046c102e18bff837a1e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3205,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.1488,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.3491,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2872,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.8175,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4995,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4345,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3898,
      "direction": "fraud"
    }
  ],
  "8be3421b2477858e262cd3eaa5ef1eb8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.9538,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -2.676,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.8151,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.4491,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8118,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3643,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2638,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.2616,
      "direction": "legitimate"
    }
  ],
  "4eb3ebb1152394993b32071295cd1fa3": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2812,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0453,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.7474,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5153,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3799,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3275,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3023,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2682,
      "direction": "legitimate"
    }
  ],
  "fa0cec351140dab58cf005313f08eb04": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.2978,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.4827,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2707,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5946,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5192,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4297,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3464,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.2658,
      "direction": "legitimate"
    }
  ],
  "0938ab85d605c74b8bc6a02e86f68dc7": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.8905,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.2345,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1204,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -1.0643,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9495,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.891,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.8481,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4022,
      "direction": "fraud"
    }
  ],
  "a16f6ec351af1f01b10ade73ef89faf1": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.76,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.3611,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5513,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3887,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9194,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8745,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3617,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3405,
      "direction": "legitimate"
    }
  ],
  "96972f34c467d7fcb5c1a1c8f3e9ec4e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.2095,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 5.4199,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8822,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6822,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.6781,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5683,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.5293,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.5265,
      "direction": "legitimate"
    }
  ],
  "b24f096d61802c55dab0218168931db8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.5181,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6827,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.6672,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.5555,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4469,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4296,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4208,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3844,
      "direction": "fraud"
    }
  ],
  "6106823b8efcae3ac6f36a9c8961bf55": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.5996,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.8375,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6074,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.9321,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.9013,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8779,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.6942,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6905,
      "direction": "legitimate"
    }
  ],
  "1375434cf8aa56e0bf932131fbeac63c": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.0988,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.8056,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3287,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0268,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7004,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.6041,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5285,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.385,
      "direction": "legitimate"
    }
  ],
  "e787302b9f3801e69da49069391941d9": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9446,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.2338,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.8103,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3895,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9174,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.6111,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.5277,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5094,
      "direction": "legitimate"
    }
  ],
  "fb63ba3502cfb503beff3c6eaf44cdfd": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.7629,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.2449,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9548,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.9229,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7722,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3991,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3477,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3245,
      "direction": "fraud"
    }
  ],
  "0c72940b123767f841219d154f931cea": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.2967,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.0769,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.9456,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8396,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8113,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.598,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.5099,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3054,
      "direction": "fraud"
    }
  ],
  "f09763f8b954821f08f09d667e8eb89c": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7885,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.4434,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.3559,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.7281,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.465,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3871,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3083,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.1773,
      "direction": "fraud"
    }
  ],
  "e927339b399627db62896f885d882108": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.4675,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.742,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5965,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0216,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5741,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4565,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.2813,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.2633,
      "direction": "legitimate"
    }
  ],
  "9a7102a88ec8c1162935ac20b8bd084f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.5682,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.6118,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9239,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5298,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.2746,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2217,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.202,
      "direction": "legitimate"
    }
  ],
  "76a541ea0f5dd9f491c72651bc65d6a0": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6061,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3995,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8505,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.6168,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5911,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3421,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2909,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2016,
      "direction": "fraud"
    }
  ],
  "0c00410dba42ad0e8e116b18a15d05c8": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.0468,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.9916,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 2.0487,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.3222,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.9562,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.7741,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.6692,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.6486,
      "direction": "legitimate"
    }
  ],
  "61d0611dfc11854c1ac7c9397b1e569e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7672,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.7369,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.6613,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9657,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.7025,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.6674,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5637,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.4512,
      "direction": "legitimate"
    }
  ],
  "9f623db711f3eb0c8f80499868b9779f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.2073,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.4204,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.31,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.221,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0861,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5132,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.4274,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3802,
      "direction": "fraud"
    }
  ],
  "1615f6287fb8e2dbaa081a4974003375": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.8395,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.7354,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6826,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6328,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6046,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4792,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4505,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4417,
      "direction": "fraud"
    }
  ],
  "6c0f1d3d5e2e590a17e4d37230468fd9": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.1438,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8099,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6838,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.4225,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4168,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4038,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3791,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3322,
      "direction": "fraud"
    }
  ],
  "560721df8246ebcceee7643ca4b20784": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5735,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.7859,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.5046,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4771,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.2256,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0943,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9744,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.5246,
      "direction": "legitimate"
    }
  ],
  "bccef8033fcf558717811ebb901f6212": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.4341,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.5649,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0144,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9962,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.6664,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.6637,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.5912,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5785,
      "direction": "fraud"
    }
  ],
  "21d591066771e7087b607f69890c0f05": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7484,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.8393,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.476,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4653,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.1154,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9809,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.724,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.4893,
      "direction": "legitimate"
    }
  ],
  "a1d7c144a6eea58f4b774d0b32252855": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7058,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.8754,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3853,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7875,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.688,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4702,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4454,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.354,
      "direction": "legitimate"
    }
  ],
  "cec0e65289974f728cc2a3f0f827be9e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6222,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.841,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6969,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5832,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.5656,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4498,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4218,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.421,
      "direction": "fraud"
    }
  ],
  "19ca12b7546fd00d5aa28f919a2a9e83": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.7776,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.7718,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.6696,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4304,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.8306,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.8058,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7115,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.6603,
      "direction": "legitimate"
    }
  ],
  "1d4e999e315268c4eb4e4fdd485991ca": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5282,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4243,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.1138,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -1.0655,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8769,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7024,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3598,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3135,
      "direction": "legitimate"
    }
  ],
  "75bc9347360393b14b02ad934665d735": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.7325,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.233,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5501,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4202,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.351,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3155,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.2411,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2276,
      "direction": "fraud"
    }
  ],
  "2f0d5145a80891ab04d991fd81d2ce65": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.165,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.8399,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0615,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8521,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8028,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7327,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.5932,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5196,
      "direction": "fraud"
    }
  ],
  "ae0515174beb5850b4bad6ace1883c19": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.2622,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.3857,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6321,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.8119,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5656,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.323,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3188,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3102,
      "direction": "fraud"
    }
  ],
  "59dfc1493f1356efa223498885b192b9": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2084,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3537,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5806,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5771,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5335,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3289,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.2994,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.294,
      "direction": "fraud"
    }
  ],
  "ac4dd5eb1f36d8073c4c0b58de9db95e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.7572,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.7995,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6649,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0121,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4946,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.4651,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.4467,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.3872,
      "direction": "fraud"
    }
  ],
  "66c111a4d710e1fe04c19719da9ebb5a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.205,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.2623,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.3234,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8494,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.4962,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.4255,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3805,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.282,
      "direction": "legitimate"
    }
  ],
  "bacd11ed71e0b3fbdda4e088862dafe1": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.1054,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.4418,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.1578,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.02,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8802,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.7346,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.558,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3676,
      "direction": "legitimate"
    }
  ],
  "f810e5abf7ec4e162cf3ea9196af2d5a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.3934,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.3081,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6365,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9719,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9383,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.4995,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4501,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4345,
      "direction": "legitimate"
    }
  ],
  "34d4d0d3199e494bcce6cb993515a594": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.9266,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.3974,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.1178,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0098,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7402,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.6784,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5465,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4606,
      "direction": "fraud"
    }
  ],
  "7908598f4a6c26f46e34efba3cd68753": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.6061,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.9816,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.4785,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4155,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3698,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.031,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9329,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7602,
      "direction": "legitimate"
    }
  ],
  "fe18ee48b8f4288d7e750df531dcd59b": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.3488,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.5656,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3209,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7899,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7085,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4201,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3335,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3256,
      "direction": "legitimate"
    }
  ],
  "bf919311603c4748f45c7d1be568a040": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.3438,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 2.4003,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.3939,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.994,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.6716,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.666,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.662,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.5032,
      "direction": "legitimate"
    }
  ],
  "ea4739e9c7980c765f9de188d51b1ba1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5849,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.242,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9014,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6914,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5121,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4344,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.317,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2628,
      "direction": "legitimate"
    }
  ],
  "6cfe38c1e1886b237490738450ebfb37": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.2926,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.4479,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2778,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.2532,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9375,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8644,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.662,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4264,
      "direction": "fraud"
    }
  ],
  "50fd77ab3649e6d390ba48182e5fb0de": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6863,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.1453,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8022,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6656,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5288,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.521,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4379,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4227,
      "direction": "fraud"
    }
  ],
  "f64a12ab1e651285a7ddf18693b0ed62": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7254,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3999,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.99,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8267,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6243,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.333,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2194,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.2123,
      "direction": "fraud"
    }
  ],
  "c2b5006ba41d198269a15496fd21928d": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7678,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4401,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2664,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5073,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4863,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4323,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3997,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2726,
      "direction": "legitimate"
    }
  ],
  "a6d7897d1d7cd5d1f783b0adcfba8794": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5562,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4073,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0657,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6707,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6349,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4926,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3492,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2327,
      "direction": "fraud"
    }
  ],
  "a0affccd94e518f72b40eb6ac418dfcd": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0198,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5066,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2516,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0018,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6453,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5353,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4978,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4904,
      "direction": "legitimate"
    }
  ],
  "a352357983797de59a1b3e98f8d5b27f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.204,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5564,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.848,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7209,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3385,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3125,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2733,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1966,
      "direction": "legitimate"
    }
  ],
  "8df0e05c0c0dddd65da4d07d8fc9b2f6": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3639,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1856,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0316,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9345,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6992,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3677,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3544,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3528,
      "direction": "fraud"
    }
  ],
  "0ecb06dcebf955722c00ba30d557078f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.1511,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.551,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8525,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3506,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3227,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2752,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.244,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2016,
      "direction": "legitimate"
    }
  ],
  "42ccdb54c849d711c7cad57760bc83e5": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4333,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8924,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0641,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0057,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8048,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7557,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.747,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.6871,
      "direction": "legitimate"
    }
  ],
  "463dff24ea001b95a366ed345365e269": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4203,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7395,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1887,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8359,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4917,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4489,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3906,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": 0.3388,
      "direction": "fraud"
    }
  ],
  "b35bb3801f311c32f80368bcc95d8a31": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4052,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8144,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.2062,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5462,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5447,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.5295,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3926,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3252,
      "direction": "fraud"
    }
  ],
  "fa7cc493253b2639b7e864f222346740": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.955,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7916,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0361,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.0072,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4324,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3602,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2689,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.2652,
      "direction": "legitimate"
    }
  ],
  "88d9a7d3dbe44c62367a9746c6170f31": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2595,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4403,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0718,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0284,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6806,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5462,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4507,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2672,
      "direction": "legitimate"
    }
  ],
  "d903611acebcdb59a982c7855cdb3889": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3919,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3371,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2871,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2205,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6687,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3326,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3185,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3082,
      "direction": "legitimate"
    }
  ],
  "a360d0fa000ea3fffa72528734e52a7b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6894,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1957,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0549,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5158,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3144,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3049,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2063,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.1865,
      "direction": "legitimate"
    }
  ],
  "b265a09bb3aa73758727cdfcb616e608": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.4371,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.6619,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.197,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6172,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5284,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4419,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4061,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3712,
      "direction": "legitimate"
    }
  ],
  "e5349f93fb590a46ca0e59560047fe4b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5472,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4054,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3091,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8538,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.796,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7829,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.596,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5363,
      "direction": "legitimate"
    }
  ],
  "c06ff1439cf5a5d912542462fc12e83b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.252,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3792,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3402,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.163,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7352,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.495,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3626,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3096,
      "direction": "legitimate"
    }
  ],
  "8282b9ae47510995638dcb052b0d5830": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4969,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.1981,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6151,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.505,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3625,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2896,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2753,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2113,
      "direction": "legitimate"
    }
  ],
  "4c5372ac1b1ff6187f83b82b02f438ea": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4433,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.217,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4236,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.014,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5916,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.536,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4694,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.364,
      "direction": "fraud"
    }
  ],
  "5ff3f991c1a6f918fd66fa06e1247b63": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2655,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8671,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1371,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.129,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9356,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8037,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4954,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.291,
      "direction": "legitimate"
    }
  ],
  "e54e14a93ec9700b9ed88e47662c2fcd": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4254,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1521,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.372,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9559,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7509,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4233,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3357,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3169,
      "direction": "fraud"
    }
  ],
  "24306d32149a1736c15fc76a1dd56795": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0734,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.0942,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1484,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0452,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8148,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7773,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.673,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5015,
      "direction": "legitimate"
    }
  ],
  "c1a7139c2f1156909f8bb194da94332c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.8702,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.6095,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2634,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.056,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7531,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4011,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3904,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3446,
      "direction": "fraud"
    }
  ],
  "cbab7122b9c03394ff51b1f80ee51d72": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.967,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7722,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9304,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.86,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7543,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.502,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3469,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2909,
      "direction": "legitimate"
    }
  ],
  "a43e1022c9da72e83cba914dad9650f3": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5728,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7777,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0638,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9121,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7254,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5618,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3837,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3346,
      "direction": "fraud"
    }
  ],
  "36770560263d5aec6ac0c635d7e69d82": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6888,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7634,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1209,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.806,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.41,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3405,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3014,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2249,
      "direction": "fraud"
    }
  ],
  "b4b9544826a6e82f2002e6faddf08f40": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.042,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2845,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0906,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4463,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3583,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3234,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.2422,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2303,
      "direction": "fraud"
    }
  ],
  "58dd88bf1eeaf1f5673036923bc93fcb": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7621,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7039,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9884,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8501,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7765,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7346,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5786,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4953,
      "direction": "legitimate"
    }
  ],
  "a8039dddd82fa76b25420d1936072f49": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3834,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4501,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7579,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.698,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6098,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4985,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4424,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3625,
      "direction": "fraud"
    }
  ],
  "d5eec9aa4d9ac8cebf7e59aa9d4d8e92": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1966,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5478,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0107,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7758,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7576,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5252,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3883,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3231,
      "direction": "fraud"
    }
  ],
  "77cbaaa10c8baaa373160861be6e5296": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6377,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2506,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.902,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6061,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.495,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3478,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3353,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3194,
      "direction": "legitimate"
    }
  ],
  "b2d0c98b5d93def9dfb9a55a66c5129c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6564,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.9082,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0547,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9728,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8301,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7825,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7508,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7036,
      "direction": "legitimate"
    }
  ],
  "3220a0027609edc243c95c8213331354": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7277,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.0276,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.6796,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4089,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.38,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3224,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2988,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.266,
      "direction": "legitimate"
    }
  ],
  "46b2032ef80967b34793ae618ef03362": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3668,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7399,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9462,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.8937,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6573,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3448,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2395,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1769,
      "direction": "legitimate"
    }
  ],
  "e131045b5ac5578690c47fc21436bce6": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.8414,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8922,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6719,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5006,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4523,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4377,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.384,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3214,
      "direction": "fraud"
    }
  ],
  "59c2cbb4def609e395465d7ecb91d438": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -10.1293,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0259,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9595,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6641,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3425,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2919,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": 0.2491,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.2112,
      "direction": "fraud"
    }
  ],
  "ea68ce85aeaa9461494840d6e24238b8": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.459,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.5901,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4386,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1376,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8042,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5797,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5009,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3722,
      "direction": "legitimate"
    }
  ],
  "c9c3cc96b00a6c6a8edea2d5d710af40": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.0354,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.9697,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8533,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4366,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3572,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2911,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2435,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.2172,
      "direction": "fraud"
    }
  ],
  "e5fee447e8ea4b30f77e7f0bd2e60c06": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.9431,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7005,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9715,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7095,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4446,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.247,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2465,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2285,
      "direction": "fraud"
    }
  ],
  "2476767b1c29aaea7ffcf4c19ed80eee": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3475,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.5735,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3422,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3252,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9419,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.6697,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4622,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2652,
      "direction": "legitimate"
    }
  ],
  "f586c7a9854cd553bf7633a83bd070d6": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.031,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.618,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0426,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0108,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7267,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4587,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4479,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3847,
      "direction": "fraud"
    }
  ],
  "c31b2ecaeded185c04e8e12d43df3c44": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4308,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3923,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0038,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7752,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7113,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4691,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4611,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3657,
      "direction": "legitimate"
    }
  ],
  "aa748158ad11ff950939cf4306724e87": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5358,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 3.3084,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2025,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.1022,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8519,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7326,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6691,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.4077,
      "direction": "legitimate"
    }
  ],
  "b4b907ed49a6780ff467f207b645eab9": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.8489,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.653,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7725,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5298,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4356,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4299,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3678,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3183,
      "direction": "fraud"
    }
  ],
  "037b4a0fa90427d475e394284e10e7d4": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3435,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4212,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1479,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0054,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7086,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.548,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5347,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.3473,
      "direction": "fraud"
    }
  ],
  "c80366857c5f7129c127b1a8490f3b4f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.9521,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.9077,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9105,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7116,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3967,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.2933,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.2249,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1973,
      "direction": "legitimate"
    }
  ],
  "98f11015f68637f6d46b02d59d11e1a4": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6863,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5168,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6016,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.5921,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4955,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4925,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3852,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.2469,
      "direction": "fraud"
    }
  ],
  "e96bb50522ff53b7beadd35a1d9fc0c7": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3537,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.0609,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4624,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2624,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7604,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6949,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4459,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.4307,
      "direction": "fraud"
    }
  ],
  "305a6d08a61ec93e00ede15e54949a36": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.8804,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -2.7432,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6131,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4335,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9681,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3567,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2532,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1944,
      "direction": "legitimate"
    }
  ],
  "b370f86438411984146f8522c3211d5f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4457,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5987,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8472,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.5559,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5358,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5115,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4188,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3581,
      "direction": "legitimate"
    }
  ],
  "5ecbcdb7f4cd36f942d18d76fe6e6fa9": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2076,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.996,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1835,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0088,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.8204,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7721,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7468,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4487,
      "direction": "legitimate"
    }
  ],
  "3fc1b86e12016e4993395b187bcec4fe": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3834,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.9239,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1381,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8411,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7182,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5216,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4768,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.3984,
      "direction": "fraud"
    }
  ],
  "cdd65aa3723b494aaf333d151732753e": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5759,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8323,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3343,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7763,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.752,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5957,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.521,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5036,
      "direction": "legitimate"
    }
  ],
  "566ef676212454f2260f85052a51c967": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3768,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5386,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3386,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0447,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7263,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4909,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4016,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3576,
      "direction": "legitimate"
    }
  ],
  "fbb6c844923a528944578b35b6a21575": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3604,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1348,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0103,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8331,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5649,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5489,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4504,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3465,
      "direction": "legitimate"
    }
  ],
  "e09a93cbf48c3cf0ff1aa6ee91ffafd7": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7038,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.9504,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2496,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0891,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7852,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6616,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.4131,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2704,
      "direction": "fraud"
    }
  ],
  "31b76f730b97909807c8575b7da8d460": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6412,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.1238,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6731,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.6112,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.517,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4983,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4552,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4267,
      "direction": "fraud"
    }
  ],
  "72f44e75900394df3b8b97934c3a7227": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.9424,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.0377,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7697,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6258,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.52,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5186,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4904,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4698,
      "direction": "legitimate"
    }
  ],
  "f19bd202252c2cd1a5c35600fb050daf": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5601,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4796,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8862,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6788,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6452,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5994,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4754,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4502,
      "direction": "legitimate"
    }
  ],
  "dcff0e13d0fe897510a89c99618f39b5": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.045,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3535,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.4041,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6129,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4364,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4344,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3549,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3164,
      "direction": "fraud"
    }
  ],
  "d2dda4eedce14e047a74fa3302105050": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7948,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.5992,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8902,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8126,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7424,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4202,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3524,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3252,
      "direction": "legitimate"
    }
  ],
  "c7d409f203042404c83584af047d4561": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0375,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2564,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.181,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1651,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.038,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6744,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.424,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3476,
      "direction": "fraud"
    }
  ],
  "793b431693ed37d7e2badb73b5961f5b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.1836,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.94,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8494,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4543,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3737,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3361,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2886,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.246,
      "direction": "legitimate"
    }
  ],
  "32b83be21268aefe47e2878dce5c82da": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.1575,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.9268,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.294,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7155,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6877,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4111,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3564,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2803,
      "direction": "legitimate"
    }
  ],
  "d40322ed389acaa6758911538fa9d6fb": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6217,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.5602,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4597,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5244,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4402,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3972,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3711,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3497,
      "direction": "fraud"
    }
  ],
  "b4e59e3ca9152e41e29b073412ce26f1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5827,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.6976,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3164,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.002,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8167,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7893,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4906,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.4062,
      "direction": "legitimate"
    }
  ],
  "b66ea571d6b9e4579da323b0093fd9b2": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.9783,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -2.5595,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.6558,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5204,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4627,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3507,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3234,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.2602,
      "direction": "fraud"
    }
  ],
  "8a061e14da9b97cf8b4ab4cd6693cc89": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.161,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1016,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.541,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0233,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7912,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3504,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3349,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3301,
      "direction": "fraud"
    }
  ],
  "a221e7be567db8ca7d1e04b27e805010": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0985,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5622,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1535,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0327,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6785,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3523,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2448,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1956,
      "direction": "legitimate"
    }
  ],
  "50e005e17a2d7b03b43b221a277d4fbd": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1611,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3887,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.5801,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2086,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8327,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7574,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7414,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4061,
      "direction": "legitimate"
    }
  ],
  "ec55da2dbedfc8a397236fcee2d09cc7": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.9987,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.6508,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8681,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8011,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.745,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4707,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3647,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2824,
      "direction": "legitimate"
    }
  ],
  "6b391bf84e9129c77debd9af7f8d313c": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.26,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1084,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.321,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0701,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6472,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6013,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.2599,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2326,
      "direction": "legitimate"
    }
  ],
  "ad57f631c1c05ff956599a9d918e9585": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.0696,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8893,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0518,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7579,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7444,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7377,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5218,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4631,
      "direction": "fraud"
    }
  ],
  "f246329318ca046abd5b7ccfe4ac71d5": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5336,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.45,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9423,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8622,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8602,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7713,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6565,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6095,
      "direction": "fraud"
    }
  ],
  "f6d65cb8bb6ae03df605c151f26b2e90": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.9922,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.6531,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.3274,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9601,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7953,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7728,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7296,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5315,
      "direction": "legitimate"
    }
  ],
  "ff21cb3fe91547a130825571fd65b8a2": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.5509,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.7657,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3106,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.196,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.006,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.9835,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8913,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.392,
      "direction": "fraud"
    }
  ],
  "cd32af4444cbee9cae4c01cd24416e63": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4203,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7365,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2057,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4748,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4495,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4063,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3939,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2893,
      "direction": "fraud"
    }
  ],
  "9e0c76af427aa76cd9430fcf7a91900e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3698,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2066,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0567,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8321,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.7823,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6619,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.4891,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.3515,
      "direction": "fraud"
    }
  ],
  "8adc3da3e407c72a277d91d2b3cd8091": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.9921,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5462,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4173,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2943,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9547,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7344,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5953,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3608,
      "direction": "fraud"
    }
  ],
  "c6a2475d8fe3ebc64828f97b81a2fdbc": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5094,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.57,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9991,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8286,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7417,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6357,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.5353,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3768,
      "direction": "legitimate"
    }
  ],
  "062bf0f62b3c6ac65f52b7a27440edd4": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6265,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1026,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3388,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6349,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5228,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5186,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3225,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1843,
      "direction": "legitimate"
    }
  ],
  "85dff56d14add707527995a7f95bdc29": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7744,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3066,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.219,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8805,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5064,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4859,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4457,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3777,
      "direction": "fraud"
    }
  ],
  "014921407d736ccefa181a6ce8534350": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7051,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3256,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8056,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.5734,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3909,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2653,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2307,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2025,
      "direction": "fraud"
    }
  ],
  "61ec8d97237207f8f44c39830800ac5b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5703,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.576,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7957,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4126,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.393,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3652,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3513,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2812,
      "direction": "legitimate"
    }
  ],
  "a11e36939d3dd57969c88069dfcc001d": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4065,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.154,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7469,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6774,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6237,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5983,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4711,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.303,
      "direction": "fraud"
    }
  ],
  "bb8acc3dbe8c87e992f54ca77172a565": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3034,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.9596,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2643,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9927,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8592,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7559,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5155,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4519,
      "direction": "legitimate"
    }
  ],
  "9f8b8e1f7cca352edf3da0a241749b12": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.0431,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2895,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1535,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.378,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2772,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2547,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2538,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2089,
      "direction": "fraud"
    }
  ],
  "41d8e9688a99840840b8b823373df5cd": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2696,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4085,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3233,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.05,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7431,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4984,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3677,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3631,
      "direction": "fraud"
    }
  ],
  "a8377993d20b7926d852809666f6e286": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3502,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8729,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2552,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8601,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.766,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6102,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5645,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3641,
      "direction": "fraud"
    }
  ],
  "cf1f7da89fa417d1cac15a00c334871e": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.11,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -2.0233,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8516,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.681,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6031,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4935,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3643,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3605,
      "direction": "legitimate"
    }
  ],
  "b11619213850153f7a4f3636d586379b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6982,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1369,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0751,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7658,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7103,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3073,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.267,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.1801,
      "direction": "fraud"
    }
  ],
  "4da5fe378d7ee004963d6f66e556bf79": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3043,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.684,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8396,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6452,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4493,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3563,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3123,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.2752,
      "direction": "fraud"
    }
  ],
  "e35078fc88c55a4cda1e461b9c72011b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6545,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.0167,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.75,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4621,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4255,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3272,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2504,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.1688,
      "direction": "legitimate"
    }
  ],
  "f661b5e27c74a67e6778ead033d0417d": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.9758,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4362,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2682,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1544,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7955,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5848,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4771,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.395,
      "direction": "legitimate"
    }
  ],
  "d7532d6fef989dcf990b1dc72f136224": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2986,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.9244,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4092,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7053,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3703,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3127,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2523,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.2346,
      "direction": "legitimate"
    }
  ],
  "0fe4a2833f5dbffc17ba258de593602c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2447,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4787,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8915,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7276,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7109,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.591,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4573,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.324,
      "direction": "legitimate"
    }
  ],
  "9f481187a41bfc852f1ff179ef095482": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4804,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.6577,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2465,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7038,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4187,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3342,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2708,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.262,
      "direction": "fraud"
    }
  ],
  "42a2b10b5df4de9e34a867ff4df6921e": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6667,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4747,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9105,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7128,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7121,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5079,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.491,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.374,
      "direction": "fraud"
    }
  ],
  "f76986203ea75a1f43bc2402e53367c4": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1201,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.9772,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8786,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7618,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6382,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3817,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.355,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2261,
      "direction": "fraud"
    }
  ],
  "62fa94bccb1db4049b03be868c6c552f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6047,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7168,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.857,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7914,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7222,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5669,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3632,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3397,
      "direction": "fraud"
    }
  ],
  "6b70c6123c514c7ebee8ef711b3c6d43": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6853,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7085,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0636,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0007,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6019,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4946,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3224,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3173,
      "direction": "fraud"
    }
  ],
  "6c7835ee7b7b206c085911425036c779": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.135,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.9868,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0159,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.933,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.627,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4315,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2243,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2045,
      "direction": "legitimate"
    }
  ],
  "c18ed46744bc36620cc654f4fee018c1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6992,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4316,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1333,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9334,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4105,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3812,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3767,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3329,
      "direction": "fraud"
    }
  ],
  "42c1b3b1d11e8845892430b6269caa48": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8703,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.8349,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.5947,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9089,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7219,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4249,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4084,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3568,
      "direction": "fraud"
    }
  ],
  "4d9cfab5c681436840215d8e6106a5ac": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6583,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3308,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5314,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2905,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.986,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.7336,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4465,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4259,
      "direction": "legitimate"
    }
  ],
  "46efed45b01efedcee389256905fb747": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -12.4989,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": 5.1729,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3149,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -1.2835,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.9785,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7856,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.5099,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.3952,
      "direction": "fraud"
    }
  ],
  "85f7dd85ab0168f43ac2f297b582cfc2": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.172,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7844,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1702,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8066,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4679,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3521,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3243,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.255,
      "direction": "fraud"
    }
  ],
  "da6a0dd368eade6416606e129c4025e6": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6329,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1651,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7899,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6639,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6321,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4322,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3347,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2683,
      "direction": "fraud"
    }
  ],
  "8adf6cdb312ad3062821afbef7d95bbb": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6024,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7666,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1659,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1422,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8419,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5114,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2728,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2345,
      "direction": "fraud"
    }
  ],
  "95980ee434d603d93805bce02365e25a": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.0827,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.7565,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2968,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.0593,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9737,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6286,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5742,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -0.5033,
      "direction": "legitimate"
    }
  ],
  "63177a839e7b247082f35d37b008dc3d": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5074,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8209,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1505,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7489,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4427,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3732,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3713,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3439,
      "direction": "legitimate"
    }
  ],
  "93b8a73f9c73fdf481a4765282e1a3c2": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.3112,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.1626,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8046,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7502,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7293,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.6099,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3554,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3275,
      "direction": "legitimate"
    }
  ],
  "bd419146c33d430db585fb8e3f1e9df2": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0148,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.88,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.5124,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8861,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6216,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5383,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.507,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3563,
      "direction": "legitimate"
    }
  ],
  "e03c9f3aaa869f9a661fff16150ac4b6": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3359,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.253,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4352,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2835,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7755,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7384,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4782,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2728,
      "direction": "legitimate"
    }
  ],
  "bfc9b9f499a91547897a6c4feff9cad1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.9336,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5735,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8778,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6104,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.555,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4863,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4224,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3628,
      "direction": "legitimate"
    }
  ],
  "f3cee0d6c62d938a4c0f7026a2517a2a": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5096,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.2419,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0421,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4415,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4302,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3439,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2858,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.195,
      "direction": "fraud"
    }
  ],
  "01eefb08f108f970990b6ea6f0fd2040": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6778,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7291,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8945,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6678,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.4932,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4281,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.2788,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2601,
      "direction": "fraud"
    }
  ],
  "ff7df5798312f6cb7301d6aec15a6d22": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1044,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3704,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1926,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.189,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.85,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5133,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4592,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3437,
      "direction": "fraud"
    }
  ],
  "d1870f65027ea8580d47f80543689c6a": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5131,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8682,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0882,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8303,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5326,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4084,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3914,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3076,
      "direction": "fraud"
    }
  ],
  "be1b2a521f36f3709548fa65928c39d0": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7809,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7849,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8358,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4592,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4573,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.424,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.407,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2612,
      "direction": "legitimate"
    }
  ],
  "20de105d538ba7247d4db388f8e953d6": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0982,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1267,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3428,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0973,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8769,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8008,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7509,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5205,
      "direction": "fraud"
    }
  ],
  "7702801cf18226f84ec3235f477f2796": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6901,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3137,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8589,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6718,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.422,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.4148,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3183,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2494,
      "direction": "fraud"
    }
  ],
  "effdbc886e072505ad45bc73b2dee7bf": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.032,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8566,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.6311,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9749,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9351,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7042,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4996,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.447,
      "direction": "legitimate"
    }
  ],
  "a9867e367df5f9921397294495c97f77": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.499,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1359,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9543,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9424,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3661,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3393,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2461,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.2342,
      "direction": "fraud"
    }
  ],
  "d2932b6f7366744806e8dc9279d4287d": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4458,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5882,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8976,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6655,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.574,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4796,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4555,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3423,
      "direction": "fraud"
    }
  ],
  "18e65e29885ad6e34ea903a4e2ca287c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3221,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2299,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0893,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7223,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.689,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.6783,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6767,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5833,
      "direction": "legitimate"
    }
  ],
  "7b1abda0ef93b009560171ef518f799b": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.387,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.1744,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2037,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6836,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4838,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.39,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.308,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2081,
      "direction": "fraud"
    }
  ],
  "47c1bde69e7a17bef0d233458ff438c3": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1936,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8191,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0644,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7212,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.6715,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5736,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3594,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2664,
      "direction": "legitimate"
    }
  ],
  "de9816aa95efa146d5f47d9120c2c164": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3252,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 0.9529,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9314,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6975,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5259,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5246,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4194,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.3754,
      "direction": "fraud"
    }
  ],
  "1a7166b46f5e1d691598a51a94f37b20": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5024,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.5754,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8677,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8314,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7518,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6991,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6091,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4161,
      "direction": "legitimate"
    }
  ],
  "a8cf00ecdd1be7f33c9ef7130e7b1869": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2868,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1979,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0276,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9312,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6376,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3732,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3509,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3116,
      "direction": "legitimate"
    }
  ],
  "d73b5ca53b6f694373e413a862847a03": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6283,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.366,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0907,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7349,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6511,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5629,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4801,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3557,
      "direction": "fraud"
    }
  ],
  "3e528f5a771782fba42649e4e1ca5ef2": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6009,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4612,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6841,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.6797,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6427,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4984,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4022,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3798,
      "direction": "fraud"
    }
  ],
  "5ab0cdfb464cfce1fb9d4b568ca636ec": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2199,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1337,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0959,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0537,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7138,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5816,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4938,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4657,
      "direction": "legitimate"
    }
  ],
  "95da3b640728d8bcfa44da7dfba4467c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.349,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4664,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2864,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0838,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8551,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4874,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4501,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3186,
      "direction": "legitimate"
    }
  ],
  "4788607153482d14030b10ab9c6d381f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2062,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.4416,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3261,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2401,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.0202,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.8288,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8027,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.7204,
      "direction": "fraud"
    }
  ],
  "b11542f91074a71988306d038164bdc1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.3087,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7735,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2333,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5984,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4999,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3498,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2493,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.1858,
      "direction": "legitimate"
    }
  ],
  "a54781838974c3cf30bbf357d9f1126c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.1824,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4148,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.3884,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3682,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.345,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3366,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.2688,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.224,
      "direction": "fraud"
    }
  ],
  "5f3b6944cc1cc0a805bf836326f7c921": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2347,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4232,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.981,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6621,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3105,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2424,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.2253,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.1804,
      "direction": "legitimate"
    }
  ],
  "0f93e6b2652536a9a717c5899f32bbaf": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1881,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.9142,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4862,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8745,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6097,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4554,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3796,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2321,
      "direction": "legitimate"
    }
  ],
  "451420aae14bd894786cb8318cd3fd74": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.0219,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2652,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9046,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6146,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5913,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4561,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.412,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.1837,
      "direction": "legitimate"
    }
  ],
  "a18d39b0a195610dd31b168c9cd562f0": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3354,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.6677,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2932,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1857,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7536,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.457,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.271,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2588,
      "direction": "legitimate"
    }
  ],
  "a96885d16a6162b9cb02ecd445f44917": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.9771,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7073,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9094,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7637,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.6352,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3129,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2041,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.1633,
      "direction": "fraud"
    }
  ],
  "4e8dfc9eeb71bada5aad8f4ee5e97ee9": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -5.8824,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7059,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3219,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9477,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7297,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6195,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3998,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3665,
      "direction": "legitimate"
    }
  ],
  "2610aa2d62a51f40f82eac99bd2cb24c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5233,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.0245,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2204,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6911,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4826,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.348,
      "direction": "fraud"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2997,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2792,
      "direction": "fraud"
    }
  ],
  "8876d9a474ccc0548a9444ba0d9584d9": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2514,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4015,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1204,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1135,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6698,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5021,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3868,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3188,
      "direction": "fraud"
    }
  ],
  "6335eb61fa7f370ec426989e7f04295e": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2988,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.874,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1661,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7784,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7203,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3829,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.294,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.2271,
      "direction": "legitimate"
    }
  ],
  "27d7b530523ae2b009e0d38ddc45056c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1959,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1239,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3365,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0584,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7981,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7315,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.6298,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4362,
      "direction": "legitimate"
    }
  ],
  "f987fdc9d7088bfcdf5cd433246ba008": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.221,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.6455,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9355,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8584,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.635,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5526,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4247,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3875,
      "direction": "fraud"
    }
  ],
  "18c3e7ef16421925b0eabfa9c956f65f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2976,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8217,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3401,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0642,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7578,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6579,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4297,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.387,
      "direction": "legitimate"
    }
  ],
  "8fdae819843783f22731d362465bd26d": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4773,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8401,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9586,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9262,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7709,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4135,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.377,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2763,
      "direction": "legitimate"
    }
  ],
  "c17391801050e866c403ed3dc0e69cb6": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.7649,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.5221,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -1.3461,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.0607,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.5941,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4528,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4042,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3752,
      "direction": "legitimate"
    }
  ],
  "f55e0a9cb2ddad3cbee0b54744bcca24": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.492,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.5437,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3854,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3214,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8361,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7569,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4444,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3767,
      "direction": "fraud"
    }
  ],
  "eeb4569b51da2a2e64fa1a7c94e65b6e": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2287,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.9377,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4806,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1869,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7568,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7438,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3761,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3725,
      "direction": "fraud"
    }
  ],
  "51372c3641dbb1bff11e398722c8b60f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4606,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8309,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1941,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7418,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5205,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4335,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2983,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.215,
      "direction": "legitimate"
    }
  ],
  "f2e0164ab245c85b0461e907c8ac62b1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3285,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8003,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9357,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6499,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4712,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3758,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3384,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2609,
      "direction": "fraud"
    }
  ],
  "752803592da6f2d8a047c5cb2dd82850": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1675,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2436,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3038,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0829,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.9247,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6858,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4748,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3949,
      "direction": "fraud"
    }
  ],
  "a393adcbe45dca4a21c07e08183768bd": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6713,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.6594,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3919,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0222,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7451,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7011,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4316,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.2562,
      "direction": "fraud"
    }
  ],
  "061638e5001487c43acebb32b1347fff": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1947,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8626,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.955,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6666,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6025,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4383,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3152,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2741,
      "direction": "fraud"
    }
  ],
  "b2db6f0455d26adbd094d2c65a063b44": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2285,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.305,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3237,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1806,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7145,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5029,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4549,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4111,
      "direction": "legitimate"
    }
  ],
  "5e687240f62854692ae8f64341e3e675": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.8562,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.9387,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.7239,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8335,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.8046,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7951,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.755,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6746,
      "direction": "legitimate"
    }
  ],
  "6616e950c452c41170a1c5d516b6cadb": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1965,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7656,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1724,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7718,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.5921,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5608,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4768,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3802,
      "direction": "fraud"
    }
  ],
  "afdd22dd261418a9681fe7fd8b0b2a87": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4544,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7337,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4326,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2649,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8739,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8343,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.459,
      "direction": "legitimate"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": -0.3279,
      "direction": "legitimate"
    }
  ],
  "029b8c71dbc898a86d76d0d6c6bd5e8f": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3008,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 1.7617,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5275,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3008,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.7932,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7723,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7518,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.6848,
      "direction": "legitimate"
    }
  ],
  "13b6debf8bd431482bb23c2e00017890": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -7.3292,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -3.3596,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.2747,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.8009,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.7995,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6888,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4529,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.451,
      "direction": "fraud"
    }
  ],
  "f37e9cea1cc2ea2c92e60883fb0c6a23": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1994,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5765,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.2089,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6786,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.6243,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.4047,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.37,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3474,
      "direction": "legitimate"
    }
  ],
  "7f260d1168b472996250e87cb3470d71": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5229,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.9057,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1754,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6148,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5288,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3492,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3247,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3062,
      "direction": "legitimate"
    }
  ],
  "930bf1283f0a3f746812344c86e1ce96": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6352,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5036,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.118,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.7502,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6385,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.5582,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.551,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4793,
      "direction": "fraud"
    }
  ],
  "a385c51d5c402d3840c28c6ef093f1ff": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2916,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7818,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0732,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.0344,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6909,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.6673,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4623,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4217,
      "direction": "legitimate"
    }
  ],
  "4c5acf97289cd23e7caaf5fb57859c5c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4896,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7822,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6477,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4484,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3373,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.2796,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2628,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.2451,
      "direction": "fraud"
    }
  ],
  "1b576912f401c4b209bdf41e600fb8a7": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2333,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.1112,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.5575,
      "direction": "fraud"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7725,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.723,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4515,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.4056,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4044,
      "direction": "fraud"
    }
  ],
  "360e0e3bcb37fd6982c06fc165434034": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.7532,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8448,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.8986,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8777,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7372,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4699,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4496,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3742,
      "direction": "fraud"
    }
  ],
  "3f6a4c69404a661b95c373658e35cb93": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -9.3193,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.4057,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3992,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1256,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9199,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5047,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.401,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.2836,
      "direction": "legitimate"
    }
  ],
  "defe6873bf36244ebbf3850446ec27f7": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.2736,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.4202,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.1541,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0694,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7299,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7096,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5295,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.4099,
      "direction": "legitimate"
    }
  ],
  "da06e0c2e74b03a5e2761b3e50b52bbf": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4216,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.354,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1659,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.0042,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.8103,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6863,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6385,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5997,
      "direction": "legitimate"
    }
  ],
  "2ab3550970737afa73c1a698d44c9989": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.8434,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.5601,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.3248,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2802,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7817,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5132,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4634,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.26,
      "direction": "legitimate"
    }
  ],
  "b023c025b0320e395820f02b1b4444d0": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.3564,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.021,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9756,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.941,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.4326,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4271,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3508,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.2828,
      "direction": "fraud"
    }
  ],
  "b60f78f0f2a242a9a6336a349e5c34f0": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.9603,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5958,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7055,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.6722,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6481,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4635,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.4482,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3983,
      "direction": "fraud"
    }
  ],
  "c4e601ce3490ffb4a9c8cb557f624f42": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.9468,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.7355,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.9153,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.6884,
      "direction": "fraud"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.582,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5502,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.482,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4399,
      "direction": "legitimate"
    }
  ],
  "5796aa7f01994d6c96c12b5d68f82c26": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0991,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.3041,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3037,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.2261,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8739,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7763,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7259,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4293,
      "direction": "legitimate"
    }
  ],
  "a2413e8358de6b61ad51c488a0b2643d": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6357,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1883,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8185,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.7882,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.406,
      "direction": "fraud"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.3359,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2422,
      "direction": "fraud"
    },
    {
      "key": "day_of_week",
      "label": "Day of Week",
      "family": "Time-based",
      "value": 0.2101,
      "direction": "fraud"
    }
  ],
  "a6e5b447de026d24dc0169e4eae16fc9": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -7.3559,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -4.8879,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.186,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6853,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5102,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4106,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3133,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.2782,
      "direction": "legitimate"
    }
  ],
  "f32dcff6b0e093a49c816e1160c0d09c": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.618,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.527,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.3466,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.8091,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3824,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3551,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3412,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.3206,
      "direction": "legitimate"
    }
  ],
  "850795b4b65bb7e410797ae89bf03d65": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5263,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5386,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8114,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7983,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.656,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4946,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.486,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3878,
      "direction": "fraud"
    }
  ],
  "16891281168b2b20a5e0b92a76f8f683": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6127,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1159,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.0512,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6914,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.6332,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5906,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3933,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3663,
      "direction": "legitimate"
    }
  ],
  "7917e32b854a577a4cc59215c55f8194": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -8.8574,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": 4.5458,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -1.5631,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.1879,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -1.1664,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.7015,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": 0.6274,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3302,
      "direction": "fraud"
    }
  ],
  "86a70b5a3fed6f10a9888af1f9f4d3e0": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6175,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.024,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7787,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4586,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3963,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3454,
      "direction": "fraud"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.1749,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.1622,
      "direction": "fraud"
    }
  ],
  "1e23ddf4c0da06b21dfde83350672b47": [
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.6017,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.4302,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.5301,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.3427,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3252,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.3167,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.2727,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.2582,
      "direction": "legitimate"
    }
  ],
  "5e44f797f282a8ae01dd51ddb2e2a09e": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.544,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7756,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 1.4184,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": -0.8425,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6533,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5489,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.4068,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.365,
      "direction": "legitimate"
    }
  ],
  "ed9074a855a93f4a596a586bc9468c20": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.537,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7584,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.643,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.538,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.4386,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3156,
      "direction": "legitimate"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.2124,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": 0.1774,
      "direction": "fraud"
    }
  ],
  "55c1b46183b79f937de21d4129b36a41": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.5777,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.7688,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -0.9535,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.9099,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.6917,
      "direction": "legitimate"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.5392,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.5109,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.4776,
      "direction": "fraud"
    }
  ],
  "cbf96f2c7563564150b9077937168908": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.1184,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.8129,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.9976,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.7558,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5224,
      "direction": "legitimate"
    },
    {
      "key": "age_years",
      "label": "Cardholder Age",
      "family": "Behavioural",
      "value": -0.3475,
      "direction": "legitimate"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2704,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.2482,
      "direction": "fraud"
    }
  ],
  "17034b773192a2cfa5694e54608667b1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.0205,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.5009,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.5762,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -1.4669,
      "direction": "legitimate"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": -0.8029,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.6408,
      "direction": "legitimate"
    },
    {
      "key": "amount_vs_category_mean",
      "label": "Amount vs Category Average",
      "family": "Behavioural",
      "value": -0.3976,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -0.3943,
      "direction": "legitimate"
    }
  ],
  "14f1ca97b2130755465b774c7c175612": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.6711,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.0731,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": -0.7928,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.7346,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5275,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.512,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4172,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.4133,
      "direction": "fraud"
    }
  ],
  "60019138cf50931f1159d83d379f7f6f": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.607,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.2212,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": -1.2526,
      "direction": "legitimate"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": -0.5915,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": 0.4025,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.338,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2549,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2546,
      "direction": "legitimate"
    }
  ],
  "956259b30e6f98f66bea3346b9eba1c1": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.9092,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -5.1145,
      "direction": "legitimate"
    },
    {
      "key": "hours_since_last_txn",
      "label": "Time Since Last Transaction",
      "family": "Behavioural",
      "value": -1.1454,
      "direction": "legitimate"
    },
    {
      "key": "state",
      "label": "State",
      "family": "Geo-location",
      "value": -0.598,
      "direction": "legitimate"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.4773,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.4288,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3487,
      "direction": "fraud"
    },
    {
      "key": "amount",
      "label": "Transaction Amount",
      "family": "Transaction",
      "value": -0.2913,
      "direction": "legitimate"
    }
  ],
  "b3d08119dcb8a829bf8f5bf8d845b8a5": [
    {
      "key": "amount_vs_card_mean",
      "label": "Amount vs Card Average",
      "family": "Behavioural",
      "value": -6.731,
      "direction": "legitimate"
    },
    {
      "key": "distance_km",
      "label": "Distance to Merchant",
      "family": "Geo-location",
      "value": -6.6084,
      "direction": "legitimate"
    },
    {
      "key": "hour",
      "label": "Hour of Day",
      "family": "Time-based",
      "value": 0.5092,
      "direction": "fraud"
    },
    {
      "key": "category",
      "label": "Merchant Category",
      "family": "Merchant",
      "value": 0.3958,
      "direction": "fraud"
    },
    {
      "key": "merchant_fraud_rate",
      "label": "Merchant Risk",
      "family": "Merchant",
      "value": 0.3075,
      "direction": "fraud"
    },
    {
      "key": "is_night",
      "label": "Late-night Transaction",
      "family": "Time-based",
      "value": 0.3001,
      "direction": "fraud"
    },
    {
      "key": "city_pop_log",
      "label": "City Population",
      "family": "Geo-location",
      "value": 0.2242,
      "direction": "fraud"
    },
    {
      "key": "card_txn_count",
      "label": "Card Transaction History",
      "family": "Behavioural",
      "value": -0.1657,
      "direction": "legitimate"
    }
  ]
};

/* Feature families, derived from what the model actually uses. */
export const SHAP_FEATURES = globalImportance.map((f) => ({
  key: f.feature,
  label: f.label,
  family: f.family,
}));

/* Look up one transaction's feature contributions. */
export function getShapExplanation(txn) {
  if (!txn) return [];
  const key = txn.shapKey ?? txn.id;
  return contributionsByTransaction[key] ?? [];
}

/* The contributions that pushed this transaction toward fraud. */
export function getTopReasons(txn, limit = 5) {
  return getShapExplanation(txn)
    .filter((f) => f.direction === "fraud")
    .slice(0, limit);
}

export function hasExplanation(txn) {
  const key = txn?.shapKey ?? txn?.id;
  return Boolean(key && contributionsByTransaction[key]);
}
