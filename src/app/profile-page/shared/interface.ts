export interface IntProfile {
  id: number;
  userName: string;
  lastName: string;
  firstName: string;
  middleName: string;
  organizationName: string;
  status: string;
  email: string;
  position: string;
  managerFullName: string;
  activationDuration: Array<string>;
}


export interface IntUserrole {
  id: number;
  name: string;
  isName: string;
  approvalType: string;
  startDate: string;
  endDate: string;
}

export interface IntRole {
  id: number;
  name: string;
  description: string;
  isName: string;
}


export interface IntAudit {
  id: number;
  roleId: number;
  author: string;
  currentDate: string;
  previousDate: string;
  current: IntRole;
  previous: IntRole;
}
