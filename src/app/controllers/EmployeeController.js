/* eslint linebreak-style: ["error", "windows"] */
import Employee from '../models/Employee';

class EmployeeController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {

    const employee = await Employee.create(req.body);

    return res.json(employee);
  }

  // eslint-disable-next-line class-methods-use-this
  async update(req, res) {
    const employeeId = req.params.id;
    const employeeExists = await Employee.findByPk(employeeId);
    if (employeeExists) {
      const updatedEmployee = await employeeExists.update(req.body);
      return res.json(updatedEmployee);
    }

    return res.status(400).json({ error: 'Employee not found.' });
  }

  // eslint-disable-next-line class-methods-use-this
  async delete(req, res) {
    const employeeId = req.params.id;
    const employeeExists = await Employee.findByPk(employeeId);
    if (employeeExists) {
      await employeeExists.destroy(req.body);
      return res.status(200).json({ message: 'Employee deleted' });
    }

    return res.status(400).json({ error: 'Employee not found.' });
  }

  // eslint-disable-next-line class-methods-use-this
  async getById(req, res) {
    const employeeId = req.params.id;
    const employeeExists = await Employee.findByPk(employeeId);
    if (employeeExists) {
      return res.json(employeeExists);
    }

    return res.status(400).json({ error: 'Employee not found.' });
  }

  // eslint-disable-next-line class-methods-use-this
  async list(req, res) {
    const employees = await Employee.findAll();
    if (employees) {
      return res.json(employees);
    }

    return res.status(400).json({ error: 'Data Error' });
  }
}

export default new EmployeeController();
