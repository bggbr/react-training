import {
  getServerData,
  setServerData,
} from "../../../src/common/api/serverData";
import { sleep } from "../../../src/common/api/util";
import { makeCooking } from "../../../src/common/util/cooking";

export default async function handler(req, res) {
  await sleep();
  const data = getServerData();
  if (req.method === "POST") {
    const menu = data.menus.find((item) => item.id === req.body.menuId);
    if (menu) {
      const { cookingList } = data;
      let maxId = cookingList.length
        ? Math.max(...cookingList.map((item) => item.id))
        : 0;
      const id = Number.isNaN(maxId) ? 1 : maxId + 1;
      const cooking = makeCooking({ id, menu });
      cookingList.push(cooking);
      setServerData(data);
      res.status(200).json({ success: true, id });
    } else {
      res.status(400).json({ success: false });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ success: true, cookingList: data.cookingList });
  } else {
    res.status(400).json({ success: false });
  }
}
