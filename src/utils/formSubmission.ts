import { supabase } from './supabaseClient';

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
}

type FormType = 'volunteer' | 'collaborate' | 'catalyst';

/* ---------- generic helper ---------- */
const insertIntoSupabase = async (
  formType: FormType,
  body: Record<string, any>
): Promise<FormSubmissionResponse> => {
  const { error, data } = await supabase.from(formType).insert([body]);

  if (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
  return { success: true, message: 'Submitted!', data };
};

/* ---------- specific helpers ---------- */
export const submitVolunteerForm = (f: {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  occupation: string;
  schoolCollege: string;
  openToResearch: boolean;
}) => {
  const [city, state] = f.cityState.split(',').map((s) => s.trim());
  return insertIntoSupabase('volunteer', {
    full_name: f.fullName,
    email: f.email,
    phone: f.phone,
    city,
    state,
    occupation: f.occupation,
    school_name: f.schoolCollege,
    research_opt_in: f.openToResearch
  });
};

export const submitCollaborateForm = (f: {
  organizationName: string;
  organizationType: string;
  website: string;
  representativeName: string;
  email: string;
  phone: string;
  cityState: string;
  collaborationAreas: string[];
  objective: string;
  openToResearch: boolean;
}) => {
  const [city, state] = f.cityState.split(',').map((s) => s.trim());
  return insertIntoSupabase('collaborate', {
    org_name: f.organizationName,
    org_type: f.organizationType,
    website: f.website,
    rep_name: f.representativeName,
    email: f.email,
    phone: f.phone,
    city,
    state,
    collaboration_areas: f.collaborationAreas.join(', '),
    objective: f.objective,
    research_opt_in: f.openToResearch
  });
};

export const submitCatalystForm = (f: {
  organizationName: string;
  website: string;
  representativeName: string;
  designation: string;
  email: string;
  phone: string;
  cityState: string;
  supportTypes: string[];
  engagementFormat: string;
  alignmentAreas: string[];
  openToResearch: boolean;
}) => {
  const [city, state] = f.cityState.split(',').map((s) => s.trim());
  return insertIntoSupabase('catalyst', {
    org_name: f.organizationName,
    website: f.website,
    rep_name: f.representativeName,
    designation: f.designation,
    email: f.email,
    phone: f.phone,
    city,
    state,
    support_types: f.supportTypes.join(', '),
    engagement_format: f.engagementFormat,
    alignment_areas: f.alignmentAreas.join(', '),
    research_opt_in: f.openToResearch
  });
};
