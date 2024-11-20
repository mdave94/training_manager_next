export interface TrainingSession {
  start_time: string; // e.g., "15:00" - assumed to be in HH:MM format
  end_time: string; // e.g., "17:00" - assumed to be in HH:MM format
  trainer: string; // Name of the trainer, e.g., "David"
  location: string; // Location of the session, e.g., "Spirit Boulder Budaörs"
  description: string; // Description of the session, e.g., "Gyerek edzés 8-14 éves korig"
  training_type: string;
  capacity?: number;
}
