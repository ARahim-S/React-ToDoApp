import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(() => setDate(new Date()), 1000);
    };
  }, []);

  return (
    <>
      <div>
        <h3>
          Time:{" "}
          {date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
          })}
        </h3>
      </div>
    </>
  );
};

export default CurrentTime;
