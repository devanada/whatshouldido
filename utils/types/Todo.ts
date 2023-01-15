interface DueType {
  date?: string;
  is_recurring?: boolean;
  lang?: string;
  string?: string;
}

export interface TodoType {
  content?: string;
  description?: string;
  created_at?: string;
  comment_count?: number;
  creator_id?: string;
  due?: DueType;
  id?: string;
  is_completed?: boolean;
  priority?: number;
  project_id?: string;
  url?: string;
  onClickDelete?: () => void;
}
