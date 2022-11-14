import { Widget } from "@typeform/embed-react";
import { Meta } from "../components/layout/Meta";
import { AppConfig } from "../utils/AppConfig";

const Demo = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="h-screen flex items-center justify-center">
        <Widget id="skpBK7vX" style={{ width: "50%", height: "60vh" }} />
      </div>
    </div>
  );
};

export { Demo };
