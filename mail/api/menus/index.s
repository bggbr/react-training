import {
  getServerData,
  setServerData,
} from "../../../src/common/api/serverData";
import { sleep } from "../../../src/common/api/util";

export default async function handler(req, res) {
  await sleep();
  const data = getServerData();
  if (req.method === "POST") {
    const newMenu = req.body;
    const { menus } = data;
    let maxId = menus.length ? Math.max(...menus.map((item) => item.id)) : 0;
    newMenu.id = Number.isNaN(maxId) ? 1 : maxId + 1;
    menus.push(newMenu);
    setServerData(data);
    res.status(200).json({ success: true, id: newMenu.id });
  } else if (req.method === "GET") {
    res.status(200).json({ success: true, menus: data.menus });
  } else {
    res.status(400).json({ success: false });
  }
}
