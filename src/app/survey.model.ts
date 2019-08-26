export interface Questions {
  quesId: string;
  quesDesc: string;
  optionsList: Options[];
}

export interface Options {
  optionId: string;
  option: string;
}

export interface QuestionsList {
  questionsList: Questions[];
}

export interface userData {
  userName: string;
  userId: number;
  role: string;
}
