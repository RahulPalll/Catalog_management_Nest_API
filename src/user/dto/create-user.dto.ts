export class CreateUserDto {
  first_name: string;
  last_name: string;
  mobile_number: string;
  email: string;
  password: string;
  role: string;
  company_id: number;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}
