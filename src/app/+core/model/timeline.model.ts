export interface TimelineContent {
  title: string;
  cards: Array<TimelineCard>;
}

export interface TimelineCard {
  company: string;
  role: string;
  description: string;
  tags: Array<string>;
  date: string;
  navigateURL;
}
