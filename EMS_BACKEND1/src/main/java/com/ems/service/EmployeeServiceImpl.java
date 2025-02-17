package com.ems.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.entity.Employee;
import com.ems.exception.ResourceNotFoundException;
import com.ems.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
    private EmployeeRepository employeeRepository;
	
    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

//	@Override
//	public Employee getEmployeeById(Long employeeId) {
//		// TODO Auto-generated method stub
//		Employee employee=employeeRepository.findById(employeeId)
//				.orElseThrow(()->new ResourceNotFoundException("Employee Not found with this id:"+ employeeId));
//		return employeeRepository.getById(employeeId);
//	}
    @Override
    public Employee getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));
    }


	@Override
	public List<Employee> getAllEmployees() {
	    return employeeRepository.findAll();
	}

	@Override
	public Employee updateEmployee(Long employeeId, Employee updateEmployee) {
		// TODO Auto-generated method stub
		Employee emp=employeeRepository.getById(employeeId);
		emp.setFullName(updateEmployee.getFullName());
		emp.setDateOfBirth(updateEmployee.getDateOfBirth());
		emp.setGender(updateEmployee.getGender());
		emp.setAge(updateEmployee.getAge());
		emp.setCurrentAddress(updateEmployee.getCurrentAddress());
		emp.setPermanentAddress(updateEmployee.getPermanentAddress());
		emp.setMobile(updateEmployee.getMobile());
		emp.setCompanyemail(updateEmployee.getCompanyemail());
		emp.setPersonalEmail(updateEmployee.getPersonalEmail());
		
		
		return employeeRepository.save(emp);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		// TODO Auto-generated method stub
		Employee employee=employeeRepository.findById(employeeId)
				.orElseThrow(()->new ResourceNotFoundException("Employee Not found with this id:"+ employeeId));
		employeeRepository.deleteById(employeeId);
		
	}

	public Employee getpersonalDetails(Long employeeId) {
		// TODO Auto-generated method stub
		return employeeRepository.findById(employeeId).get();
		
	}

}
