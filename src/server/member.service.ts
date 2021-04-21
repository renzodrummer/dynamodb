import AWS from "aws-sdk";
import { v1 as uuidv1 } from "uuid";

const config = require("../db/config");

AWS.config.update(config.aws_config);

const client = new AWS.DynamoDB.DocumentClient();

const tablename = config.aws_table_name;


export const servicegetMember = ()  => {

  const params = {
    TableName: tablename
  }

  try{
    let result = client.scan(params).promise();
    return result;
  }catch(err){
    throw Error(err);
  }
  
}

export const serviceaddMember = async (query?:any)  => {  

  const Item = {...query};
  Item.id = uuidv1();

  const params = {
    TableName: tablename,
    Item
  }

  try{
    let result = await client.put(params).promise();
    return result;
  }catch(err){
    throw Error(err);
  }

}
