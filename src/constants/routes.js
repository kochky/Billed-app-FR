import BillsUI from "../views/BillsUI.js";
import DashboardUI from "../views/DashboardUI.js";
import LoginUI from "../views/LoginUI.js";
import NewBillUI from "../views/NewBillUI.js";

export const ROUTES_PATH = {
  Login: '/',
  Bills: '#employee/bills',
  NewBill : '#employee/bill/new',
  Dashboard: '#admin/dashboard'
}

export const ROUTES = ({ pathname, data, error, loading }) => {
  switch (pathname) {
    case ROUTES_PATH['Login']:
      return LoginUI({ data, error, loading })
    case ROUTES_PATH['Bills']:
      return BillsUI({ data, error, loading })
    case ROUTES_PATH['NewBill']:
      return NewBillUI()
    case ROUTES_PATH['Dashboard']:
      return DashboardUI({ data, error, loading })
    default:
      return LoginUI({ data, error, loading })
  }
}

