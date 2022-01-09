// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type UtcDateTime = {
  utc: string
  unix: number
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<UtcDateTime>
) => {
  const date = new Date(req.query.date as string);

  res.status(200).json({ 
    utc: date.toUTCString(),
    unix: date.getTime()
  });
}

export default handler;
