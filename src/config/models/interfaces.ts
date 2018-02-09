import { Component } from '@angular/core/core';

export interface AppState {
  isLoading?: boolean;
  pageTitle?: string;
  sideNav?: Sidenav;
  user?: User;
}

/**
 * @IMPORTANT: Password is only stored for DEMO purposes
 * Remove before going into a production environment!!
 */
export interface User {
  isAuth: boolean;
  email?: string;
  password?: string;
  name?: Name;
}

export interface Name {
  firstName: string;
  lastName?: string;
  nickName?: string;
}

export interface MenuLink {
  title?: string;
  link?: string;
  component?: Component;
  icon?: string;
  active?: boolean;
}


export interface Sidenav {
  state?: SidenavEnum;
  isOpen?: boolean;
  displayHeader?: boolean;
  
}

export enum SidenavEnum {
  closed = 'closed',
  open = 'open',
  partial = 'partial'
}

export interface MenuIFace {
  sections: MenuSection[];
}

export interface MenuSection {
  title: string;
  links: MenuLink[];
}

export interface StatChartIFace {
  label: string;
  amount: string | number;
  icon: string;
  unit?: string;
}
