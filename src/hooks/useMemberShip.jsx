import { useEffect, useState } from "react";

const useMemberShip = () => {
  const [membership, setMembership] = useState({});
  const [loading, setLoading] = useState(true);

  // Data fetching from api
  useEffect(() => {
    fetch("membership.json")
      .then((res) => res.json())
      .then((data) => {
        setMembership(data);
        setLoading(false);
      });
  }, []);

  return [membership, loading];
};

export default useMemberShip;
