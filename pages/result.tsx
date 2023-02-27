import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();
  const { session_id } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!session_id) return;

    fetch(`/api/${session_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [session_id]);

  return (
    <div>
      <p>Result</p>
      {data ? JSON.stringify(data, null, 2) : "loading..."}
    </div>
  );
}
