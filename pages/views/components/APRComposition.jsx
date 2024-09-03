import { Popover, Image } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { formatBalanceWithLocalizedCurrency } from "../../../utils/general";

const APRComposition = ({ APRData, mode, currency, exchangeRateWithUSD }) => {
  const renderContent = () => {
    if (mode === "pendingRewards") {
      return Object.entries(APRData).map(([key, value]) => {
        return (
          <div key={key}>
            <Image
              src={`/tokenPictures/${value.symbol}.webp`}
              width={20}
              height={20}
              alt={key}
            />
            {value.symbol}{" "}
            {formatBalanceWithLocalizedCurrency(
              exchangeRateWithUSD,
              value.usdDenominatedValue,
              currency,
            )}{" "}
            <span style={{ fontSize: "12px", color: "grey" }}>
              {value.balance.toString() / Math.pow(10, value.decimals)}
            </span>
          </div>
        );
      });
    } else {
      `not implemented ${mode}`;
    }
  };
  return (
    <Popover
      style={{ width: "500px" }}
      content={renderContent()}
      title="Data Breakdown"
      trigger="hover"
    >
      <InfoCircleOutlined />
    </Popover>
  );
};
export default APRComposition;
