package com.ems.controller;

import org.springframework.stereotype.Component;

import com.ems.dto.EmployeeDTO;
import com.ems.entity.Employee;

import java.util.ArrayList;
import java.util.List;

@Component
public class EmployeeDTOConverter {

    public EmployeeDTO convertToDTO(Employee employee) {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setEmployee(employee);
        employeeDTO.setProfessionalDetails(employee.getProfessionalDetails());
        employeeDTO.setFinanceDetails(employee.getFinance());
        employeeDTO.setProjectDetails(employee.getProjects());
        return employeeDTO;
    }

    public List<EmployeeDTO> convertToDTOs(List<Employee> employees) {
        List<EmployeeDTO> employeeDTOList = new ArrayList<>();
        for (Employee employee : employees) {
            employeeDTOList.add(convertToDTO(employee));
        }
        return employeeDTOList;
    }
}

