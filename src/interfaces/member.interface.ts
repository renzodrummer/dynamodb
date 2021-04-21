export interface memberInterface {
  id: string;
  name: string;
  address: string;
}

export class publicMemberData {
  name: string;
  address: string;

  constructor (data: memberInterface) {
    this.name = data.name;
    this.address = data.address;
  }
    
}

export class privateMemberData extends publicMemberData implements memberInterface {
  id: string;
  constructor (data: memberInterface) {
    super(data);
    this.id = data.id;
  }
}