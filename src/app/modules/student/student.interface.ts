import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};
export type Uname = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  localGuardianName: string;
  localGuardianOccupation: string;
  localGuardianContact: string;
};
export type Student = {
  id: string;
  name: Uname;
  gender: 'male' | 'female';
  dateofBirth: string;
  email: string;
  emergencytContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'AB+' | 'O+' | 'O-';
  presentAddress?: string;
  permanentAddress?: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isAtive: 'Active' | 'inActive';
};
