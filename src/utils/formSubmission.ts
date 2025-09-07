import { supabase } from './supabaseClient';

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
}

type FormType = 'volunteer' | 'collaborate' | 'catalyst' | 'campus_ambassador';

/* ---------- generic helper ---------- */
const insertIntoSupabase = async (
  formType: FormType,
  body: Record<string, any>
): Promise<FormSubmissionResponse> => {
  console.log(`Attempting to insert into ${formType} table:`, body);
  
  try {
    const { error, data } = await supabase.from(formType).insert([body]);
    
    console.log('Supabase response:', { error, data });

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, message: error.message };
    }
    return { success: true, message: 'Submitted!', data };
  } catch (err) {
    console.error('Exception during Supabase insert:', err);
    return { success: false, message: 'Network error: ' + (err as Error).message };
  }
};

/* ---------- specific helpers ---------- */
export const submitVolunteerForm = (f: {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  occupation: string;
  schoolCollege: string;
  openToResearch: boolean;
}) => {
  return insertIntoSupabase('volunteer', {
    full_name: f.fullName,
    email: f.email,
    phone: f.phone,
    city: f.city,
    state: f.state,
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
  city: string;
  state: string;
  collaborationAreas: string[];
  objective: string;
  openToResearch: boolean;
}) => {
  return insertIntoSupabase('collaborate', {
    org_name: f.organizationName,
    org_type: f.organizationType,
    website: f.website,
    rep_name: f.representativeName,
    email: f.email,
    phone: f.phone,
    city: f.city,
    state: f.state,
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
  city: string;
  state: string;
  supportTypes: string[];
  engagementFormat: string;
  alignmentAreas: string[];
  openToResearch: boolean;
}) => {
  return insertIntoSupabase('catalyst', {
    org_name: f.organizationName,
    website: f.website,
    rep_name: f.representativeName,
    designation: f.designation,
    email: f.email,
    phone: f.phone,
    city: f.city,
    state: f.state,
    support_types: f.supportTypes.join(', '),
    engagement_format: f.engagementFormat,
    alignment_areas: f.alignmentAreas.join(', '),
    research_opt_in: f.openToResearch
  });
};

export const submitCampusAmbassadorForm = (f: {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  school: string;
  class: string;
  counsellor: string;
  consent: boolean;
}) => {
  return insertIntoSupabase('campus_ambassador', {
    name: f.name,
    email: f.email,
    phone: f.phone,
    city: f.city,
    state: f.state,
    school: f.school,
    class: f.class,
    insfora_counsellor: f.counsellor,
    consent: f.consent
  });
};
