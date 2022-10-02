import {
  getServerData,
  setServerData,
} from "../../../src/common/api/serverData";
import { sleep } from "../../../src/common/api/util";

export default async function handler(req, res) {
  await sleep();
  const id = Number(req.query.id);
  const data = getServerData();
  const index = data.menus.findIndex((item) => item.id === id);
  if (index >= 0) {
    if (req.method === "DELETE") {
      data.menus.splice(index, 1);
      setServerData(data);
      res.status(200).json({ success: true });
    } else if (req.method === "PUT") {
      const prevMenu = data.menus[index];
      const nextMenu = req.body;
      const histories = getHistories(prevMenu, nextMenu);
      data.menus[index] = { ...prevMenu, ...nextMenu };
      data.histories.push(...histories);
      setServerData(data);
      res.status(200).json({ success: true });
    } else if (req.method === "GET") {
      res.status(200).json({ success: true, menu: data.menus[index] });
    } else {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ success: false });
  }
}

function getHistories(prev, next) {
  return Object.keys(next)
    .filter((key) => key !== "id")
    .map((key) => ({
      id: prev.id,
      key,
      createdAt: Date.now(),
      from: prev[key],
      to: next[key],
    }));
}
