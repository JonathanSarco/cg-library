import { mockGpxFile } from "../mocks/mockGpxFile";

class GpxFileService {
    
    getAllGpxFiles = () => {
        console.log('Get all GPX Files: \n', mockGpxFile);
        return mockGpxFile
    }
    
    getGpxFileById = (id: string) => {
        const filtered = mockGpxFile.filter(gpx => gpx.id === id).pop();
        return filtered;
    }
}

export = new GpxFileService();
