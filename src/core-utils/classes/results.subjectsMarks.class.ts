import { ISubjectMarks } from "../interfaces/results/subjectsMarks.interface";

export class SubjectMarks implements ISubjectMarks {
  subject: string;

  int1_max: number;

  int1: number;

  int2_max: number;

  int2: number;

  assn1_max: number;

  assn1: number;

  assn2_max: number;

  assn2: number;

  assn3_max: number;

  assn3: number;

  quiz1_max: number;

  quiz1: number;

  quiz2_max: number;

  quiz2: number;

  quiz3_max: number;

  quiz3: number;

  sess_max: number;

  sess: number;

  ext_grade: string;

  constructor(subjectMarks: ISubjectMarks) {
      this.subject = subjectMarks.subject;
      this.int1_max = subjectMarks.int1_max;
      this.int1 = subjectMarks.int1;
      this.int2_max = subjectMarks.int2_max;
      this.int2 = subjectMarks.int2;
      this.assn1_max = subjectMarks.assn1_max;
      this.assn1 = subjectMarks.assn1;
      this.assn2_max = subjectMarks.assn2_max;
      this.assn2 = subjectMarks.assn2;
      this.assn3_max = subjectMarks.assn3_max;
      this.assn3 = subjectMarks.assn3;
      this.quiz1_max = subjectMarks.quiz1_max;
      this.quiz1 = subjectMarks.quiz1;
      this.quiz2_max = subjectMarks.quiz2_max;
      this.quiz2 = subjectMarks.quiz2;
      this.quiz3_max = subjectMarks.quiz3_max;
      this.quiz3 = subjectMarks.quiz3;
      this.sess_max = subjectMarks.sess_max;
      this.sess = subjectMarks.sess;
      this.ext_grade = subjectMarks.ext_grade;
  }
}
