import { ContactData } from "../models/ContactData.interface";

export const MockContactData: ContactData[] = [
    {
        id: '1',
        name: 'Kid',
        last_name: 'Cudi',
        client_id: '123456789',
        address_data_id: '1',
        primary_email_data_id: '1',
        recovery_email_data_id: '2',
        phone_data_id: '1'
    },
    {
        id: '2',
        name: 'Lionel',
        last_name: 'Messi',
        client_id: '89456456',
        address_data_id: '2',
        primary_email_data_id: '3',
        recovery_email_data_id: '4',
        phone_data_id: '2'
    },
    {
        id: '3',
        name: 'Anthony',
        last_name: 'Kieds',
        client_id: '78456123',
        address_data_id: '3',
        primary_email_data_id: '5',
        recovery_email_data_id: '6',
        phone_data_id: '1'
    },
]