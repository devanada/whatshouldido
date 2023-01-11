interface DueType {
  date?: string;
  is_recurring?: boolean;
  lang?: string;
  string?: string;
}

export interface TodoType {
  comment_count?: number;
  content?: string;
  created_at?: string;
  creator_id?: string;
  description?: string;
  due?: DueType;
  id?: string;
  is_completed?: boolean;
  priority?: number;
  project_id?: string;
  url?: string;
}
