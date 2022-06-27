import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../db/client";

const userService = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { body } = req;

    const user = await prisma.user.create({ data: body });

    if (user) {
      res.send(user);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  }
  if (req.method === "GET") {
    /*
     * Const users = await prisma.user.findMany({
     *   include: {
     *     posts: {},
     *   },
     * });
     */

    console.dir(users);

    res.send(users);
  }
};

export default userService;
