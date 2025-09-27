/* eslint-disable react-refresh/only-export-components */
import { FC, useState, useEffect, createContext, useContext, Dispatch, SetStateAction } from 'react';
import { LayoutSplashScreen } from '../../../../_metronic/layout/core';
import { WithChildren } from '../../../../_metronic/helpers';
import axios from 'axios';
import { RoleType, UserRole } from '../../../../types/Auth/Auth.type';
// import { BaseUrl } from '../../../configs/base_url_constant';

export interface FrappeUserType {
  name: string;
  email: string;
  full_name: string;
  user_image?: string;
  role_profile_name?: string;
  language?: string;
  time_zone?: string;
  send_welcome_email?: number;
  unsubscribed?: number;
  user_type?: string;
  creation?: string;
  modified?: string;
  modified_by?: string;
  owner?: string;
  docstatus?: number;
  idx?: number;
  enabled?: number;
  doctype?: string;
  roles: UserRole[];
}

const user = {
  name: 'ceo@mahyar.com',
  owner: 'Administrator',
  creation: '2025-05-29 16:27:08.489682',
  modified: '2025-09-08 17:16:32.055800',
  modified_by: 'Administrator',
  docstatus: 0,
  idx: 0,
  enabled: 1,
  email: 'ceo@mahyar.com',
  first_name: 'مدیرعامل',
  full_name: 'مدیرعامل',
  username: 'مدیرعامل',
  language: 'en',
  time_zone: 'Asia/Tehran',
  send_welcome_email: 1,
  unsubscribed: 0,
  mute_sounds: 0,
  desk_theme: 'Light',
  code_editor_type: 'vscode',
  search_bar: 1,
  notifications: 1,
  list_sidebar: 1,
  bulk_actions: 1,
  view_switcher: 1,
  form_sidebar: 1,
  timeline: 1,
  dashboard: 1,
  new_password: '',
  logout_all_sessions: 1,
  reset_password_key: '834017c6884279270d126d697e51a6dacf980c00866361ac4e72489eb57caa97',
  last_reset_password_key_generated_on: '2025-05-29 16:27:08.626233',
  document_follow_notify: 0,
  document_follow_frequency: 'Daily',
  follow_created_documents: 0,
  follow_commented_documents: 0,
  follow_liked_documents: 0,
  follow_assigned_documents: 0,
  follow_shared_documents: 0,
  thread_notify: 1,
  send_me_a_copy: 0,
  allowed_in_mentions: 1,
  simultaneous_sessions: 2,
  last_ip: '127.0.0.1',
  login_after: 0,
  user_type: 'System User',
  last_active: '2025-09-16 15:50:20.034669',
  login_before: 0,
  bypass_restrict_ip_check_if_2fa_enabled: 0,
  last_login: '2025-09-16 15:50:20.034561',
  onboarding_status: '{}',
  doctype: 'User',
  role_profiles: [],
  roles: [
    {
      name: '0h9gcsv5qj',
      owner: 'Administrator',
      creation: '2025-05-29 16:27:08.489682',
      modified: '2025-09-08 17:16:32.055800',
      modified_by: 'Administrator',
      docstatus: 0,
      idx: 1,
      role: 'System Manager' as RoleType,
      parent: 'ceo@mahyar.com',
      parentfield: 'roles',
      parenttype: 'User',
      doctype: 'Has Role',
    },
    {
      name: '0h97bdsant',
      owner: 'Administrator',
      creation: '2025-05-29 16:27:08.489682',
      modified: '2025-09-08 17:16:32.055800',
      modified_by: 'Administrator',
      docstatus: 0,
      idx: 2,
      role: 'CEO' as RoleType,
      parent: 'ceo@mahyar.com',
      parentfield: 'roles',
      parenttype: 'User',
      doctype: 'Has Role',
    },
    {
      name: 'bhgvpbp40t',
      owner: 'Administrator',
      creation: '2025-05-29 16:27:08.489682',
      modified: '2025-09-08 17:16:32.055800',
      modified_by: 'Administrator',
      docstatus: 0,
      idx: 3,
      role: 'Factory Manager' as RoleType,
      parent: 'ceo@mahyar.com',
      parentfield: 'roles',
      parenttype: 'User',
      doctype: 'Has Role',
    },
  ],
  block_modules: [],
  user_emails: [],
  defaults: [],
  social_logins: [
    {
      name: '03ddg3uak5',
      owner: 'Administrator',
      creation: '2025-05-29 16:27:08.508963',
      modified: '2025-09-08 17:16:32.055800',
      modified_by: 'Administrator',
      docstatus: 0,
      idx: 1,
      provider: 'frappe',
      userid: '3b63e74768ba172dde91cb19cadeef0b3b0343b',
      parent: 'ceo@mahyar.com',
      parentfield: 'social_logins',
      parenttype: 'User',
      doctype: 'User Social Login',
    },
  ],
};

type AuthContextProps = {
  currentFrappeUser: FrappeUserType | undefined;
  setCurrentFrappeUser: Dispatch<SetStateAction<FrappeUserType | undefined>>;
  currentFrappeRoles: string[] | undefined;
  setcurrentFrappeRoles: Dispatch<SetStateAction<string[] | undefined>>;
  saveFrappeUser: () => void;
  logout: () => void;
};

const initAuthContextPropsState = {
  currentFrappeUser: undefined,
  setCurrentFrappeUser: () => {},
  currentFrappeRoles: undefined,
  setcurrentFrappeRoles: () => {},
  saveFrappeUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [currentFrappeUser, setCurrentFrappeUser] = useState<FrappeUserType | undefined>(
    localStorage.getItem('FRAPPE_USER') ? JSON.parse(localStorage.getItem('FRAPPE_USER')!) : undefined,
  );
  const [currentFrappeRoles, setcurrentFrappeRoles] = useState<string[] | undefined>(() => {
    const storedRoles = localStorage.getItem('FRAPPE_ROLE');
    if (storedRoles) {
      const parsedRoles = JSON.parse(storedRoles);
      console.log('📂 Loaded roles from localStorage:', parsedRoles);
      return parsedRoles;
    }
    console.log('📂 No roles found in localStorage');
    return undefined;
  });

  const saveFrappeUser = () => {
    const roleNames = ['System Manager', 'CEO', 'Factory Manager'];

    localStorage.setItem('FRAPPE_USER', JSON.stringify(user));
    setCurrentFrappeUser({
      name: 'ceo@mahyar.com',
      owner: 'Administrator',
      creation: '2025-05-29 16:27:08.489682',
      modified: '2025-09-08 17:16:32.055800',
      modified_by: 'Administrator',
      docstatus: 0,
      idx: 0,
      enabled: 1,
      email: 'ceo@mahyar.com',
      first_name: 'مدیرعامل',
      full_name: 'مدیرعامل',
      username: 'مدیرعامل',
      language: 'en',
      time_zone: 'Asia/Tehran',
      send_welcome_email: 1,
      unsubscribed: 0,
      mute_sounds: 0,
      desk_theme: 'Light',
      code_editor_type: 'vscode',
      search_bar: 1,
      notifications: 1,
      list_sidebar: 1,
      bulk_actions: 1,
      view_switcher: 1,
      form_sidebar: 1,
      timeline: 1,
      dashboard: 1,
      new_password: '',
      logout_all_sessions: 1,
      reset_password_key: '834017c6884279270d126d697e51a6dacf980c00866361ac4e72489eb57caa97',
      last_reset_password_key_generated_on: '2025-05-29 16:27:08.626233',
      document_follow_notify: 0,
      document_follow_frequency: 'Daily',
      follow_created_documents: 0,
      follow_commented_documents: 0,
      follow_liked_documents: 0,
      follow_assigned_documents: 0,
      follow_shared_documents: 0,
      thread_notify: 1,
      send_me_a_copy: 0,
      allowed_in_mentions: 1,
      simultaneous_sessions: 2,
      last_ip: '127.0.0.1',
      login_after: 0,
      user_type: 'System User',
      last_active: '2025-09-16 15:50:20.034669',
      login_before: 0,
      bypass_restrict_ip_check_if_2fa_enabled: 0,
      last_login: '2025-09-16 15:50:20.034561',
      onboarding_status: '{}',
      doctype: 'User',
      role_profiles: [],
      roles: [
        {
          name: '0h9gcsv5qj',
          owner: 'Administrator',
          creation: '2025-05-29 16:27:08.489682',
          modified: '2025-09-08 17:16:32.055800',
          modified_by: 'Administrator',
          docstatus: 0,
          idx: 1,
          role: 'System Manager' as RoleType,
          parent: 'ceo@mahyar.com',
          parentfield: 'roles',
          parenttype: 'User',
          doctype: 'Has Role',
        },
        {
          name: '0h97bdsant',
          owner: 'Administrator',
          creation: '2025-05-29 16:27:08.489682',
          modified: '2025-09-08 17:16:32.055800',
          modified_by: 'Administrator',
          docstatus: 0,
          idx: 2,
          role: 'CEO' as RoleType,
          parent: 'ceo@mahyar.com',
          parentfield: 'roles',
          parenttype: 'User',
          doctype: 'Has Role',
        },
        {
          name: 'bhgvpbp40t',
          owner: 'Administrator',
          creation: '2025-05-29 16:27:08.489682',
          modified: '2025-09-08 17:16:32.055800',
          modified_by: 'Administrator',
          docstatus: 0,
          idx: 3,
          role: 'Factory Manager' as RoleType,
          parent: 'ceo@mahyar.com',
          parentfield: 'roles',
          parenttype: 'User',
          doctype: 'Has Role',
        },
      ],
      block_modules: [],
      user_emails: [],
      defaults: [],
      social_logins: [
        {
          name: '03ddg3uak5',
          owner: 'Administrator',
          creation: '2025-05-29 16:27:08.508963',
          modified: '2025-09-08 17:16:32.055800',
          modified_by: 'Administrator',
          docstatus: 0,
          idx: 1,
          provider: 'frappe',
          userid: '3b63e74768ba172dde91cb19cadeef0b3b0343b',
          parent: 'ceo@mahyar.com',
          parentfield: 'social_logins',
          parenttype: 'User',
          doctype: 'User Social Login',
        },
      ],
    });
    localStorage.setItem('FRAPPE_ROLE', JSON.stringify(roleNames));
    setcurrentFrappeRoles(roleNames);
  };

  const logout = async () => {
    try {
      // لاگ‌اوت از Frappe
      await axios.post(`${import.meta.env.VITE_FRAPPE_API_URL}/api/method/logout`, {}, { withCredentials: true });
    } catch (error) {
      console.error('خطا در خروج از سیستم:', error);
    } finally {
      localStorage.removeItem('FRAPPE_USER');
      setCurrentFrappeUser(undefined);
      localStorage.removeItem('FRAPPE_ROLE');
      setcurrentFrappeRoles(undefined);
      window.location.href = '/auth/login';
    }
  };

  // گوش دادن به رویدادهای خطای احراز هویت
  useEffect(() => {
    const handleAuthError = () => {
      logout();
    };

    window.addEventListener('frappe-auth-error', handleAuthError);

    return () => {
      window.removeEventListener('frappe-auth-error', handleAuthError);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentFrappeUser,
        setCurrentFrappeUser,
        currentFrappeRoles,
        setcurrentFrappeRoles,
        saveFrappeUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit: FC<WithChildren> = ({ children }) => {
  const { currentFrappeUser, logout } = useAuth();
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setShowSplashScreen(false);
    };

    checkAuth();
  }, [currentFrappeUser, logout]);

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export { AuthProvider, AuthInit, useAuth };
