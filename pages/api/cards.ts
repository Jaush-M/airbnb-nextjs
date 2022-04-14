import { NextApiRequest, NextApiResponse } from "next";
import { GetCardsData } from "../../types";

const data = [
  {
    img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg",
    title: "Outdoor Getaways",
  },
  {
    img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg",
    title: "Unique Stays",
  },
  {
    img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg",
    title: "Entire Homes",
  },
  {
    img: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg",
    title: "Pets Allowed",
  },
];

export const dataCard = data;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCardsData[]>
) {
  res.status(200).json(data);
}
