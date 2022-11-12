import { EventPhoto } from './eventphoto';
export interface Event {
    id:           number;
    name:         string;
    description:  string;
    event_type:   string;
    start_date:   string;
    expired_date: string;
    created_at:   Date;
    updated_at:   Date;
    deleted_at:   null;
    event_photo:  EventPhoto;
    media:        EventPhoto[];
}