import { NextApiRequest, NextApiResponse } from "next";
import { GetLocationData } from "../../types";

const data = [
  {
    img: "https://a0.muscache.com/im/pictures/18ab1ca2-a759-48de-a55b-1cb67c25c637.jpg",
    location: "London",
    distance: "45-minute drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg",
    location: "Manchester",
    distance: "4.5-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg",
    location: "Liverpool",
    distance: "4.5-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/da75656c-f2d5-4878-aade-f2971842365f.jpg",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg",
    location: "Birkenhead",
    distance: "4.5-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/3849e3f1-d275-43fb-8957-4c90f26e14db.jpg",
    location: "Hove",
    distance: "2-hour drive",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetLocationData[]>
) {
  res.status(200).json(data);
}
