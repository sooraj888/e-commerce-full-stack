import { IsEmail, IsIn, IsInt, IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;
}
