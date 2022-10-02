import {
  getServerData,
  setServerData,
} from "../../../src/common/api/serverData";
import { sleep } from "../../../src/common/api/util";
import { findById } from "../../../src/common/util/array";

export default async function handler(req, res) {
  await sleep();
  const data = getServerData();
  const id = Number(req.query.id);
  const item = findById(data.cookingList, id);
  if (!item) {
    res.status(400).json({ success: false });
  } else if (req.method === "PUT") {
    const { action } = req.body;
    switch (action) {
      case "settle":
        if (item.endAt < Date.now()) {
          const menu = findById(data.menus, item.menuId);
          if (menu) {
            data.totalSales += menu.price;
            const index = data.cookingList.findIndex(
              (cooking) => cooking.id === id
            );
            data.cookingList.splice(index, 1);
          } else {
            res.status(400).json({ success: false });
          }
        }
        break;
      case "pause":
        if (!item.pausedAt) {
          item.pausedAt = Date.now();
        }
        break;
      case "resume":
        if (item.pausedAt) {
          item.endAt += Date.now() - item.pausedAt;
          item.pausedAt = 0;
        }
        break;
      default:
        res.status(400).json({ success: false });
        return;
    }
    setServerData(data);
    res.status(200).json({ success: true });
  } else if (req.method === "DELETE") {
    const index = data.cookingList.findIndex((cooking) => cooking.id === id);
    data.cookingList.splice(index, 1);
    setServerData(data);
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
}
