import { MockContactData } from '../mocks/mockContactData';
import { MockAddressData } from '../mocks/mockAddressData';
import { MockCountryData } from '../mocks/mockCountryData';
import { MockPhoneData } from '../mocks/mockPhoneData';
import { MockEmailData } from '../mocks/mockEmailData';
import { ContactData } from '../models/ContactData.interface';
import { AddressData } from '../models/AddressData.interface';
import { CountryData } from '../models/CountryData.interface';

class ContactDataService {

    private createResponseObject = (contactData: ContactData | undefined) => {
        const address = MockAddressData.filter(ad => contactData?.address_data_id === ad.id).pop();
        const country = MockCountryData.filter(c => address?.country_data_id === c.id).pop();
        const add_country = this.createAddressResponseObject(address, country);
        const phone = MockPhoneData.filter(p => contactData?.phone_data_id === p.id).pop();
        
        const primaryEmail = MockEmailData.filter(e => contactData?.primary_email_data_id === e.id).pop();
        const secondaryEmail = MockEmailData.filter(e => contactData?.primary_email_data_id === e.id).pop(); 

        const response = {
            id: contactData?.id,
            name: contactData?.name,
            last_name: contactData?.last_name,
            address_data: add_country,
            primary_email_data: primaryEmail,
            recovery_email_data: secondaryEmail,
            phone_data_id: phone
        };
        console.log('Response created: \n', response);
        return response;
    }

    private createAddressResponseObject = (address: AddressData | undefined, country: CountryData | undefined) => {
        const response = {
            id: address?.id,
            city: address?.city,
            country_data: country
        };
        console.log('Address Object created: \n', response);
        return response
    }

    public getGetAllContactData = () => {
        const response = MockContactData.map(cd => { 
            return this.createResponseObject(undefined);
        });

        return response;
    }
    
    public getContactDataById = (id: string) => {
        const filtered: ContactData | undefined = MockContactData.filter(cd => cd.id === id).pop();
        return this.createResponseObject(filtered);
    }
}

export = new ContactDataService();

