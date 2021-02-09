import { GpxFile } from "../models/GpxFile.interface";
import GpxFileService from "../services/GpxFile.service";

class GpxFileController {

    getAllGpxFiles(): GpxFile[] {
        return GpxFileService.getAllGpxFiles();
    }

    getGpxFileById(id: string): GpxFile | undefined {
        return GpxFileService.getGpxFileById(id);
    }
}

export = new GpxFileController();