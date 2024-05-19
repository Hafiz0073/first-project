import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  //data body theke niye asbe
  try {
    const { student } = req.body;

    //will all service function to send this data
    const result = await studentServices.createStudenttoDB(student);
    //send response
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getallStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudensFromDB();
    res.status(200).json({
      success: true,
      message: 'student find successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      status: true,
      message: 'single student found',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentControllers = {
  createStudent,
  getallStudent,
  getSingleStudent,
};
