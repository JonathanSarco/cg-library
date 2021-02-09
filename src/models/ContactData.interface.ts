export interface ContactData {
    id: string,
    name: string,
    last_name: string,
    contact_type?: string,
    client_id?: string,

    address_data_id: string,
    primary_email_data_id: string,
    recovery_email_data_id: string,
    phone_data_id: string
}