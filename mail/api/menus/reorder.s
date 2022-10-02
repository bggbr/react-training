import {
  getServerData,
  setServerData,
} from "../../../src/common/api/serverData";
import { sleep } from "../../../src/common/api/util";
import { reorderMenus } from "../../../src/common/util/menu";

export default async function handler(req, res) {
  await sleep();
  const data = getServerData();
  if (req.method === "PUT") {
    const { fromId, toId } = req.body;
    reorderMenus({ menus: data.menus, fromId, toId });

    setServerData(data);
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
}
