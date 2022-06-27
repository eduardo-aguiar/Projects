// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../db/client";

const redirectPage = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  if (req.method === "GET" && slug && typeof slug === "string") {
    const data = await prisma.shortLink.findFirst({
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    if (data) {
      res.redirect(data.url);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  }
};

export default redirectPage;
