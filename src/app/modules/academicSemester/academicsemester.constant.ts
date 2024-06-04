import {
  TAcademicSemesterCode,
  TAcademicSemesterCodeNameMapper,
  TAcademicSemesterName,
  TMonths,
} from './academicsemester.Interface';

export const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const academicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];
export const academicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];
export const academicSemesterNameCodeMapper: TAcademicSemesterCodeNameMapper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
