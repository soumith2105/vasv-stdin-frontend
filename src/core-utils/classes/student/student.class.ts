import { IStudent } from "../../interfaces/student/student.interface";

export class Student implements IStudent {
  roll_number: string;

  name: string;

  current_year: number;

  current_sem: number;

  branch: string;

  section: string;

  current_status: string;

  constructor(student: IStudent) {
      this.roll_number = student.roll_number;
      this.name = student.name;
      this.current_year = student.current_year;
      this.current_sem = student.current_sem;
      this.branch = student.branch;
      this.section = student.section;
      this.current_status = student.current_status;
  }
}
