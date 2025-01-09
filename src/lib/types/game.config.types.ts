export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  questionText: string;
  answers: Answer[];
}

export interface GameConfig {
  questions: Question[];
  totalPrize: number;
}
