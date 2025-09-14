/* eslint-disable react-refresh/only-export-components */
import { FC, useState, useEffect, createContext, useContext, Dispatch, SetStateAction } from 'react';
import { LayoutSplashScreen } from '../../../../_metronic/layout/core';
import { WithChildren } from '../../../../_metronic/helpers';
import axios from 'axios';
import { UserRole } from '../../../../types/Auth/Auth.type';
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

type AuthContextProps = {
  currentFrappeUser: FrappeUserType | undefined;
  setCurrentFrappeUser: Dispatch<SetStateAction<FrappeUserType | undefined>>;
  currentFrappeRoles: string[] | undefined;
  setcurrentFrappeRoles: Dispatch<SetStateAction<string[] | undefined>>;
  saveFrappeUser: (user: FrappeUserType | undefined) => void;
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

  const saveFrappeUser = (user: FrappeUserType | undefined) => {
    if (user) {
      console.log('💾 Saving user:', user);
      console.log('🎭 User roles:', user.roles);
      const roleNames = user.roles.map((role) => role.role);
      console.log('🏷️ Extracted role names:', roleNames);

      localStorage.setItem('FRAPPE_USER', JSON.stringify(user));
      setCurrentFrappeUser(user);
      localStorage.setItem('FRAPPE_ROLE', JSON.stringify(roleNames));
      setcurrentFrappeRoles(roleNames);
    } else {
      localStorage.removeItem('FRAPPE_USER');
      setCurrentFrappeUser(undefined);
      localStorage.removeItem('FRAPPE_ROLE');
      setcurrentFrappeRoles(undefined);
    }
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
      try {
        if (currentFrappeUser) {
          // بررسی اعتبار کوکی با درخواست به Frappe
          await axios.get(`/api/method/frappe.auth.get_logged_user`, { withCredentials: true });
        }
      } catch (error) {
        console.error('خطا در بررسی وضعیت احراز هویت:', error);
        logout();
      } finally {
        setShowSplashScreen(false);
      }
    };

    checkAuth();
  }, [currentFrappeUser, logout]);

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export { AuthProvider, AuthInit, useAuth };
