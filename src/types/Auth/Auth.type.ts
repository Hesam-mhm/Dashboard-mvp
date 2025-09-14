export type RoleType = 'Bussiness Expert' | 'CEO' | 'Depot Manager' | 'Financial Manager' | 'Security';
interface SocialLogin {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  provider: string;
  userid: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
}

export interface UserRole {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  role: RoleType;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
}

interface FrappeUserType {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  enabled: number;
  email: string;
  first_name: string;
  full_name: string;
  username: string;
  language: string;
  time_zone: string;
  send_welcome_email: number;
  unsubscribed: number;
  mute_sounds: number;
  desk_theme: string;
  new_password: string;
  logout_all_sessions: number;
  reset_password_key: string;
  last_reset_password_key_generated_on: string;
  document_follow_notify: number;
  document_follow_frequency: string;
  follow_created_documents: number;
  follow_commented_documents: number;
  follow_liked_documents: number;
  follow_assigned_documents: number;
  follow_shared_documents: number;
  thread_notify: number;
  send_me_a_copy: number;
  allowed_in_mentions: number;
  simultaneous_sessions: number;
  last_ip: string;
  login_after: number;
  user_type: string;
  last_active: string;
  login_before: number;
  bypass_restrict_ip_check_if_2fa_enabled: number;
  last_login: string;
  onboarding_status: string;
  doctype: string;
  social_logins: SocialLogin[];
  roles: UserRole[];
  defaults: any[];
  block_modules: any[];
  user_emails: any[];
}
