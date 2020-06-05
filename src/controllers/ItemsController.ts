import knex from "../database/connection";
import { Response, Request } from "express";

class ItemsController{
  async index(req: Request, res: Response){
    const items = await knex("items").select("*");
    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${process.env.APP_URL}/uploads/${item.image}`,
        description: item.description,
      };
    });
  
    return res.json(serializedItems);
  }
}

export default ItemsController;