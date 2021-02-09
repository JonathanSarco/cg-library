import ContactDataService from "../services/ContactData.service";

class ContactDataController {

    getAllContactData() {
        return ContactDataService.getGetAllContactData();
    }

    getContactDataById(id: string) {
        return ContactDataService.getContactDataById(id);
    }
}

export = new ContactDataController();