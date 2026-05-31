export const CREDENTIALS = {
    validUser: {
        username: 'Admin',
        password: 'admin123',
    },
    invalidUser: {
        username: 'test',
        password: 'test',
    },
};

export const URLs = {
    login: '/web/index.php/auth/login',
    dashboard: '/web/index.php/dashboard/index',
    pim: '/web/index.php/pim/viewEmployeeList',
    addEmployee: '/web/index.php/pim/addEmployee',
};

export const MESSAGES = {
  invalidCredentials: 'Invalid credentials',
  employeeSaved: 'Successfully Saved',
};
