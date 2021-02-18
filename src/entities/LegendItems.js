import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem(
    "5,000,000 +",
    "#b36400",
    (cases) => cases >= 5_000_000,
    "white"
  ),
  new LegendItem(
    "2,500,000 - 4,999,999",
    "#d17c00",
    (cases) => cases >= 2_500_000 && cases < 4_999_000,
    "white"
  ),
  new LegendItem(
    "1,000,000 - 2,499,999",
    "#ef9400",
    (cases) => cases >= 1_000_000 && cases < 2_499_999
  ),
  new LegendItem(
    "500,000 - 999,999",
    "#feb423",
    (cases) => cases >= 500_000 && cases < 999_999
  ),
  new LegendItem(
    "0 - 499,999",
    "#ffda51",
    (cases) => cases >= 0 && cases < 499_999
  ),
  new LegendItem("No data", "#ffffff", (cases) => true),
];

export default legendItems;
