export class CreateUser2Dto {
  first_name: string;
  last_name: string;
  mobile_number: string;
  email: string;
  password: string;
  role: string;
  company_id: number;
}

export class UpdateUser2Dto {
  first_name?: string;
  last_name?: string;
  mobile_number?: string;
  email?: string;
  password?: string;
  role?: string;
  company_id?: number;
}
