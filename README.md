# HRM (Human Resource Management) System

## Overview
The HRM (Human Resource Management) System is a web-based application designed to streamline various HR tasks such as employee management, attendance tracking, payroll management, leave management, and report generation. The system provides HR administrators with an intuitive interface to manage these operations efficiently.

This system is built with **Django** (Python) for the backend and **React** for the frontend, leveraging a MySQL database hosted via XAMPP. The frontend communicates with the backend through APIs, which are managed using `api.js`.

## Features
- **Dashboard**: A comprehensive dashboard to view key HR statistics.
- **Employee Management**: Manage employee records such as name, position, salary, and more.
- **Attendance Management**: Track employee attendance and working hours.
- **Payroll Management**: Generate and manage employee payroll details.
- **Leave Management**: Manage and track employee leave requests.
- **Reports**: Generate reports for payroll, attendance, and other HR activities.

## Technology Stack
- **Frontend**: React.js, `api.js` for API integration
- **Backend**: Django (Python)
- **Database**: MySQL (managed via XAMPP)
- **Deployment**: [Heroku](https://www.heroku.com/) (or another free server option)

## Installation Guide

### Prerequisites
1. **Install Python**: [Download Python](https://www.python.org/downloads/)
2. **Install Node.js**: [Download Node.js](https://nodejs.org/en/download/)
3. **Install MySQL**: [Download MySQL](https://dev.mysql.com/downloads/installer/) or use XAMPP to manage your local database.

### Steps to Run the Project Locally

#### Backend (Django):
1. Clone the repository:
   ```bash
   git clone https://github.com/username/HRM.git
   cd HRM
