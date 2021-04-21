import  { servicegetMember, serviceaddMember }  from "./member.service";
import { RequestInterface } from "../interfaces/RequestInterface";
import { publicMemberData, memberInterface } from "../interfaces/member.interface";

export const controllergetMember = async (request:RequestInterface) => {
  try{

    const member = (await servicegetMember()).Items as Array<memberInterface>;
    await Promise.all(
      member.map(element => {
        return new Promise((resolve, reject)=> {
          const data = new publicMemberData(element);
          resolve(data);
        })
      })
    )
    .then(value => {
      request.res.send(value);
    })
    .catch(err => {
      throw Error(err);
    })

  }catch(err){
    throw Error(err);
  }
}

export const controlleraddMember = async (request:RequestInterface) => {
  try{
    const member = await serviceaddMember(request.req.body);
    request.res.send(member);
  }catch(err){
    throw Error(err);
  }
}