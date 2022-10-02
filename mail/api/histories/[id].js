import { getServerData } from "../../../src/common/api/serverData";
import { sleep } from "../../../src/common/api/util";

export default async function handler(req, res) {
  await sleep();
  const data = getServerData();
  const id = Number(req.query.id);
  if (req.method === "GET") {
    res.status(200).json({
      success: true,
      histories: data.histories.filter((item) => item.id === id),
    });
  } else {
    res.status(400).json({ success: false });
  }
}
