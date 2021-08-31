import { User } from "./types";
import { NotActive } from "./not-active";
import { CardLine } from "./card-line";
import { LOCALE, OUTDATE_DIFF } from "./lib/const";

import logo from "./images/logo.png";
import { useEffect, useState } from "react";

const Card = ({
  firstName,
  lastName,
  pspdId,
  status,
  joinDate,
  region,
}: User): JSX.Element => {
  const [currentTimestamp, setCurrentTimestamp] = useState(Date.now());
  const isActive = status === "Current";
  const fullName = `${firstName} ${lastName}`;
  const lastUpdateTimestamp = Number(sessionStorage.getItem("lastUpdate"));
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const isOutdated = currentTimestamp - lastUpdateTimestamp > OUTDATE_DIFF;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(Date.now());
    }, 30 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const lastUpdate = new Intl.DateTimeFormat(LOCALE, options).format(
    lastUpdateTimestamp
  );

  if (!isActive) {
    return <NotActive />;
  }

  return (
    <div className="sm:min-h-screen sm:flex sm:items-start sm:justify-center sm:bg-gray-50 sm:py-12">
      <div className="sm:max-w-lg sm:shadow bg-white overflow-hidden sm:rounded-lg">
        <div className="px-4 py-1 sm:px-6 grid grid-cols-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            Legitymacja
          </h3>
          <div className="flex justify-end">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <CardLine
              label="Imię i nazwisko"
              value={<span className="font-bold">{fullName}</span>}
              isEven
            />
            <CardLine label="Numer" value={pspdId} />
            <CardLine
              label="Składka opłacona"
              value={<span className="text-green-600 font-bold">TAK</span>}
              isEven
            />
            <CardLine
              label="Data przystąpienia"
              value={new Intl.DateTimeFormat(LOCALE).format(
                Number(joinDate) * 1000
              )}
            />
            <CardLine label="Oddział" value={region} isEven />
            <CardLine
              label="Ostatnia aktualizacja"
              value={
                <span className={isOutdated ? "text-red-600 font-bold" : ""}>
                  {lastUpdate}
                </span>
              }
            />
          </dl>
        </div>
      </div>
    </div>
  );
};

export { Card };
